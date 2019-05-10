import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Col } from 'react-bootstrap'
//目前把background寫在外掛的css裡面
//到時候連接資料庫要換底圖會有問題
//要另外想辦法解決
import './HeroSection.css'

const HeroSection = props => {
    return (
        <>
            <Col className="p-0">
                <Jumbotron className="herobg" fluid="false">
                    <h1 className="text-white text-center -5">劇院</h1>
                    <h4 className="text-white text-center mt-5">
                        找尋...怎樣怎樣的怎樣怎樣, 這邊放劇院那個敘述
                    </h4>
                </Jumbotron>
            </Col>
        </>
    )
}

export default HeroSection
