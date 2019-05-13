import React from 'react'
import ToDoItem from './ToDoItem'
import ToDoInput from './ToDoInput'
import ToDoInputTwo from './ToDoInputTwo'
import ToDoInputThree from './ToDoInputThree'

class App extends React.Component {
  constructor() {
    //預設狀態
    super()
    this.state = {
      //狀態是會因使用者操作行為而改變的值，故在此表單中，state是使用者輸入的文字，也就是input的文字
      InputText: '',
      //輸入後產生的列表清單算是因為使用者的操作而連動變更的，故算是可控制的部分。這裡用陣列來儲存輸入的內容
      //items陣列內的元素結構為{id:number, text:string, isCompleted:boolean}
      items: [
        { id: 1234, text: 'buy milktea', isCompleted: false },
        { id: 5678, text: 'play game', isCompleted: true },
      ],
    }
  }
  handleChange = event => {
    this.setState({ InputText: event.target.value })
  }

  // 原來這個沒有用!!!
  // handleChange2 = text => {
  //   this.setState({ InputText: text })
  // }

  handleKeyPress = event => {
    //先判斷輸入框是否有值、並且按下的鍵是否是Enter
    if (event.target.value && event.key === 'Enter') {
      //多增加了isCompleted屬性，故items內的元素變成物件，須將其打包成物件後在丟入陣列中
      const newItem = {
        id: +new Date(), // 以建立的時間點做為unique id，之後的操作皆以此id來抓取元素所在位置，使用一元正號轉換為數值
        text: event.target.value,
        isCompleted: false,
      }

      // const newItems = [...this.state.items] //先將items陣列複製一份
      // newItems.unshift(event.target.value) //再將輸入的文字加入到新陣列中的第一個
      // const newItems = [event.target.value,...this.state.items] //上面兩行可以合併成這一行

      const newItems = [newItem, ...this.state.items] //將打包好的新物件加入陣列
      this.setState({ items: newItems, InputText: '' }) //將新陣列設定回去給items，並把input欄位中的文字清空
    }
  }
  handleCompletedClick = id => () => {
    //裡面是閉包，表示需要點擊後才會觸發
    const newItems = [...this.state.items] //先複製items陣列
    const index = this.state.items.findIndex(element => {
      //以findIndex來尋找該元素在陣列中的索引值，若有找到則會為傳索引值，沒找到則回傳-1
      if (element.id === id) return true
      else return false
    })
    newItems[index].isCompleted = !newItems[index].isCompleted //將陣列中的該索引元素的isCompleted屬性設定為與原本相反(true<->false)
    this.setState({ items: newItems }) //然後再將新的陣列設定回去給items
  }
  handleDeleteClick = id => () => {
    //裡面是閉包，表示需要點擊後才會觸發
    const newItems = [...this.state.items].filter(element => element.id !== id)
    this.setState({ items: newItems }) //然後再將新的陣列設定回去給items
  }
  render() {
    return (
      <>
        {/* <input
          type="text"
          value={this.state.InputText}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        /> */}

        {/* 改為元件寫法-1 */}
        <ToDoInput
          value={this.state.InputText}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        {/* 改為元件寫法-2 */}
        <ToDoInputTwo
          // value={this.state.InputText} //這個根本沒有用
          // onChangeTwo={this.handleChange2} //這個根本沒有用!!!
          onKeyPress={this.handleKeyPress}
        />

        {/* 改為元件寫法-3 */}
        <ToDoInputThree onKeyPress={this.handleKeyPress} />
        <ul>
          {/* 使用陣列的map方法來產生<li> */}
          {/* 因react規定list(像是ul>li或table>tr>td)中的每個元素都必須要有key值，以利處理，故須在li中加入key值 */}
          {/* map方法中是一個callback func，會對陣列中的元素逐一執行，並回傳一個新的陣列 */}
          {/* JSX中，map會自動將回傳的陣列做tostring轉換為字串，但又不同於一般陣列的tostring，他是會將全部元素合併成一個字串 */}
          {this.state.items.map((element, index) => (
            //判斷isCompleted狀態為true或false
            // if (element.isCompleted) {
            // return (
            /* <li
                      key={element.id}
                      onClick={this.handleCompletedClick(element.id)}
                    > */
            /* <del>{element.text}</del> */
            /* </li> */

            /* 因為index會隨著陣列的新增刪除而變動，故不適合當作判斷依據，因此仍然對每個item建立id，以id作為依據 */
            /* true的話，文字加入刪除線<> */

            // 拆成元件後的寫法
            /* <ToDoItem
                      key={element.id}
                      clickMethod={this.handleCompletedClick(element.id)}
                      text={element.text}
                      isDel={true}
                    /> */
            // )
            //} else {
            // return (
            /* <li
                  key={element.id}
                  onClick={this.handleCompletedClick(element.id)}
                >
                  {element.text}
                </li> */
            //拆成元件後的寫法
            /* <ToDoItem
                  key={element.id}
                  clickMethod={this.handleCompletedClick(element.id)}
                  text={element.text}
                  isDel={false}
                /> */
            //)

            //因為isDel的判斷即為element.isCompleted，故可不須用if...else判斷改寫如下
            <ToDoItem
              key={element.id}
              clickMethod={this.handleCompletedClick(element.id)}
              deleteMethod={this.handleDeleteClick(element.id)}
              text={element.text}
              isDel={element.isCompleted}
            />
          ))}
        </ul>
      </>
    )
  }
}

export default App
