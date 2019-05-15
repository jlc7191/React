import React from 'react'
import { data } from '../data/data'
import { Link } from 'react-router-dom'
import PathNow from '../component/PathNow'

const Student = props => {
  // 1.用props.match.params.id抓取參數
  // 2.props.match.params.id 資料類型字串
  // 3.find方法，沒找到是回傳undefined
  const studentData = data.find(item => item.id === +props.match.params.id)

  return (
    <>
      <h1>學生詳細頁面</h1>
      <PathNow />
      {studentData ? (
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">姓名：{studentData.name}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">學號：{studentData.id}</li>
            <li className="list-group-item">出生年月日：{studentData.birth}</li>
          </ul>
        </div>
      ) : (
        <div className="alert alert-danger" role="alert">
          沒找到資料
        </div>
      )}
    </>
  )
}

export default Student
