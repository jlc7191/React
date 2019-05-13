import React from 'react'
import { withRouter } from 'react-router'

const PathName = props => {
    return <div>目前位置:{props.location.pathname}</div>
}

export default withRouter(PathName)
