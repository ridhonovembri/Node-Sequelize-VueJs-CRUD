let express = require("express")
let db = require("./models")
let cors = require("cors")
let appRoutes = require('./routes/AppRoutes')

var corsOptions = {
  origin: "http://localhost:8083",
};

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(appRoutes)

let port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
