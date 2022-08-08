import "./image.css";
import { Box, CardMedia, Stack, IconButton } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { useRef, useState, useEffect } from "react";

export const Image = () => {
  const [currImg, setCurrImg] = useState("");
  const [translate, setTranslate] = useState(200);

  const carouselRef = useRef<HTMLButtonElement>(null!);

  const arrowHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    // const arrowDirection = event.data - testid;
    carouselRef.current.style.transform = `translateX(-${translate}px)`;
    setTranslate(translate + 200);
  };

  const renderImage = () => {
    itemData.forEach((item, i, arr) => {
      if (item.id === 0) {
        setCurrImg(item.img);
      }
    });
  };

  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      justifyContent="center"
      sx={{ width: "1200px" }}
    >
      <IconButton
        onClick={renderImage}
        sx={{ position: "fixed", zIndex: "999", top: "60px", left: "80px" }}
      >
        <ArrowLeftIcon />
      </IconButton>
      <Box sx={{ overflow: "hidden" }}>
        <Stack
          ref={carouselRef}
          direction="row"
          spacing={5}
          sx={{ width: "900px" }}
          fontSize="large"
        >
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
      <IconButton
        onClick={arrowHandler}
        sx={{ position: "fixed", zIndex: "999", top: "60px", right: "80px" }}
      >
        <ArrowRightIcon />
      </IconButton>
    </Stack>
  );
};

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    id: 0,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    id: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    id: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    id: 3,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    id: 4,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    id: 5,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    id: 6,
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    id: 7,
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    id: 8,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    id: 9,
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    id: 10,
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    id: 11,
  },
];
