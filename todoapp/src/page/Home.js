import React from 'react'
import { data } from '../data/data'
import { Link } from 'react-router-dom'
import PathName from '../component/PathName'

const Home = props => {
    return (
        <>
            <PathName />
            <div className="list-group">
                {data.map(items => (
                    <Link
                        key={items.id}
                        className="list-group-item list-group-item-active"
                        to={'/student/' + items.id}
                    >
                        {items.name}
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Home
