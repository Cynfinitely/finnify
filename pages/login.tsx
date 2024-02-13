import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slices/authSlice";
import { RootState } from "../redux/store";

const Login = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const handleLogin = () => {
    // Perform authentication here (e.g., API call)
    // If successful, update Redux store
    dispatch(login("username"));
  };

  // ...
};
