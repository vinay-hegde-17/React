import React from "react";
import useForm from "./useForm";

function MyForm() {
  const initialValues = { username: '', password: '' };
  const [values, handleChange, resetForm] = useForm(initialValues);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        ></input>
        <button type="submit">Submit</button>
        <button type="button" onClick={resetForm}>
          Reset
        </button>
        
      </form>
    
    </div>
  );
}

export default MyForm;
