const express = require("express");
const routes = require("../src/routes");
// import sequelize connection
const connection = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

const init = async () => {
  try {
    await connection.sync({ force: false });

    console.log(`[INFO]: DB connection successful`);

    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(`[ERROR]: Connection to DB failed - ${error.message}`);
  }
};

init();
