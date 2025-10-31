import React, { useContext } from "react";
import { ToastContext } from "../App";

const ToastComponent = () => {
  const contextValues = useContext(ToastContext);
  console.log(contextValues);

  return (
    <div>
      <h1>Toast Component</h1>
    </div>
  );
};

export default ToastComponent;
