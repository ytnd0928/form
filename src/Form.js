import React  from 'react';

class Form extends React.Component {

  constructor(props){
    super(props)
    this.state= {
      isSubmitted:false,
      name:"",
      number:"",
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
     for(let i=0; i<100; i++){

       optionList.push(<option key="{i}" >{i}</option>)
     }
     const selectBox = (
       <select onChange = {this.handleChange}>
       {optionList}
        </select>
     )
     return (selectBox)
 }


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
      <p>名前</p>

      {this.renderName()}
      <p>郵便番号</p>
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
          />
    </p>
     </form>

   );
   }



　


    return (
      <div className = "contactForm">
        {contactForm}



      </div>


    );
  }


//名前
  handleNameChange = e => {
    this.setState({name:e.currentTarget.value})
    console.log(this.state.name);
  };
  //郵便番号
  handleAdressChange = e => {
    this.setState({number:e.currentTarget.value})
    console.log(this.state.number);
  };



  handleSubmit = e => {
    this.setState({
      isSubmitted:true
    });
     alert (this.setState({

     }))

  };

  handleChange = e => {
console.log(e.target.value);
    this.setState({
    //:e.currentTarget.value

    })
  }




}








export default Form;
