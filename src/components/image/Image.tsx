import "./image.css";
import { Box, CardMedia, Stack, IconButton } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { useRef, useState, useEffect } from "react";
import { itemData } from "../../data";
import { ImageBox } from "../imageBox/ImageBox";

export const Image = (props: any) => {
  const [currImage, setCurrImage] = useState(itemData[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timerId = setInterval(
      () => setIndex((i) => (i + 1) % itemData.length),
      3000
    );
    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    setCurrImage(itemData[index]);
  }, [index]);

  const carouselRef = useRef<HTMLButtonElement>(null!);

  const arrowHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget);
    setIndex((i) => (i + 1) % itemData.length);
  };

  return (
    <>
      <ImageBox currImage={currImage} />
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
        // sx={{ width: "1400px" }}
      >
        <IconButton onClick={arrowHandler}>
          <ArrowLeftIcon />
        </IconButton>
        <Box sx={{ overflow: "hidden" }}>
          <Stack direction="row" spacing={5} fontSize="large">
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
    </>
  );
};
