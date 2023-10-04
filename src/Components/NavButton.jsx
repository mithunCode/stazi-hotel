import { Button } from "antd";
import { useState } from "react";
/* eslint-disable react/prop-types */
const NavButton = ({ city, getFromChild }) => {
  const [btn, setBtn] = useState("");
  console.log(btn);
  return (
    <>
      <div>
        <div>
          <Button
            type="default"
            className={
              city === btn
                ? `bg-white text-blue-500 w-32`
                : `bg-blue-500 text-white w-32`
            }
            onClick={() => {
              setBtn(btn.replace(btn, city));
              return getFromChild(city);
            }}
          >
            {city}
          </Button>
        </div>
      </div>
    </>
  );
};

export default NavButton;
