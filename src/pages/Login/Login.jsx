import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  useLoginUserMutation,
  useLogOutUserMutation,
} from "../../redux/users/userApiSlice";
import { login, logout } from "../../redux/users/userSice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [loginUser] = useLoginUserMutation();
  const [loginOut] = useLogOutUserMutation();

  const onLogout = async () => {
    await loginOut();
    dispatch(logout());
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: res } = await loginUser({ email, password });
      console.log(res);
      dispatch(login(res));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button
        onClick={onLogout}
        style={{ border: "1px solid red", width: "100px" }}
      >
        LOGOUT
      </button>
      <h1>LOGIN</h1>
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

export default Login;
