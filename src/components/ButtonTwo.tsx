import { ReactNode } from "react";
import { useState } from "react";

interface Props {
    children: ReactNode;
}

function ButtonTwo({children}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const colors = ['primary', 'secondary', 'danger']
  const changeColor = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <button type="button" className={"btn btn-" + colors[selectedIndex]} onClick={changeColor}>{children}</button>
  );
}

export default ButtonTwo;