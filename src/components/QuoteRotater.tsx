import { useEffect, useState } from "react";
import { Box, Typography, Fade } from "@mui/material";


const quotes = [
  "Josh is rooting for you.",
  "You did good.",
  "He who bucks Josh, uplifts himself.",
  "Every dollar brings Josh closer to peace.",
  "Give a man a dollar, and you’ve given Josh a dollar.",
  "You found the right place. Josh was waiting."
];

export function QuoteRotator() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % quotes.length);
        setShow(true);
      }, 400); // duration should match fade out
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        height: 120,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <Fade in={show} timeout={400}>
        <Typography
          variant="h6"
          sx={{
            fontStyle: "italic",
            maxWidth: "600px",
            transition: "opacity 0.4s ease-in-out",
          }}
        >
          {quotes[index]}
        </Typography>
      </Fade>
    </Box>
  );
}
