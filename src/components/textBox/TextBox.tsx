import { Typography } from "@mui/material";
import "./textbox.css";

// Typing props
type TextProps = {
  currImage: {
    description: string;
    id: number;
    status: boolean;
    title: string;
    img: string;
  };
};

export const TextBox = (props: TextProps) => {
  const currImg = { ...props.currImage };
  return (
    <>
      <Typography
        className="heading-primary"
        variant="h3"
        px={20}
        pl={8}
        mb={10}
        gutterBottom
      >
        {currImg.title}
      </Typography>
      <Typography className="paragraph" variant="body2" px={15} pl={8}>
        {currImg.description}
      </Typography>
    </>
  );
};
