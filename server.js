/**
 * dugong-backend
 * main access for backend server
 * @author Arie M. Prasetyo (2020)
 */

// main application
const app = require('./src/app');

// backend port
const port = 3000;

// Start the API server app
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
