import React from 'react';

import List from './List';

class Table extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listName:"",
      listNumber:"",
      listOld:""
    };
  }

  render(){
    return(
      <div>
       <List />
      </div>

    )
  };





}

export default Table;
