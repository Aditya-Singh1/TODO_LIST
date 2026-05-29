import { updateData } from "../Action/ActionCreate"
import { ADD_DATA, DELETE_DATA } from "../Action/AtionType"

const init=[]
export default (state=init,action)=>{

switch(action.type){

    case ADD_DATA:

    console.log("payload",action.payload);
    return[...state,action.payload]


    case DELETE_DATA:
      
   const newState= state.filter((todo)=>todo.id!==action.payload)
   
   return newState;



   case updateData :

   const updateState=state.map(todo=>{
    if(todo.id===action.payload.todoid){
     todo.Username=action.payload.todo.Username
     todo.enail=action.payload.todo.email

    }
    return todo;
    
   })

   return updateState;

   default:


   return state;
}

}