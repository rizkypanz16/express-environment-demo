require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.APP_PORT || 80;

// Define routes
app.get('/', (req, res) => {
  const environment = process.env.APP_NODE_ENV || 'development';
  const appVersion = process.env.APP_VERSION || 'latest';

  // Respond with an HTML page containing h1 and p tags
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>nginx - ${environment} ${appVersion}</title>
      <style>
          body {
              margin: 0;
              padding: 0;
              height: 100vh;
              display: flex;
              justify-content: center;
              font-family: sans-serif;
              font-family: sans-serif;
          }
          .centered-content {
              text-align: center;
          }
      </style>
  </head>
  <body>
      <div class="centered-content">
          <h2> Welcome to nginx ${environment}! - ${appVersion}</h2>
          <p>
          If you see this page, the nginx web server is successfully installed and<br/>
          working. Further configuration is required.
          </p>
          <p><i>Thank you for using nginx.</i></p>
      </div>
  </body>
  </html>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
