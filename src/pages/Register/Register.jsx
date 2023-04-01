import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRegisterUserMutation } from "../../redux/users/userApiSlice";
import { register } from "../../redux/users/userSice";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [registerUser] = useRegisterUserMutation();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: res } = await registerUser({ email, password });
      console.log(res);
      dispatch(register(res.token));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>REGISTRATION</h1>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
          style={{ border: "1px solid black", width: "300px" }}
        />
        <input
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          style={{ border: "1px solid black", width: "300px" }}
        />
        <button
          type="submit"
          onClick={onSubmit}
          style={{ border: "1px solid black", width: "100px" }}
        >
          Button
        </button>
      </form>
    </>
  );
};

export default Register;
