import React from 'react';
import './css/paginate.css'
import { Pagination } from 'react-bootstrap'

const Paginate = props => {
    const page = [];
    const maxPage = Math.ceil(props.count / 10);
    const minPage = 1;

    for (let i = 1; i <= maxPage; i++) {
        page.push(i);
    }

    const focusPage = e => {
        const number = e.target.dataset.page;
        props.setCurrentPage(Number(number));
    }

    const prevPage = () => props.setCurrentPage(props.currentPage - 1);
    const nextPage = () => props.setCurrentPage(props.currentPage + 1);

    return (
        <div className="custom-paginate">
            <Pagination>
                <Pagination.First onClick={() => props.setCurrentPage(minPage)}/>
                <Pagination.Prev onClick={() => {
                    minPage === props.currentPage ? props.setCurrentPage(props.currentPage) : prevPage();
                }} />
                {
                    page.map((number, i) => {
                        return (
                            <Pagination.Item active={number === props.currentPage ? true : false} data-page={number} key={i} onClick={focusPage}>{number}</Pagination.Item>
                        );
                    })
                }
                <Pagination.Next onClick={() => {
                    maxPage === props.currentPage ? props.setCurrentPage(props.currentPage) : nextPage();

                }} />
                <Pagination.Last onClick={() => props.setCurrentPage(maxPage)}/>
            </Pagination>
        </div>
    );
};

export default Paginate;