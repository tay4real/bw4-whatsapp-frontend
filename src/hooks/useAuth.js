import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchUser } from "../actions/userActions";

const useAuth = () => {
  const { userInfos, loading, error } = useSelector((state) => state.user);
  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());

    console.log("userfetch");

    if (error) {
      // window.location.replace("/login");
      history.push("/login");
    }
  }, [dispatch, error]);

  return [userInfos, loading];
};

export default useAuth;
