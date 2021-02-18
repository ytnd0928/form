import React  from 'react';
import './App.css';
import './Form.css';

class Form extends React.Component {

  constructor(props){
    super(props)
    this.state= {
      isSubmitted:false,
      name:"",
      nameValid: true,
      number:"",
      numberValid: true,
      old:"",

    };
  }

  handleSubmit() {
 　this.setState(
 　   {
 　     isSubmitted:true
 　   });
 }

 renderName(){
   return(
   <input
    type="text"
    value={this.state.input}
    onChange={this.handleNameChange}
    maxLength='25'
    placeholder="25文字以内"
   />
 )
};

 renderSelectBox(){
   const optionList = []
     for(let i=0; i<=100; i++){

       optionList.push(<option key="{i}" >{i}</option>)
     }
     const selectBox = (
       <select onChange = {this.handleChange}>
       {optionList}
        </select>
     )
     return (selectBox)
 };

 changeValue = e => {
   this.setState({[e.target.name]: e.target.value});

 };
  buttonClick= e => {alert (JSON.stringify(this.state));
  };

　render() {

    let contactForm;
    if(this.state.isSubmitted) {
      contactForm =  (<div className='contact-submit-message'>
          送信完了
        </div>
        );
    } else {


      contactForm = (

      <form onSubmit={() => {this.handleSubmit()}} >
      <p className={this.state.nameValid ? "" : "invalid"}>名前</p>

      {this.renderName()}
      <p className={this.state.numberValid ? "" : "invalid"}>郵便番号</p>
      <input
       type ="text"
       value={this.state.input}
       onChange={this.handleAdressChange}
       maxLength='8'
       pattern="[0-9]{3}-[0-9]{4}"
       placeholder="123-1234"/>

      <p>年齢</p>
     {this.renderSelectBox()}

     <p>
     <input
          type='submit'
          value='送信'
          onSubmit={this.state.handleSubmit}
          disabled={!this.state.name || !this.state.number}


          />
    </p>
     </form>

   );
 };
   //disabledで名前と郵便番号が入力されていなければ送信を押せない仕組みになる

    return (
      <div className = "contactForm">
        {contactForm}
      </div>
   );
  }

//名前
  handleNameChange = e => {
    // 名前の文字を取ってくる
    const name = e.currentTarget.value
    // 名前の値が期待した文字列かどうか判定した結果を格納する変数を作成する
    let nameValid = true
    if (name.length === 0 || name.length > 25) {
      nameValid = false
    }
    // Pattern 2
    // let nameValid = fa;se
    // if (name.length > 0 && name.length <= 25) {
    //   nameValid = true
    // }

    // Pattern 3
    // const nameValid = name.length > 0 && name.length <= 25

    this.setState({
      name: name,
      nameValid: nameValid,
    })
    console.log(this.state.name);
  };
  //郵便番号
  handleAdressChange = e => {
    const number = e.currentTarget.value
    let numberValid = true
    if (number.length === 0 || number.length < 8){
      numberValid = false
    }

    this.setState({
      number: number,
      numberValid: numberValid,
    })


  };
 //送信ボタン
  handleSubmit = e => {
    this.setState({
      isSubmitted:true
    });

  alert (this.state.name)




  };









  handleChange = e => {

this.setState({

})
console.log(e.target.value);


}

    //:e.currentTarget.value





}


export default Form;
