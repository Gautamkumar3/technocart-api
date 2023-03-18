const EventModal = require("../modal/Event");

const addEvent = async (req, res) => {
  try {
    let data = new EventModal({ ...req.body });
    await data.save();
    res.status(200).send({ status: "success", data: data });
  } catch (er) {
    res.status(403).send({ status: "error", msg: er.message });
  }
};

const getAllEvent = async (req, res) => {
  try {
    let data = await EventModal.find();
    res.status(200).send({ status: "success", data: data });
  } catch (er) {
    res.status(401).send({ status: "error", msg: er.message });
  }
};
module.exports = {
  addEvent,
  getAllEvent
};
