// React imports
import { useState, useEffect } from "react";

// CSS imports
import "./carousel.css";

// Component imports
import { ImageBox } from "../imageBox/ImageBox";
import { TextBox } from "../textBox/TextBox";

// Material UI imports
import { Box, CardMedia, Stack, IconButton, Grid } from "@mui/material";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { Container } from "@mui/system";

// Data import
import { itemData } from "../../data";
import { PauseButton } from "../pauseButton/PauseButton";

// Typing props
type ArrowProps = {
  dir?: "left" | "right";
};

// type IndexProps = {
//   i: number;
// };

export const Carousel = () => {
  const [currImage, setCurrImage] = useState(itemData[0]);
  const [index, setIndex] = useState(0);
  const [carouselPause, setCarouselPause] = useState<true | false>(false);
  const [isImageSelected, setIsImageSelected] = useState(false);

  // Function that sets index to iterate through the carousel
  const indexFunction = (dir: ArrowProps) => {
    switch (dir) {
      case "left":
        return setIndex((i) => (i - 1) % itemData.length);
      case "right":
        return setIndex((i) => (i + 1) % itemData.length);
      default:
        setIndex((i) => (i + 1) % itemData.length);
    }
  };

  // Function to render image according to the index
  const renderImage = (i: number) => {
    return setCurrImage(itemData[i]);
  };

  // Hook to start carousel timer upon page load
  useEffect(() => {
    // Set Interval function for timer (Runs carousel timer)
    if (
      (!carouselPause && !isImageSelected) ||
      // !carouselPause ||
      (!carouselPause && isImageSelected)
    ) {
      const timerId = setInterval(indexFunction, 3000);
      return () => clearInterval(timerId);
    }
  }, [carouselPause, isImageSelected]);

  // Hook to update image when index changes (because of timer)
  useEffect(() => {
    renderImage(index);
  }, [index]);

  // Hook to update pause button upon clicking on thumbnail
  useEffect(() => {
    if (isImageSelected) setCarouselPause(true);
  }, [isImageSelected]);

  // Function to handle next/previous images
  const arrowHandler = (dir: ArrowProps | any) => {
    indexFunction(dir);
  };

  // Function to handle carousel pause/resume
  const pauseHandler = () => {
    return setCarouselPause(!carouselPause);
  };

  return (
    <Container maxWidth={false}>
      <Grid container spacing={2} mt={1}>
        {/* Big image component */}
        <Grid item xs={7.25}>
          <ImageBox currImage={currImage} />
        </Grid>

        {/* Text Component */}
        <Grid item xs={4.75}>
          <TextBox currImage={currImage} />
        </Grid>

        {/* Carousel Component */}
        <Grid item xs={7.5}>
          <Stack direction="row">
            {/* Left arrow */}
            <IconButton
              sx={{ padding: "0" }}
              disableFocusRipple={true}
              disableRipple={true}
              edge="start"
              children={
                <ArrowLeftIcon
                  sx={{
                    fontSize: "50px",
                    color: "#000000",
                  }}
                  onClick={() => arrowHandler("left")}
                />
              }
            />

            {/* Carousel Box */}
            <Box sx={{ overflow: "hidden" }}>
              <Stack direction="row" spacing={1} fontSize="large">
                {itemData.map((item, itemIndex) => (
                  <CardMedia
                    onClick={() => {
                      setIndex(itemIndex);
                      setIsImageSelected(true);
                    }}
                    className={`${
                      itemIndex === index ? "gray-scale-off" : "gray-scale"
                    }`}
                    component="img"
                    image={`${item.img}`}
                    key={`${item.id}`}
                    alt="unsplash image"
                    sx={{
                      width: "205px",
                      height: "171px",
                      borderRadius: "20px",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </Stack>
            </Box>

            {/* Right Arrow  */}
            <IconButton
              sx={{ padding: "0" }}
              disableFocusRipple={true}
              disableRipple={true}
              size="large"
              edge="end"
              children={
                <ArrowRightOutlinedIcon
                  sx={{
                    fontSize: "50px",
                    color: "#000000",
                  }}
                  onClick={() => arrowHandler("right")}
                />
              }
            />
          </Stack>
        </Grid>

        {/* Pause button Component */}
        <Grid container xs={4} justifyContent="center" alignItems="center">
          <IconButton
            sx={{ width: "99px", height: "99px" }}
            onClick={pauseHandler}
          >
            <PauseButton
              carouselPause={carouselPause}
              // isImageSelected={isImageSelected}
            />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
};
