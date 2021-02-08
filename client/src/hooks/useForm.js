import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { clearErrors } from "../store/actions/errorAction";

export const useForm = callback => {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.ui);
  const { isAuthenticated, isLoading } = useSelector(state => state.auth);
  const error = useSelector(state => state.error);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    callback();
  };

  useEffect(() => {
    if (error.id === "LOGIN_FAIL") {
      setErrorMsg(error.msg.msg);
    } else if (error.id === "REGISTER_FAIL") {
      setErrorMsg(error.msg.msg);
    } else {
      setErrorMsg(null);
    }
  }, [error]);

  //cleanup ui errors
  useEffect(() => {
    return () => {
      dispatch(clearErrors());
    };
  }, [dispatch]);

  return {
    error,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    errorMsg,
    setErrorMsg,
    isAuthenticated,
    isLoading,
    loading,
    handleSubmit
  };
};
