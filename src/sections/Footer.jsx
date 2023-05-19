import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";

export const Footer = () => {
  const bottomText = `Nicolás Ramirez | eCommerce developed with React JS | ${new Date().getFullYear()}`;
  return (
    <Paper
      position="fixed"
      bottom="0"
      component="footer"
      sx={{
        width: "100%",
        py: "5px",
        background: "none",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          opacity: ".9",
          fontSize: ".8rem",
        }}
        color="text.secondary"
      >
        {bottomText}
      </Typography>
    </Paper>
  );
};
