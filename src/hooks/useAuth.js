import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../actions/userActions";

const useAuth = () => {
  const { userInfos, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());

    if (error && error.message) {
      window.location.replace("/logout");
    }
  }, [dispatch, error]);

  return [userInfos, loading];
};

export default useAuth;
