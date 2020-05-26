import React, { useState, useEffect, useContext } from 'react'
import './css/student.css'
import * as axios from 'axios'
import Show from './Show';
import Paginate from './Paginate'
import { DataSearchContext } from '../../context/DataContext';

const Student = () => {
    const {key:keySearch} = useContext(DataSearchContext)
    const [currentPage, setCurrentPage] = useState(1);
    const [count, setCount] = useState(0)
    const [dataStudent,  setDataStudent] = useState([]);
    const [show, setShow] = useState(false);
    const [userGetId, setUserGetId] = useState(
    {
        id: "",
        name: "",
        address: "",
        age: "",
        job: "",
        country: "",
        phonenumber: "",
        education: ""
    });
    const [edit, setEdit] = useState(false)

    console.log('keySearch', keySearch)


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleEdit = () => setEdit(true);
    const handleCloseEdit = () => setEdit(false);

    const showInfo = e => {
        const id = e.target.dataset.index;
        const user = dataStudent.find(data => data.id === id);

        if (e.target.dataset.handle === "edit") handleEdit();
        setUserGetId(user);
        handleShow();
    }

    useEffect(() => {
        axios.get(`http://localhost:3500/inforuser?_page=${currentPage}&_limit=10&q=${keySearch}`).then(res => {
            setDataStudent(res.data);
            setCount(res.headers["x-total-count"]);
        })
    }, [currentPage,keySearch])


    const update = student => {
        const id = student.id

        axios.put(`http://localhost:3500/inforuser/${id}`, {...student}).then(res => {
            if(res && res.status === 200){
                const getIndex = dataStudent.findIndex(e => e.id === id);
                if(getIndex !== -1){
                    const newData = [...dataStudent];
                    newData[getIndex]=student;
                    setDataStudent(newData);
                }
            }
        })
    }

    const deleteUser = e => {
        const id = e.target.dataset.index;
        const getIndex = dataStudent.findIndex(e => e.id === id);
        axios.delete(`http://localhost:3500/inforuser/${id}`).then(res => {
            if(res && res.status === 200) {
                const newData = [...dataStudent];
                newData.splice(getIndex, 1);
                setDataStudent(newData);
            }
        })
    }

    return (
        <>
            <div className="table-container w-100">
                    <table className="table table-striped table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Tên</th>
                                <th scope="col">Quê quán</th>
                                <th scope="col">Công việc</th>
                                <th scope="col">Chức năng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dataStudent.map((data, i) => {
                                    return (
                                        <tr key={i}>
                                            <th scope="row">{data["id"]}</th>
                                            <td>{data["name"]}</td> 
                                            <td>{data["address"]}</td>
                                            <td>{data["job"]}</td>
                                            <td>
                                                <div className="buttons">
                                                    <i data-index={data.id} data-handle="show" className="fas fa-eye" onClick={showInfo}></i>
                                                    <i data-index={data.id} data-handle="edit" className="far fa-edit" onClick={showInfo}></i>
                                                    <i data-index={data.id} data-handle="delete" className="far fa-trash-alt" onClick={deleteUser}></i>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
            </div>
            <Paginate count={count} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            <Show 
                show={show} data={userGetId} setUserGetId={setUserGetId} handleClose={handleClose} 
                edit={edit} handleCloseEdit={handleCloseEdit} update={update}
            />
        </>
    );
}

export default Student;