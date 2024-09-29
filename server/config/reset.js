import { pool } from "./database.js";
import "./dotenv.js";
import produceData from "../data/produce.js";

const createProduceTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS produce;

    CREATE TABLE IF NOT EXISTS produce (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        category VARCHAR(50) NOT NULL,
        caloriesPer100g INT NOT NULL,
        seasonality VARCHAR(50) NOT NULL,
        tasteProfile VARCHAR(255) NOT NULL,
        nutritionalValue TEXT NOT NULL,
        price VARCHAR(50) NOT NULL,
        image VARCHAR(255) NOT NULL,
    );
`;

  try {
    // Execute the query to drop and create the gifts table
    const res = await pool.query(createTableQuery);
    console.log("🎉 Produce table created successfully");
  } catch (err) {
    console.error("⚠️ error creating Produce table", err);
  }
};

// Function to seed the produce table with data
const seedProduceTable = async () => {
  // First, ensure the table is created
  await createProduceTable();

  try {
    // Traverse through produce data and insert each produce into the database
    produceData.forEach((produce) => {
      const insertQuery = {
        text: `
            INSERT INTO produce (name, category, caloriesPer100g, seasonality, tasteProfile, nutritionalValue, price, image)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
          `,
      };

      const values = [
        produce.name,
        produce.category,
        produce.caloriesPer100g,
        produce.seasonality,
        produce.tasteProfile,
        produce.nutritionalValue,
        produce.price,
        produce.image,
      ];

      // Insert each produce into the database
      pool.query(insertQuery, values, (err, res) => {
        if (err) {
          console.error("⚠️ error inserting produce", err);
          return;
        }

        console.log(`✅ ${produce.name} added successfully`);
      });
    });
  } catch (err) {
    console.error("⚠️ error seeding produce data", err);
  }
};

// Call the seed function to create the table and insert the data
seedProduceTable();
