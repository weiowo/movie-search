import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
    name: "movies",
    initialState: {},
    reducers: {
        setMovies:(state, action)=>{
            state.value = action.payload
        },
    }
})

export const { setMovies } = movieSlice.actions
export default movieSlice.reducer

// 整個userSlice就是關於user的資料的狀態，你在裡面去定義可以用哪些方法去操作這些資料，以及他們現在的狀態