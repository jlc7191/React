import React from 'react'
import { data } from '../data/data'
import { Link } from 'react-router-dom'
import PathNow from '../component/PathNow'

const Home = props => (
  <>
    <h1>學生列表頁面</h1>
    <PathNow />
    <div className="list-group">
      {data.map(item => (
        <Link
          key={item.id}
          className="list-group-item list-group-item-action"
          to={'/student/' + item.id}
        >
          {item.name}
        </Link>
      ))}
    </div>
  </>
)

export default Home
