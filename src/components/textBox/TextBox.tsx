import { Typography } from "@mui/material";

export const TextBox = (props: any) => {
  const currImg = { ...props.currImage };
  return (
    <>
      <Typography variant="h1" gutterBottom>
        {currImg.title}
      </Typography>
      <Typography variant="body2" px={10}>
        {currImg.description}
      </Typography>
    </>
  );
};
