import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
export default function EditUser() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getUser();
  }, []);
  useEffect(() => {
    getUser();
  }, []);
  //getUser
  function getUser() {
    axios.get(`http://localhost:8888/api/user/${id}`).then(function (response) {
      console.log(response.data);
      setInputs(response.data);
    });
  }
  //handleChange
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
}
  return (
    <div>
      <h1>Edit User</h1>
    </div>
  );
}
