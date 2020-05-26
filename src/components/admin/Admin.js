import React, { useState, useContext } from 'react'
import {  Link, Route, Switch } from 'react-router-dom'
import ImgBrand from '../../image/logo.webp'
import './css/admin.css'
import Avatar from '../../image/ava.jpg'
import Student from './Student'
import { DataSearchContext } from '../../context/DataContext'

const Admin = () => {
    const { action: updateKeySearch } = useContext(DataSearchContext)

    const [checkClick, setClick] = useState(false);
    const [search, setSearch] = useState(false)

    const sidebarToggle = () => {
        setClick(!checkClick);
    }

    const searchInput = () => {
        setSearch(!search);
    }

    const handleInputKeySearch = (key) => {
        updateKeySearch(key)
    }

    return (
        <>
            {/*Sidebar left*/}
            <div className={checkClick ? "sidebar sidebar-close" : "sidebar"}>
                <div className="sidebar-inner">
                    <div className={checkClick ? "sidebar-logo sidebar-logo-close" : "sidebar-logo"}>
                        <Link to="/admin/student" className="inner-logo-header">
                            <div className="img-brand">
                                <img src={ImgBrand} alt="anh cong ty"/>
                            </div>
                            <div className={checkClick ? "name-brand hidden-text" : "name-brand"}>
                                <h5>Poseidon Motel</h5>
                            </div>
                        </Link>
                    </div>
                    <ul className="list-sidebar">
                        <li className="first-li">
                            <Link to="/admin/student">
                                <span className="icon"><i className="fas fa-users"></i></span>
                                <span className={checkClick ? "icon-des hidden-text" : "icon-des"}>Quản lý sinh viên</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/profile">
                                <span className="icon"><i className="fas fa-user-secret"></i></span>
                                <span className={checkClick ? "icon-des hidden-text" : "icon-des"}>Profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/energy">
                                <span className="icon"><i className="far fa-lightbulb"></i></span>
                                <span className={checkClick ? "icon-des hidden-text" : "icon-des"}>Quản lý điện nước</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            {/*Content*/}
            <div className={checkClick ? "page-container page-content-large" : "page-container"}>
                {/*Navbar header*/}
                <div className={checkClick ? "header-container header-large" : "header-container"}>
                    <div className="header">
                        <ul className="header-left">
                            <li className="icon-header">
                                <span><i className="fas fa-bars" onClick={sidebarToggle}></i></span>
                            </li>
                            <li className="icon-header">
                                <span className={search ? "hidden-icon search-open" : "hidden-icon"}>
                                    <i className="fas fa-times" onClick={searchInput}></i>
                                </span>
                                <span className={search ? "hidden-text" : "" }>
                                    <i className="fas fa-search" onClick={searchInput}></i>
                                </span>
                            </li>
                            <li className={search ? "search-input search-open" : "search-input"}>
                                <input onChange={e =>{
                                    handleInputKeySearch(e.target.value)
                                }} className="form-control1" type="text" placeholder="Search..." />
                            </li>
                        </ul>
                        <ul className="header-right">
                            <li className="icon-header">
                                <span><i className="far fa-bell"></i></span>
                            </li>
                            <li className="icon-header">
                                <span><i className="far fa-envelope"></i></span>
                            </li>
                            <li className="icon-header-user">
                                <Link to="#" className="dropdown">
                                    <div className="avatar">
                                        <img className="img-ava" src={Avatar} alt="ava tao do" />
                                    </div>
                                    <div className="user-name">
                                        <span>Văn Nguyên</span>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/*Content*/}
                <div className="main-contain bgc-grey-100">
                    <Switch>
                        <Route exact path="/admin/student" component={Student} />
                    </Switch>
                </div>
                
            </div>
        </>
    );
}

export default Admin;