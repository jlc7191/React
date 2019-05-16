import React from 'react'
import { Col } from 'react-bootstrap'

const NewsCard = props => {
    return (
        <>
            <Col>
                <div
                    className="card mb-3"
                    style={{
                        height: '315px',
                        overflow: 'hidden',
                        background: '#28333d',
                        boxShadow: '0 0 2px #000000',
                    }}
                >
                    <div className="row no-gutters h-100">
                        <div className="col-md-4">
                            <img
                                src={props.cardImg}
                                className="card-img h-100"
                                alt="..."
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5
                                    className="card-title text-white"
                                    style={{ fontSize: '32px' }}
                                >
                                    {props.cardTitle}
                                </h5>
                                <Col
                                    md={12}
                                    className="card-text text-white"
                                    style={{
                                        height: '120px',
                                        fontSize: '22px',
                                    }}
                                >
                                    {props.cardText}
                                </Col>

                                <Col className="text-right mb-4">
                                    <a
                                        href="##"
                                        className="text-decoration-none text-warning font-weight-bold"
                                        style={{
                                            fontSize: '22px',
                                        }}
                                    >
                                        閱讀更多
                                    </a>
                                </Col>

                                <button
                                    type="button"
                                    className="btn btn-warning mr-4"
                                >
                                    <i className="fas fa-bookmark mr-1" />
                                    收藏
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-warning mx-4"
                                >
                                    <i className="fas fa-share-square mr-1" />
                                    分享
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-warning mx-4"
                                >
                                    <i className="fas fa-hand-point-right mr-1" />
                                    按讚
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-warning mx-4"
                                >
                                    <i className="far fa-comment-alt mr-1" />
                                    留言
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-warning ml-4"
                                >
                                    <i className="fas fa-flag mr-1" />
                                    檢舉
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </>
    )
}

export default NewsCard
