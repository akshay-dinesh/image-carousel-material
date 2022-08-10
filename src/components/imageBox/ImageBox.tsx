import { CardMedia } from "@mui/material";

// Typing props
type ImageProps = {
  currImage: {
    description: string;
    id: number;
    status: boolean;
    title: string;
    img: string;
  };
};

export const ImageBox = (props: ImageProps) => {
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
