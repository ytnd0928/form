import React from 'react';
import Form from './Form';
import App　from './App.js';

class List extends React.Component {
  constructor(props){
    super(props)
    this.state={
      isSubmitted:false,
      listName:"",
      listOld:"",
      listAdress:"",
      persons:[
        {
          id:0,
          text: "田中",
        },


      ]
    }
  }



  render() {
    return(
     <div>
     
      <table
      border="5"
      onSubmit={() => {this.handleSubmit()}}
      >
      <tr>
      <th>名前</th>
      <th>郵便番号</th>
      <th>年齢</th>
      <th></th>
      </tr>
      <tr>
       <td>
       <name id={0}　text="田中" />
       <input
       type="text"
       value={this.state.listName} />
       </td>
       <td><input
       type="text"
       value={this.state.listOld}
        />

       </td>
       <td>
      <input
       type="text"
       value={this.state.listAdress} />
       </td>
       <td><button className='sakujyo'
       onClick={()=>this.handleClickDelete()}>
        削除
        </button>
        </td>
      </tr>
      </table>
    </div>
  )
}

  handleClickDelete = () => {
  const {onDelete, id }  = this.props
  onDelete(id)
  this.setState({listName:'' })

 };

 handleSubmit = e => {
   e.peventDefault()
   this.setState({listName:''})
 }
  }






export default List;
