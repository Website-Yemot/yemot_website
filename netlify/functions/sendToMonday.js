const axios = require("axios");

exports.handler = async (event, context) => {

    console.log("🔑 Monday key:", process.env.MONDAY_API_KEY ? "exists" : "missing");
  console.log("📦 Env keys:", Object.keys(process.env));

  const MONDAY_API_KEY = process.env.MONDAY_API_KEY;
  const BOARD_ID = "5054008482";

  try {
    const { email, phone, description } = JSON.parse(event.body);

    const columnValues = {
      name: email,
      phone_mkwycyk2: phone,
      text_mkwypt9c: description,
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

    console.log("✅ Monday API response:", response.data);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, data: response.data }),
    };
  } catch (error) {
    console.error("❌ Error sending data to Monday:", error.response?.data || error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};
