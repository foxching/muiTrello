import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { clearErrors } from "../store/actions/errorAction";

export const useForm = (callback, initialState = {}) => {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.ui);
  const { isAuthenticated, isLoading } = useSelector(state => state.auth);
  const error = useSelector(state => state.error);
  const [values, setValues] = useState(initialState);
  const [hidePassword, setHidePassword] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const onChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

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
    values,
    setValues,
    hidePassword,
    setHidePassword,
    onChange,
    errorMsg,
    setErrorMsg,
    isAuthenticated,
    isLoading,
    loading,
    handleSubmit
  };
};
