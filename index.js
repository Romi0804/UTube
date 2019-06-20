import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on : http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Home");
const handleProfile = (req, res) => res.send("Profile");

const betweenHome = (req, res, next) => {
  console.log("Between Home");
  next();
};

app.use(betweenHome);

app.get("/", betweenHome, handleHome);
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
