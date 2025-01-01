const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  try {
    const user = req.body;
    if (!user || !user.name || !user.email) {
      return res.status(400).json({ error: 'Missing or invalid user data' });
    }
    //Further validation can be added here
    res.status(201).send(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});