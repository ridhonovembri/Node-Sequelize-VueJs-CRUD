let express = require("express")
let db = require("./models")
let cors = require("cors")
let appRoutes = require('./routes/AppRoutes')

var corsOptions = {
  origin: "http://localhost:8080",
};

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(appRoutes)

// db.sequelize
//   .sync({ force: false })
//   .then(() => {
//     console.log("Synced db.");
//   })
//   .catch((err) => {
//     console.log("Failed to sync db: " + err.message);
//   });

// app.get("/", (req, res) => {
//   res.send("Hello World - this is cool!");
// });

// require("./routes/UserRoutes")(app);
// require("./routes/RoleRoutes")(app);

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
