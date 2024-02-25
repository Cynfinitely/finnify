// pages/register.tsx
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/slices/authSlice";
import { RootState } from "../redux/store";

const Register = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const handleRegister = () => {
    // Perform registration here (e.g., API call)
    // If successful, update Redux store
    dispatch(register("user"));
  };

  // ...
};

export default Register;
