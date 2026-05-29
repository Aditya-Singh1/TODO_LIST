import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addData} from '../Redux/Action/ActionCreate';
import { v4 } from 'uuid';
const TOODO = ({props}) => {

const[todo,setTodo]=useState({Username:'',email:'',id:'',password:''})


const handle=(e)=> {
 e.preventDefault();

setTodo({...todo,id:v4()});
 
 props(todo);
 console.log(todo)

 
}


const red={
    height:"350px",
    color:"white",
    background:"blue",
    marginLeft:"150px",
    fontSize:"30px"

}



  return (
    <div className='form' style={red}>

<form onSubmit={handle}>
<p>
<label>ADD Name</label>
<input
type='text'
value={todo.Username}
onChange={event=>setTodo({...todo,Username:event.target.value})}

/>
</p>

<p>
<label> ADD EMAIL</label>
<input
type='email'
value={todo.email}
onChange={(event)=>setTodo({...todo,email:event.target.value})}
/>
</p>
<p>
<label>ADD Password</label>
<input
type='password'
value={todo.password}
onChange={(event)=>setTodo({...todo,password:event.target.value})}
/>
 </p>

<button  type='submit'>Submit</button>

</form>
</div>
  )
}
  const mapStateToProps=(state)=>({})
 const mapDispatchToProps=(dispatch)=>({

    props:(id)=>(dispatch(addData(id)))
 })


export default connect(mapStateToProps,mapDispatchToProps)(TOODO)
