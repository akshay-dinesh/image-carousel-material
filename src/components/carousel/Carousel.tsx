// React imports
import { useState, useEffect } from "react";

// CSS imports
import "./carousel.css";

// Component imports
import { ImageBox } from "../imageBox/ImageBox";
import { TextBox } from "../textBox/TextBox";

// Material UI imports
import { Box, CardMedia, Stack, IconButton, Grid } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

// Data import
import { itemData } from "../../data";
import { PauseButton } from "../pauseButton/PauseButton";

export const Carousel = () => {
  const [currImage, setCurrImage] = useState(itemData[0]);
  const [index, setIndex] = useState(0);
  const [carouselPause, setCarouselPause] = useState<true | false>(false);

  // Function that sets index to iterate through the carousel
  const indexFunction = () => {
    return setIndex((i) => (i + 1) % itemData.length);
  };

  // Function that sets timer
  const setTimer = () => {};

  // Function to render image according to the index
  const renderImage = (i: any) => {
    return setCurrImage(itemData[i]);
  };

  // Hook to start carousel timer upon page load
  useEffect(() => {
    // Set Interval function for timer count
    const timerId = setInterval(indexFunction, 3000);
    return () => clearInterval(timerId);
  }, []);

  // Hook to update image when index changes (because of timer)
  useEffect(() => {
    renderImage(index);
  }, [index]);

  // Function to handle next/previous images
  const arrowHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget);
    indexFunction();
  };

  // Function to handle carousel pause/resume
  const pauseHandler = () => {
    return setCarouselPause(!carouselPause);
  };

  return (
    <Grid container spacing={2} m={0.5}>
      {/* Big image component */}
      <Grid item xs={7}>
        <ImageBox currImage={currImage} />
      </Grid>

      {/* Text Component */}
      <Grid item xs={5}>
        <TextBox currImage={currImage} />
      </Grid>

      {/* Carousel Component */}
      <Grid item xs={7}>
        <Stack
          direction="row"
          // spacing={1}
          // alignItems="center"
          // justifyContent="center"
          // sx={{ width: "1400px" }}
        >
          <IconButton onClick={arrowHandler}>
            <ArrowLeftIcon />
          </IconButton>
          <Box sx={{ overflow: "hidden" }}>
            <Stack direction="row" spacing={1} fontSize="large">
              {itemData.map((item) => (
                <CardMedia
                  component="img"
                  image={`${item.img}`}
                  key={`${item.id}`}
                  alt="unsplash image"
                  sx={{ width: "205px", height: "171px", borderRadius: "20px" }}
                />
              ))}
            </Stack>
          </Box>
          <IconButton onClick={arrowHandler}>
            <ArrowRightIcon />
          </IconButton>
        </Stack>
      </Grid>

      {/* Pause button Component */}
      <Grid item xs={5}>
        <IconButton onClick={pauseHandler}>
          <PauseButton />
        </IconButton>
      </Grid>
    </Grid>
  );
};
