import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: nanoid(), text:"Hello world"}],
  editingIndex: null,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const {id, text}= action.payload
      const index=state.todos.findIndex((todo)=>todo.id==id)
      console.log(action.payload);
      console.log(action.payload.text);
      if(index!==-1){
        state.todos[index].text= text
      }
      state.editingIndex= null
    },

    setEditingIndex:(state,action)=>{
      state.editingIndex=action.payload
    }
  },
});

export const {addTodo, removeTodo, updateTodo, setEditingIndex} =todoSlice.actions

export default todoSlice.reducer
