import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8888/api/user/${id}`).then((response) => {
      console.log(response.data);
      setInputs(response.data);
    });
  }, [id]); // Add `id` as a dependency in case it changes
  //handleChange
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
}
//handle submit 
const handleSubmit = (event) => {
  event.preventDefault();

  axios.put(`http://localhost:8888/api/user/${id}/edit`, inputs).then(function(response){
      console.log(response.data);
      navigate('/');
  });
  
}
  return (
    <div>
    <h1>Edit user</h1>
    <form onSubmit={handleSubmit}>
        <table cellSpacing="10">
            <tbody>
                <tr>
                    <th>
                        <label>Name: </label>
                    </th>
                    <td>
                        <input value={inputs.name} type="text" name="name" onChange={handleChange} />
                    </td>
                </tr>
                <tr>
                    <th>
                        <label>Email: </label>
                    </th>
                    <td> 
                        <input value={inputs.email} type="text" name="email" onChange={handleChange} />
                    </td>
                </tr>
                <tr>
                    <th>
                        <label>Mobile: </label>
                    </th>
                    <td>
                        <input value={inputs.mobile} type="text" name="mobile" onChange={handleChange} />
                    </td>
                </tr>
                <tr>
                    <td colSpan="2" align ="right">
                        <button>Save</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </form>
</div>
  );
}
