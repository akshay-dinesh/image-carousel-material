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

  // xs: // 0
  // sm: // 600
  // md: // 900
  // lg: // 1200
  // xl: // 1536

  return (
    <Container maxWidth={false}>
      <Grid
        container
        spacing={{
          xs: 1,
          sm: 1,
          md: 1.5,
          lg: 2,
          xl: 2,
        }}
        sx={{
          marginTop: {
            xs: "5px",
            sm: "10px",
            md: "10px",
            lg: "10px",
            xl: "10px",
          },
        }}
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
      >
        {/* Big image component */}
        <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
          <ImageBox currImage={currImage} />
        </Grid>

        {/* Text Component */}
        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          lg={4}
          xl={4}
          sx={{
            order: {
              xs: 3,
              sm: "initial",
            },
          }}
          zeroMinWidth
        >
          <TextBox currImage={currImage} />
        </Grid>

        {/* Carousel Component */}
        <Grid item xs={12} sm={8} md={8} lg={8} xl={8} zeroMinWidth>
          <Stack
            direction="row"
            spacing={{
              sm: 1,
              md: 1,
              lg: 3,
              xl: 3,
            }}
            sx={{
              display: {
                xs: "flex",
              },
              justifyContent: {
                xs: "center",
                sm: "center",
                xl: "start",
              },
              alignItems: {
                xs: "center",
                sm: "center",
              },
            }}
          >
            {/* Left arrow */}
            <IconButton
              sx={{
                display: {
                  xs: "flex",
                },
                justifyContent: {
                  xs: "center",
                },
                alignItems: {
                  xs: "center",
                },
                width: {
                  xs: "5px",
                  sm: "10px",
                  md: "15px",
                  lg: "20px",
                  xl: "20px",
                },
                height: {
                  xs: "5px",
                  sm: "10px",
                  md: "15px",
                  lg: "20px",
                  xl: "20px",
                },
              }}
              disableFocusRipple={true}
              disableRipple={true}
              edge="start"
              children={
                <ArrowLeftIcon
                  sx={{
                    fontSize: {
                      sm: "50px",
                      md: "70px",
                      lg: "100px",
                      xl: "140px",
                    },
                    color: "#000000",
                  }}
                  onClick={() => arrowHandler("left")}
                />
              }
            />

            {/* Carousel Box */}
            <Box sx={{ overflow: "hidden" }}>
              <Stack
                direction="row"
                spacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}
                fontSize="large"
              >
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
                      width: {
                        xs: "10px",
                        sm: "75px",
                        md: "110px",
                        lg: "150px",
                        xl: "205px",
                      },
                      height: {
                        xs: "10px",
                        sm: "75px",
                        md: "110px",
                        lg: "150px",
                        xl: "171px",
                      },
                      borderRadius: "20px",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </Stack>
            </Box>

            {/* Right Arrow  */}
            <IconButton
              sx={{
                width: {
                  xs: "5px",
                  sm: "10px",
                  md: "15px",
                  lg: "20px",
                  xl: "20px",
                },
                height: {
                  xs: "5px",
                  sm: "10px",
                  md: "15px",
                  lg: "20px",
                  xl: "20px",
                },
              }}
              disableFocusRipple={true}
              disableRipple={true}
              edge="end"
              children={
                <ArrowRightOutlinedIcon
                  sx={{
                    fontSize: {
                      sm: "50px",
                      md: "70px",
                      lg: "100px",
                      xl: "140px",
                    },
                    color: "#000000",
                  }}
                  onClick={() => arrowHandler("right")}
                />
              }
            />
          </Stack>
        </Grid>

        {/* Pause button Component */}
        <Grid
          container
          xs={4}
          sm={4}
          md={4}
          lg={4}
          xl={4}
          justifyContent="center"
          alignItems="center"
          sx={{
            width: {
              xs: "initial",
              sm: "100%",
            },
            position: {
              xs: "fixed",
              sm: "initial",
            },
            top: {
              xs: 0,
            },
            right: {
              xs: 0,
            },
          }}
        >
          <IconButton onClick={pauseHandler}>
            <PauseButton carouselPause={carouselPause} />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
};
