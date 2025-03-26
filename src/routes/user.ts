/**
 * ❌ Reyes- User Deletion
 * ----------------------
 * Route: DELETE /:id
 * Description: Deletes a user by ID.
 */
router.delete("/:id", async (req, res) => {
  const userRepo = getRepository(User);
  const result = await userRepo.delete(req.params.id); // Deletes user by ID
  res.json(result); // Returns delete result
});
