import { ADD_DATA, DELETE_DATA, UPDATE_DATA } from "./AtionType";

export const addData=(data)=>({

    type:ADD_DATA,
    payload:data,

})

export const deleteData=(id)=>({

    type:DELETE_DATA,
    payload:id,

})

export const updateData=(Udata)=>({
    type:UPDATE_DATA,
    payload:Udata,
})