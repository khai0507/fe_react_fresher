import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { CSSProperties } from "styled-components";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 9999,
};

interface Iprops {
  isAppLoading: boolean;
}

export const LoadingCustomer = (props: Iprops) => {
  const [color, setColor] = useState("#36d7b7");

  return (
    <ClipLoader
      color={color}
      loading={props.isAppLoading}
      cssOverride={override}
      size={150}
    />
  );
};