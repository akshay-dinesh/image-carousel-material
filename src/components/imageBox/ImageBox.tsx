import { Card, CardMedia } from "@mui/material";

export const ImageBox = (props: any) => {
  const currImg = { ...props.currImage };
  return (
    <CardMedia
      component="img"
      image={`${currImg.img}`}
      key={`${currImg.id}`}
      alt="unsplash image"
      sx={{ width: "1126px", height: "768px", borderRadius: "20px" }}
    />
  );
};
