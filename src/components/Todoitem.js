import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding:'10px',
      borderBottom: '1px #ccc dotted',
      textDecoration : this.props.todo.completed ? 
      'line-through' : 'none'
          // if(this.props.todo.completed){
          //   return{
          //     textDecoration:'line-through'
          //   }    
          // } else{
          //   return {
          //     textDecoration:'none'
          //   }
          // }
    }
  }

  render() { 
    //{' '} is space
    const { id , title } = this.props.todo; 
    return (  
     
      <div style = {this.getStyle()}>
        <p>
           <input type="checkbox" onChange = {this.props.markCompletes.bind(this,id)}/> {' '} 
           { title } 

          <button 
            onClick={this.props.delTodo.bind(this,id)} 
            style={btnStyle}>x
          </button>
        </p>
      </div>
      
    );
  }
}
//Proptype
TodoItem.propTypes = {
  todo:PropTypes.object.isRequired,
  markCompletes:PropTypes.func.isRequired,
  delTodo:PropTypes.func.isRequired
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding : '5px 9px',
  borderRadius : '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem;