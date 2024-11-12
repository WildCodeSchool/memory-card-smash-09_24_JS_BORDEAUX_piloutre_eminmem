// Load environment variables from .env file
import "dotenv/config";

// Check database connection
// Note: This is optional and can be removed if the database connection
// is not required when starting the application
import "../database/checkConnection";

// Import the Express application from ./app
import app from "./app";

const teamMembers = [
  {
    id: 1,
    name: {
      first: "Marwane",
      last: "Ben Khalifa",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta deserunt est quas aspernatur id voluptas nesciunt ullam suscipit repellendus eius. Quisquam voluptatem repellendus quasi quos rem sint illo modi natus.",
    },
    linkedin: "mettre lien lkdin",
    picture: {
      medium: "/assets/images/Marwane.png",
    },
  },
  {
    id: 2,
    name: {
      first: "Pierre",
      last: "De Castelbajac",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta deserunt est quas aspernatur id voluptas nesciunt ullam suscipit repellendus eius. Quisquam voluptatem repellendus quasi quos rem sint illo modi natus.",
    },
    linkedin: "lien Lkdin",
    picture: {
      medium: "/assets/images/Pierre.png",
    },
  },
  {
    id: 3,
    name: {
      first: "Thomas",
      last: "Lemallier",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta deserunt est quas aspernatur id voluptas nesciunt ullam suscipit repellendus eius. Quisquam voluptatem repellendus quasi quos rem sint illo modi natus.",
    },
    linkedin: "lien Lkdin",
    picture: {
      medium: "/assets/images/Thomas.png",
    },
  },
  {
    id: 4,
    name: {
      first: "Nicolas",
      last: "Chiche",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta deserunt est quas aspernatur id voluptas nesciunt ullam suscipit repellendus eius. Quisquam voluptatem repellendus quasi quos rem sint illo modi natus.",
    },
    linkedin: "lien Lkdin",
    picture: {
      medium: "/assets/images/Nico.png",
    },
  },
];
app.get("/api/teamMembers", (req, res, next) => {
  res.json(teamMembers);
});
// Get the port from the environment variables
const port = process.env.APP_PORT;

// Start the server and listen on the specified port
app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err: Error) => {
    console.error("Error:", err.message);
  });
