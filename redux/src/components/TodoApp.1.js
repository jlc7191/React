import React from 'react'

// 這是舊版完整版
// 另外一支正在跑的TodoApp是拆分版, 可以看到與redux的store部分資料互動的過程

// react-redux只有兩個可以引入 1.Provider 2.connect
import { connect } from 'react-redux'

// 第二種這邊的*是全部
// as就是換名字 這邊的意思就是把抓出來的全部給他換一個actionCreator的名字
// import * as actionCreator from '../action'

// 第三種用到的傢活
import { addTodo, delTodo } from '../action'
import { bindActionCreators } from 'redux'

// 因為這邊的表單的資訊只有本地使用
// 所以直接在這邊用class處理比較單純
class TodoApp extends React.Component {
    constructor() {
        super()
        this.state = {
            value: '',
        }
    }

    handleChange = event => {
        this.setState({ value: event.target.value })
    }

    handleClick = () => {
        const text = this.state.value
        const id = +new Date()
        const payload = { id, text }
        // 第一種的時候用
        // const action = { type: 'ADD_TODO', payload }

        // 第一種不綁定
        // this.props.dispatch(action)

        // 第二種全綁定
        // 因為addTodo這個action本身就有type
        // 不需要吃上面特別加入type的action
        // 只要把payload的值塞進去就好
        // 然後這邊的addTodo就是吃action資料夾裡面的index裡面的那支todoAdd
        // this.props.addTodo(payload)

        // 第三種部分綁定
        this.props.addTodo(payload)

        //把input清空
        this.setState({ value: '' })
    }

    // del的reducers只需要接收id  然後做處理,  所以這邊就把id丟上去reducers就好
    // 這邊是寫一個closure
    handleDelClick = id => () => {
        const payload = { id }
        this.props.delTodo(payload)
    }
    render() {
        return (
            <>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>add</button>
                <ul>
                    {this.props.todos.map(item => (
                        <>
                            <li key={item.id}>
                                {item.text}
                                <button onClick={this.handleDelClick(item.id)}>
                                    del
                                </button>
                            </li>
                        </>
                    ))}
                </ul>
            </>
        )
    }
}
const mapStateToProps = store => ({ todos: store.todos })

// 第一種不綁定
// export default connect(mapStateToProps)(TodoApp)

// 第二種全綁定
// export default connect(
//     mapStateToProps,
//     actionCreator
// )(TodoApp)

// 第三種部分綁定是用bindActionCreators這個方法來綁 他是redux的
const mapDispatchToProps = dispatch =>
    bindActionCreators({ addTodo, delTodo }, dispatch)
// 第三種部分綁定 最常用,因為全部綁定會連用不到的action一起丟進來
// 全丟進來會浪費效能
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoApp)
