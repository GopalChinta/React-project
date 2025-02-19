import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import "./UserForm.css";

export default function UserForm() {
  const [formData, setFormData] = useState({
    id: uuidv4(),
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = () =>
    localStorage.setItem("userData", JSON.stringify(formData));

  return (
    <form className="user-form">
      <TextField label="Name" name="name" onChange={handleChange} />
      <TextField label="Address" name="address" onChange={handleChange} />
      <TextField label="Email" name="email" onChange={handleChange} />
      <TextField label="Phone" name="phone" onChange={handleChange} />
      <Button onClick={handleSubmit}>Submit</Button>
    </form>
  );
}
