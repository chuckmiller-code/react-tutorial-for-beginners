import { ReactNode } from "react";
import AlertBanner from "./AlertBanner";
import { useState } from "react";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

function Button({ children, color = "primary", onClick }: Props) {
    const [visibility, setVisibility] = useState(false);

    const handleClick = () => {
        setVisibility(true);
        onClick();
    }

    const handleDismiss = () => {
        setVisibility(false);
    }

  return (
    <>
        {visibility === true && <AlertBanner dismissAlert={handleDismiss}/>}
        <button type="button" className={"btn btn-" + color} onClick={handleClick}>
        {children}
        </button>
    </>
  );
}

export default Button;
