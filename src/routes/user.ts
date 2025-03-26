/**
 * Gijan - User Listing and Retrieval
 * -------------------------------------
 * Route: GET /
 * Description: Lists all users.
 */
router.get("/", async (_req, res) => {
  const userRepo = getRepository(User);
  const users = await userRepo.find(); // Gets all users
  res.json(users); // Returns user list
});

/**
 * Gijan - Get Single User
 * --------------------------
 * Route: GET /:id
 * Description: Gets a single user by ID.
 */
router.get("/:id", async (req, res) => {
  const userRepo = getRepository(User);
  const user = await userRepo.findOneBy({ id: parseInt(req.params.id) });
  if (user) res.json(user); // Found user
  else res.status(404).json({ message: "User not found" }); // User not found
});
