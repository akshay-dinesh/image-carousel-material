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
      sx={{
        borderRadius: "20px",
      }}
    />
  );
};
