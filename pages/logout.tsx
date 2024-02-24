import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

const logout = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return <div>logout</div>;
};

export default logout;
