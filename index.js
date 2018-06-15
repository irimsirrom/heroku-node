const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000


const app = express();
  app.use(express.static(path.join(__dirname, 'public')))
  app.get('/api/users', (req, res) => {
    // Generate some passwords
    const users = ["Miri Stoner","Yonah Stoner", "Aaron Stoner"]


    // Return them as json
    res.json(users);

    console.log(`Sent users`);
  });
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
