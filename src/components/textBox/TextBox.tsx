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
        pl={{
          sm: 2,
          md: 3,
          lg: 4,
          xl: 5,
        }}
        sx={{
          fontSize: {
            sm: "25px",
            md: "30px",
            lg: "35px",
            xl: "40px",
          },
          textAlign: {
            xs: "center",
            sm: "left",
          },
        }}
        gutterBottom
      >
        {currImg.title}
      </Typography>
      <Typography
        className="paragraph"
        variant="body2"
        pl={{
          sm: 2,
          md: 3,
          lg: 4,
          xl: 5,
        }}
        sx={{
          fontSize: {
            sm: "6px",
            md: "8.25px",
            lg: "11px",
            xl: "15px",
          },
          textAlign: {
            xs: "center",
            sm: "left",
          },
        }}
      >
        {currImg.description}
      </Typography>
    </>
  );
};
