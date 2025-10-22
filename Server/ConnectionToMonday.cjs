const express = require("express");
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const MONDAY_API_KEY = process.env.MONDAY_API_KEY;
const BOARD_ID = "5054008482";

app.post("/api/sendToMonday", async (req, res) => {
  const { email, phone, description } = req.body;

  const columnValues = {
   name: email,                   
   phone_mkwycyk2: phone,         
   text_mkwypt9c: description
  };

  const query = `
    mutation {
      create_item (
        board_id: ${BOARD_ID},
        item_name: "${email}",
        column_values: ${JSON.stringify(JSON.stringify(columnValues))}
      ) {
        id
      }
    }
  `;

  try {
    const response = await axios.post(
      "https://api.monday.com/v2",
      { query },
      {
        headers: {
          Authorization: MONDAY_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );
    res.status(200).json({ success: true, data: response.data });
  } catch (error) {
    console.error("Error sending data to Monday:", error.response?.data || error);
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
