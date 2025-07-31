import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET /api/houses
export const getHouse = async (req: Request, res: Response) => {
  try {
    const houses = await prisma.house.findMany();
    res.json(houses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve houses" });
  }
};

// POST /api/houses
export const createHouse = async (req: Request, res: Response) => {
  try {
    const {
      location,
      landSize,
      bedrooms,
      price,
      bathrooms,
      floors,
      certificate,
      propertyType,
      yearBuilt,
      electricity,
      hasGarage,
      roadAccess,
      publicFacilities,
      distanceToCity,
    } = req.body;

    const newHouse = await prisma.house.create({
      data: {
        location,
        landSize,
        bedrooms,
        price,
        bathrooms,
        floors,
        certificate,
        propertyType,
        yearBuilt,
        electricity,
        hasGarage,
        roadAccess,
        publicFacilities,
        distanceToCity,
      },
    });

    res.status(201).json(newHouse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create house" });
  }
};
