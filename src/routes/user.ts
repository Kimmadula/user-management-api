// src/routes/user.ts

import { Router} from "express";
import { getRepository } from "typeorm";
import { User } from "../entities/User";

const router = Router();

/**
 *  User Creation
 * ------------------------
 * Route: POST /
 * Description: Creates a new user and saves it to the database.
 */
router.post("/", async (req, res) => {
  try {
    const userRepo = getRepository(User);
    const newUser = userRepo.create(req.body);
    await userRepo.save(newUser);
    
    // Respond with only the success message
    res.status(201).json({ message: "User created successfully!" });

  } catch (error: unknown) { 
    // Handle and log the error appropriately
    res.status(500).json({ message: "An error occurred while processing your request." });
  }
});

export default router;
