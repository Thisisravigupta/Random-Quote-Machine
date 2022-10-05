import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { FormatQuote, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/system";

const nextQuote = () => {
  return Math.floor(Math.random() * 102);
};

export const MyCard = ({ randColor, handleCallback }) => {
  const [quote, setQuote] = useState([]);
  const [author, setAuthor] = useState([]);
  const [random, setRandom] = useState(nextQuote());

  // console.log(nextQuote());

  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      )
      .then((res) => {
        console.log(res.data);
        setQuote(res.data.quotes[random].quote);
        setAuthor(res.data.quotes[random].author);
      });
  }, [random]);

  const handleNext = () => {
    handleCallback();
    setRandom(nextQuote);
  };

  return (
    <Card
      sx={{
        minWidth: 275,
        backgroundColor: "white",
        color: randColor,
        width: "40%",
        padding: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent sx={{ textAlign: "center" }}>
        <FormatQuote />
        <Typography variant="span" fontSize="1.5rem">
          {quote}
        </Typography>
        <Box textAlign="right" width="100%" fontSize="1rem" mt={2}>
          {`- ${author}`}
        </Box>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Button
            variant="contained"
            sx={{
              maxWidth: "40px",
              minWidth: "40px",
              marginRight: "5px",
              backgroundColor: randColor,
              ":hover": {
                backgroundColor: randColor,
                opacity: 0.8,
              },
            }}
          >
            <Twitter />
          </Button>
          <Button
            variant="contained"
            sx={{
              maxWidth: "40px",
              minWidth: "40px",
              backgroundColor: randColor,
              ":hover": {
                backgroundColor: randColor,
                opacity: 0.8,
              },
            }}
          >
            <Instagram />
          </Button>
        </Box>
        <Button
          variant="contained"
          onClick={handleNext}
          sx={{
            backgroundColor: randColor,
            ":hover": {
              backgroundColor: randColor,
              opacity: 0.8,
            },
          }}
        >
          New quote
        </Button>
      </CardActions>
    </Card>
  );
};
