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
		name: {
			first: "Marwane",
			last: "Ben Khalifa",
			paragraph:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta deserunt est quas aspernatur id voluptas nesciunt ullam suscipit repellendus eius. Quisquam voluptatem repellendus quasi quos rem sint illo modi natus.",
		},
		linkedin: "mettre lien lkdin",
		picture: {
			medium: "/images/Marwane.png",
		},
	},
	{
		name: {
			first: "Pierre",
			last: "De Castelbajac",
			paragraph:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta deserunt est quas aspernatur id voluptas nesciunt ullam suscipit repellendus eius. Quisquam voluptatem repellendus quasi quos rem sint illo modi natus.",
		},
		linkedin: "lien Lkdin",
		picture: {
			medium: "/images/Pierre.png",
		},
	},
	{
		name: {
			first: "Thomas",
			last: "Lemallier",
			paragraph:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta deserunt est quas aspernatur id voluptas nesciunt ullam suscipit repellendus eius. Quisquam voluptatem repellendus quasi quos rem sint illo modi natus.",
		},
		linkedin: "lien Lkdin",
		picture: {
			medium: "/images/Thomas.png",
		},
	},
	{
		name: {
			first: "Nicolas",
			last: "Chiche",
			paragraph:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta deserunt est quas aspernatur id voluptas nesciunt ullam suscipit repellendus eius. Quisquam voluptatem repellendus quasi quos rem sint illo modi natus.",
		},
		linkedin: "lien Lkdin",
		picture: {
			medium: "/images/Nico.png",
		},
	},
];
app.get("/api/teamMembers",(req, res, next) => {
  res.json(teamMembers)
})
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
