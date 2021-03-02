import React, { cloneElement } from "react";
import useAuth from "../hooks/useAuth";
import { Spinner } from "react-bootstrap";

const Protected = (props) => {
  const [userInfos, loading] = useAuth();
  console.log(loading);
  return (
    <>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        cloneElement(props.children, { userInfos })
      )}
    </>
  );
};

export default Protected;
