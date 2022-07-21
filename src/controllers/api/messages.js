const { Messages } = require("../../models");
//post
const createMessage = async (req, res) => {
  try {
    const { userType, id } = req.session.user;
    const { messageContent, responseId } = req.body;

    console.log(req.body);

    if (userType === "student") {
      await Messages.create({
        studentSenderId: id,
        messageContent,
        responseId,
      });

      return res.json({ success: true });
    } else {
      await Messages.create({
        tutorSenderId: id,
        messageContent,
        responseId,
      });

      return res.json({ success: true });
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to create Message| ${error}`);

    return res.status(500).json({ success: false });
  }
};

const getMessagesById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Messages.findAll({ where: id });

    if (!data) {
      return res.status(404).json({ success: false });
    }

    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to get all messages | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

module.exports = {
  createMessage,
  getMessagesById,
};
