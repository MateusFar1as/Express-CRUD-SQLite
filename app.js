const express = require('express');
const app = express();
const port = 5000;
const routes = require('./routes/routes');


app.use(express.json());
app.use('/students', routes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  console.log(`API is at http://localhost:${port}/students`);
});
