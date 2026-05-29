import React from 'react'
import { connect } from 'react-redux'
import { deleteData } from '../Redux/Action/ActionCreate'


const DisplayTodo = ({props ,deleteData}) => {

        const style={
        height:"400px",
        marginLeft:"150px",
        
    }
const list={
    height:"50px",
    width:"80%",
    marginLeft:"150px",
    backgroundColor:"orange",
    fontSize:"30px",
}

const btn={
    backgroundColor:"red",
    color:"white",
    width:"80px",
    height:"50px",
    fontSize:"20px",
    marginLeft:"10px"

}


  return (
   <>
      {

  props.map((p,index)=><div className='list' key={index} style={list} >uname:{p.Username}&nbsp;&nbsp;email:{p.email} pass:{p.password}

 <button onClick={e=>deleteData(p.id)} style={btn}>Delete</button></div>



)

      }
     
     </>
  )
}

const mapStateToProps=(state)=>{
 return {props:state.Reducer}
}

const mapDispatchToProps=(dispatch)=>({
    deleteData:(id)=>(dispatch(deleteData(id)))
})

export default connect(mapStateToProps,mapDispatchToProps)(DisplayTodo)
