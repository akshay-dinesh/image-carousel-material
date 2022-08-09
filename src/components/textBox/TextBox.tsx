import { Typography } from "@mui/material";

export const TextBox = (props: any) => {
  const currImg = { ...props.currImage };
  return (
    <>
      <Typography
        sx={{ textAlign: "left" }}
        variant="h3"
        px={20}
        pl={8}
        mb={10}
        gutterBottom
      >
        {currImg.title}
      </Typography>
      <Typography sx={{ textAlign: "left" }} variant="body2" px={15} pl={8}>
        {currImg.description}
      </Typography>
    </>
  );
};
