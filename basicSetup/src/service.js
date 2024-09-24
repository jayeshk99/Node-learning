import { userDao } from "./dao.js";
import axios from "axios";

export const getUsers = async () => {
  try {
    return await userDao();
  } catch (error) {
    throw error;
  }
};

// Replace with your access token, sender number, and the recipient's number
const accessToken =
  "EAB47K9Abf7IBO9QcyRDcBLgwquWHLtbUEVHjdkSVjUQuJB0ZCIRZCZAlM5h4OuKOHDH79dw89uLqt8n1BL6HmsoEhSZCfiVj8siN3xn7JpOJBPoSH1IoR6jZCBeiNf2gn2f3UYZAcSAgBNnjgLtWepy9mmGaCslQXZBcwqxizwLkLlHJoBE2pUeveV4tSk7lBqI1pwre3ae6Yups6nbgIfD";
const senderPhoneNumberId = "YOUR_SENDER_PHONE_NUMBER_ID";
const recipientPhoneNumber = "RECIPIENT_PHONE_NUMBER";

export const sendMessage = async () => {
  try {
    // const url = `https://graph.facebook.com/v20.0/420386467818642/messages`;

    // const data = {
    //   messaging_product: "whatsapp",
    //   to: "917057514933",
    //   type: "template",
    //   template: {
    //     name: "hello_world",
    //     language: {
    //       code: "en_US",
    //     },
    //   },
    // };

    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${accessToken}`,
    //     "Content-Type": "application/json",
    //   },
    // };

    // const response = await axios.post(url, data, config);

    const response = await axios.post(
      "https://graph.facebook.com/v20.0/420386467818642/messages",
      {
        messaging_product: "whatsapp",
        to: "919015882814",
        type: "template",
        template: {
          name: "birthday_wish",
          language: {
            code: "en",
          },
          components: [
            {
              type: "header",
              parameters: [
                {
                  type: "text",
                  text: "Yogi",
                },
              ],
            },
          ],
        },
      },
      {
        headers: {
          Authorization:
            "Bearer EAB47K9Abf7IBO9QcyRDcBLgwquWHLtbUEVHjdkSVjUQuJB0ZCIRZCZAlM5h4OuKOHDH79dw89uLqt8n1BL6HmsoEhSZCfiVj8siN3xn7JpOJBPoSH1IoR6jZCBeiNf2gn2f3UYZAcSAgBNnjgLtWepy9mmGaCslQXZBcwqxizwLkLlHJoBE2pUeveV4tSk7lBqI1pwre3ae6Yups6nbgIfD",
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Message sent:", response.data);
    return response.data;
  } catch (error) {
    console.log("error:", error);
    console.error(
      "Error sending message:",
      error.response ? error.response.data : error.message
    );
  }
};
