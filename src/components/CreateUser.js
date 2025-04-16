import { useState } from "react";

export default function CreateUser() {

  const [inputs,setInputs]=useState({})

  // function to handle form submission
  const handleSubmit =(event)=>{
   event.preventDefault();
   console.log(inputs);
  }

  // function to handle input changes
  const handleChange =(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setInputs(values => ({...values,[name]:value}));
  }

  return (
    <div>
      <h1>Create User</h1>

      <form onSubmit={handleSubmit}>
        <table Cellspacing="10">
          <tbody>
            <tr>
              <th>
                <label>Name:</label>
              </th>
              <td>
                <input type="text" name="name" onChange={handleChange} required />
              </td>
            </tr>
            <tr>
              <th>
                <label>Email:</label>
              </th>
              <td>
                <input type="text" name="email" onChange={handleChange} required />
              </td>
            </tr>
            <tr>
              <th>
                <label>Mobile:</label>
              </th>
              <td>
                <input type="text" name="mobile" onChange={handleChange} required />
              </td>
            </tr>
            <tr>
              <td colSpan ="2" align ="right">
                <button type="submit">Create</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
