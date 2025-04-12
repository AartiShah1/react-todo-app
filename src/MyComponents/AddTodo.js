import React, { useState } from 'react'

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }

    let formStyle = {
        margin: "50px 100px", 
        padding: "20px", 
        border: "1px solid red", 
        borderRadius: "10px"
      } 
  return (
  
     
    


<form style ={formStyle} className="container my-3" onSubmit={submit}>
<div className="mb-3">
    <label htmlFor="title" className="form-label">Todo Title</label>
    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />

</div>
<div className="mb-3">
    <label htmlFor="desc" className="form-label">Todo Description</label>
    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
</div>
<button type="submit" className="btn btn-sm btn-success">Add Todo</button>
</form>




  )
}
