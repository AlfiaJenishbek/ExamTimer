import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTimer } from "../redux/slices/startSlice";

export function CountdownTimer() {
  const [timer, setTimer] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const HandleTimer = (e) => {
    setTimer(e.target.value);
  };

  const HandleStartTimer = () => {
    const [minutes, seconds] = timer.split(":").map(Number);
    if (minutes > 59 || seconds > 59) {
      return alert("!");
    }

    dispatch(addTimer(timer));
    navigate("/timer");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "white",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        borderRadius: "10px",
        padding: "30px",
        maxWidth: "400px",
        margin: "50px auto",
      }}
    >
      Заголовок
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#1976d2",
          marginBottom: "20px",
        }}
      >
        Countdown timer
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
          alignItems: "center",
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Enter new time..."
          value={timer}
          onChange={HandleTimer}
          sx={{
            bgcolor: "white",
            fontSize: "36px",
            fontWeight: "700",
          }}
        />
        <Button
          type="submit"
          variant="contained"
          onClick={HandleStartTimer}
          sx={{
            fontWeight: "bold",
            textTransform: "none",
          }}
        >
          Start
        </Button>
      </Box>
      <Typography
        variant="h3"
        sx={{
          color: "#1976d2",
          fontWeight: "bold",
          textAlign: "center",
        }}
      ></Typography>
    </Box>
  );
}
