import React from 'react'
import { data } from '../data/data'
import PathName from '../component/PathName'

const Student = props => {
    //透過網址傳過來的資料回放在props的match的params裡面
    //傳過來的資料皆為字串  比對時要小心,若要跟數字比對記得先送他一元正號轉數字
    //find這個方法會把符合的資料完整內容都找出來 findindex會把符合的資料"位置"
    //這邊這別做一個防錯機制  讓沒找到資料的情況跳出bootstrap alert
    console.log(props)
    const studentData = data.find(items => items.id === +props.match.params.id)
    console.log(studentData)
    return (
        <>
            <PathName />
            {studentData ? (
                <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h4 className="card-title">姓名:{studentData.name}</h4>
                        <h5 className="card-title">學號:{studentData.id}</h5>
                        <h5 className="card-title">
                            出生年月日:{studentData.birth}
                        </h5>
                    </div>
                </div>
            ) : (
                <div class="alert alert-danger" role="alert">
                    沒有找到資料
                </div>
            )}
        </>
    )
}

export default Student
