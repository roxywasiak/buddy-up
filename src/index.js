const express = require("express");
// const routes = require("../src/routes");
// const exphbs = require("express-handlebars");
// import sequelize connection
const connection = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

// const hbs = exphbs.create({ helpers });

// app.engine("handlebars", hbs.engine);
// app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(routes);

const init = async () => {
  try {
    await connection.sync({ force: true });

    console.log(`[INFO]: DB connection successful`);

    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(`[ERROR]: Connection to DB failed - ${error.message}`);
  }
};

init();
