import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../fakeData";

export const userSlice = createSlice({
    name: "users",
    initialState: { value: UsersData },
    reducers: {
        addUser: (state, action)=>{
            //write code for adding a user
            state.value.push(action.payload)
            //action.payload是那個action做到的值
        },
        deleteUser: (state, action)=>{
            state.value = state.value.filter((user)=> user.id !== action.payload.id)
        },
        updateUserName:(state, action)=>{
            state.value.map((user) => {
                if(user.id === action.payload.id){
                    user.username = action.payload.username;
                }
            })
        },
    }
})

export const { addUser, deleteUser, updateUserName, setMovieInfo } = userSlice.actions

export default userSlice.reducer

// 整個userSlice就是關於user的資料的狀態，你在裡面去定義可以用哪些方法去操作這些資料，以及他們現在的狀態