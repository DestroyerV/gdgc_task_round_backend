const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs").promises;

const app = express();
const PORT = 3000;
const DATA_FILE = "./data.json";

app.use(bodyParser.json());

const readData = async () => {
  try {
    const data = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading data file:", err);
    return [];
  }
};

const writeData = async (data) => {
  try {
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
  } catch (err) {
    console.error("Error writing to data file:", err);
  }
};

// Routes

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Listings API" });
});

// 1. GET All Listed Items
app.get("/listing", async (req, res) => {
  const data = await readData();
  res.json({ data });
});

// 2. GET One Listed Item by ID
app.get("/listing/:id", async (req, res) => {
  const { id } = req.params;
  const data = await readData();
  const item = data.find((listing) => listing.id === id);
  if (item) {
    res.json({ data: item });
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// 3. UPDATE a Listed Item
app.put("/listing/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, seller, rating } = req.body;
  const data = await readData();
  const index = data.findIndex((listing) => listing.id === id);

  if (index !== -1) {
    const updatedItem = { ...data[index], title, description, rating };
    data[index] = updatedItem;
    await writeData(data);
    res.json({ data: updatedItem });
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// 4. CREATE a New Listing
app.post("/listing", async (req, res) => {
  const { title, description, seller, rating = 0 } = req.body;
  if (!title || !description || !seller) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  const data = await readData();
  const id = String(data.length + 1);
  const newItem = { id, title, description, seller, rating };
  data.push(newItem);
  await writeData(data);
  res.json({ data: newItem });
});

// 5. DELETE a Listed Item
app.delete("/listing/:id", async (req, res) => {
  const { id } = req.params;
  const data = await readData();
  const index = data.findIndex((listing) => listing.id === id);

  if (index !== -1) {
    data.splice(index, 1);
    await writeData(data);
    res.status(200).send("Item deleted successfully");
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
