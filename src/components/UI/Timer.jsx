import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Timer() {
  const [countDown, setCountDown] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const { timer } = useSelector((state) => state.start);

  const timeToSeconds = (time) => {
    const [minutes, seconds] = time.split(":").map(Number);
    return minutes * 60 + seconds;
  };

  useEffect(() => {
    if (timer) {
      setCountDown(timeToSeconds(timer));
    }
  }, [timer]);

  const toggleTimer = () => {
    setIsActive((prevState) => !prevState);
  };

  useEffect(() => {
    let interval = null;
    if (isActive && countDown > 0) {
      interval = setInterval(() => {
        setCountDown((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }
    if (countDown === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, countDown]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  const restartTimer = () => {
    setIsActive(false);
    setCountDown(timeToSeconds(timer));
  };

  const handleGoBack = () => {
    navigate("/count-down-timer");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#1976d2",
        borderRadius: 2,
        p: 4,
        boxShadow: 3,
        maxWidth: 400,
        margin: "auto",
      }}
    >
      <Box
        sx={{
          bgcolor: "white",
          borderRadius: 2,
          p: 3,
          mb: 3,
          width: "100%",
          textAlign: "center",
          boxShadow: 2,
        }}
      >
        <Typography variant="h3" color="green" fontWeight="bold">
          {formatTime(countDown)}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <Button variant="contained" color="success" onClick={toggleTimer}>
          {!isActive ? "Start" : "Pause"}
        </Button>
        <Button variant="contained" color="error" onClick={restartTimer}>
          Restart
        </Button>
        <Button variant="contained" color="error" onClick={handleGoBack}>
          NewTime
        </Button>
      </Box>
    </Box>
  );
}

export default Timer;
