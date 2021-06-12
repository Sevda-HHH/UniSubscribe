import bussinessIcon from '../../assets/img/Business2.png'
import laptomIcon from '../../assets/img/Laptop2.png'
import socialMediIcon from '../../assets/img/Group2.png'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { ProductsPaginationItem } from './ProductsPagination'
import { Pagination } from 'react-bootstrap';
import { useCallback } from 'react';
import { useState } from 'react';
export const Products = () => {

    let pagesCount = 3
    let arr: any[] = [];
    for (let i = 1; i <= pagesCount; i++) {
        arr.push(i);
    }


    return (

        <>
            <div className="container">
                <div className="row mt-5 justify-content-between">
                    <div className="col-lg-4 col-md-6 mt-4">
                        <div className="card product-card " >
                            <div className="card-img bg-pink">
                                <img src={socialMediIcon} className=" card-img-top" alt="logo" />
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <div className="pro-type">
                                        PRODUCTIVITY
                                    </div>
                                    <div className="days-left">
                                        3 days left
                                    </div>
                                </div>
                                <div className="title">
                                    Product Name Example
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className="price">
                                        100 AZN
                                    </div>
                                    <div className="exp-date">
                                        <b className="text-dark">Expire Date:</b> 09.11.21
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-2">
                                    <div className="deleteProduct">
                                        <a href="#" className="btn btn-danger">DELETE</a></div>
                                    <div className=" goToTheLink">
                                        <a href="https://www.youtube.com/">Go to the link<ArrowRightAltIcon /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-4">
                        <div className="card product-card" >
                            <div className="card-img bg-purple">
                                <img src={laptomIcon} className=" card-img-top" alt="logo" />
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <div className="pro-type">
                                        PRODUCTIVITY
                                    </div>
                                    <div className="days-left">
                                        3 days left
                                    </div>
                                </div>
                                <div className="title">
                                    Product Name Example
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className="price">
                                        100 AZN
                                    </div>
                                    <div className="exp-date">
                                        <b className="text-dark">Expire Date:</b> 09.11.21
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-3">
                                    <div className="deleteProduct">
                                        <a href="#" className="btn btn-danger">DELETE</a></div>
                                    <div className=" goToTheLink">
                                        <a href="https://www.youtube.com/">Go to the link<ArrowRightAltIcon /></a>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-4">
                        <div className="card product-card" >
                            <div className="card-img bg-blue">
                                <img src={bussinessIcon} className="card-img-top" alt="logo" />
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <div className="pro-type">
                                        PRODUCTIVITY
                                    </div>
                                    <div className="days-left">
                                        3 days left
                                    </div>
                                </div>
                                <div className="title">
                                    Product Name Example
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className="price">
                                        100 AZN
                                    </div>
                                    <div className="exp-date">
                                        <b className="text-dark">Expire Date:</b> 09.11.21
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-3">
                                    <div className="deleteProduct">
                                        <a href="#" className="btn btn-danger">DELETE</a></div>
                                    <div className=" goToTheLink">
                                        <a href="https://www.youtube.com/">Go to the link<ArrowRightAltIcon /></a>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-4">
                        <div className="card product-card " >
                            <div className="card-img bg-pink">
                                <img src={socialMediIcon} className=" card-img-top" alt="logo" />
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <div className="pro-type">
                                        PRODUCTIVITY
                                    </div>
                                    <div className="days-left">
                                        3 days left
                                    </div>
                                </div>
                                <div className="title">
                                    Product Name Example
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className="price">
                                        100 AZN
                                    </div>
                                    <div className="exp-date">
                                        <b className="text-dark">Expire Date:</b> 09.11.21
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-3">
                                    <div className="deleteProduct">
                                        <a href="#" className="btn btn-danger">DELETE</a></div>
                                    <div className=" goToTheLink">
                                        <a href="https://www.youtube.com/">Go to the link<ArrowRightAltIcon /></a>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-4">
                        <div className="card product-card" >
                            <div className="card-img bg-purple">
                                <img src={laptomIcon} className=" card-img-top" alt="logo" />
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <div className="pro-type">
                                        PRODUCTIVITY
                                    </div>
                                    <div className="days-left">
                                        3 days left
                                    </div>
                                </div>
                                <div className="title">
                                    Product Name Example
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className="price">
                                        100 AZN
                                    </div>
                                    <div className="exp-date">
                                        <b className="text-dark">Expire Date:</b> 09.11.21
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-3">
                                    <div className="deleteProduct">
                                        <a href="#" className="btn btn-danger">DELETE</a></div>
                                    <div className=" goToTheLink">
                                        <a href="https://www.youtube.com/">Go to the link<ArrowRightAltIcon /></a>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-4">
                        <div className="card product-card" >
                            <div className="card-img bg-blue">
                                <img src={bussinessIcon} className="card-img-top" alt="logo" />
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <div className="pro-type">
                                        PRODUCTIVITY
                                    </div>
                                    <div className="days-left">
                                        3 days left
                                    </div>
                                </div>
                                <div className="title">
                                    Product Name Example
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className="price">
                                        100 AZN
                                    </div>
                                    <div className="exp-date">
                                        <b className="text-dark">Expire Date:</b> 09.11.21
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-3">
                                    <div className="deleteProduct">
                                        <a href="#" className="btn btn-danger">DELETE</a></div>
                                    <div className=" goToTheLink">
                                        <a href="https://www.youtube.com/">Go to the link<ArrowRightAltIcon /></a>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            </div>
            <div className="container">
                <div className="row justify-content-center my-5">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="text-dark page-link" href="#" aria-label="Previous">
                                    <b> <span>&laquo;</span></b>
                                </a>
                            </li>
                            <ProductsPaginationItem arr={arr} />
                            <li className="page-item">
                                <a className="text-dark page-link" href="#" aria-label="Next">
                                    <b> <span aria-hidden="true">&raquo;</span></b>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}
