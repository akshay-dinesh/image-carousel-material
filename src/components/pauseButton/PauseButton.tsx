import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { useState } from "react";

export const PauseButton = (props: any) => {
  const carouselPause = { ...props };
  const [buttonState, setButtonState] = useState(carouselPause.carouselPause);

  // Function to handle button state
  const pauseHandler = () => {
    return setButtonState(!buttonState);
  };

  // Object to store button details
  const button = {
    false: (
      <PauseCircleFilledIcon
        sx={{
          fontSize: "50px",
          width: "99px",
          height: "99px",
          color: "#25BEDA",
        }}
        onClick={pauseHandler}
      />
    ),
    true: (
      <PlayCircleFilledIcon
        sx={{
          fontSize: "50px",
          width: "99px",
          height: "99px",
          color: "#25BEDA",
        }}
        onClick={pauseHandler}
      />
    ),
  };

  return <>{buttonState ? button.true : button.false}</>;
};
