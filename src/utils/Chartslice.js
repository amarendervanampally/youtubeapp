import { createSlice } from "@reduxjs/toolkit";

const chartSlice = createSlice({
    name :'chat',
    initialState : {
        messages : []
    },
    reducers : {
        addMessage : (state,action) => {
            state.messages.splice(5,1);
            state.messages.unshift(action.payload);
        },
    },

});
export const {addMessage} =chartSlice.actions;
export default chartSlice.reducer;