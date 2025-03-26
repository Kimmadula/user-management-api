// src/routes/user.ts

import { Router } from "express";
import { getRepository } from "typeorm";
import { User } from "../entities/User";

const router = Router();

/**
 * User Creation
 * ------------------------
 * Route: POST /
 * Description: Creates a new user and saves it to the database.
 */
router.post("/", async (req, res) => {
  try {
    console.log("Incoming request body:", req.body); // Debugging
    
    const userRepo = getRepository(User);
    const newUser = userRepo.create(req.body);
    const result = await userRepo.save(newUser);
    
    res.status(201).json(result);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal Server Error", error: error instanceof Error ? error.message : "Unknown error" });
  }
});


export default router;
