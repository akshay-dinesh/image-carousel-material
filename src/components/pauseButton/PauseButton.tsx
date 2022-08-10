import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { useState, useEffect } from "react";

// Typing props
type BooleanProps = {
  carouselPause: boolean;
};

export const PauseButton = (props: BooleanProps) => {
  const carouselPause = { ...props };
  const [buttonState, setButtonState] = useState(carouselPause.carouselPause);

  // Function to handle button state
  const pauseHandler = () => {
    return setButtonState(!carouselPause.carouselPause);
  };

  useEffect(() => {
    pauseHandler();
  }, [carouselPause.carouselPause]);

  // Object to store button details
  const button = {
    false: (
      <PauseCircleFilledIcon
        sx={{
          fontSize: {
            sm: "40px",
            xl: "50px",
            lg: "60px",
          },
          width: {
            sm: "50px",
            xl: "99px",
            lg: "120px",
          },
          height: {
            sm: "50px",
            xl: "99px",
            lg: "120px",
          },
          color: "#25BEDA",
        }}
        onClick={pauseHandler}
      />
    ),
    true: (
      <PlayCircleFilledIcon
        sx={{
          fontSize: {
            sm: "40px",
            xl: "50px",
            lg: "60px",
          },
          width: {
            sm: "50px",
            xl: "99px",
            lg: "120px",
          },
          height: {
            sm: "50px",
            xl: "99px",
            lg: "120px",
          },
          color: "#25BEDA",
        }}
        onClick={pauseHandler}
      />
    ),
  };

  return <>{buttonState ? button.false : button.true}</>;
};
