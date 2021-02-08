import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const useForm = callback => {
  const { loading } = useSelector(state => state.ui.loading);
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