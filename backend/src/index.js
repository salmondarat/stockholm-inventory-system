const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Stockholm IMS API is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
