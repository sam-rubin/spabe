const express = require("express");
const path = require("path"); // Import the path module
let participants = [];
const app = express();
const port = 3001;

// Serve static files from a 'public' directory (optional, but good practice for assets)
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
// Catch-all route to serve index.html for any other GET request
app.post("/registerUser", (req, res) => {
  console.log(req.body);
  participants.push(req.body);
  res.json({ success: true });
});
console.log(__dirname);

app.get("/*path", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
