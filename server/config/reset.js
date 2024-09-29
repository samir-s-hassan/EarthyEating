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
