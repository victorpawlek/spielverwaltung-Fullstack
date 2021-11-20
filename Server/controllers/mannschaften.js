const model = require('../model/mannschaften');

const getMannschaften = async (req, res) => res.status(200).json(await model.getMannschaften());
const getMannschaft = async (req, res) => {
  const mannschaft = await model.getMannschaft(req.params.id);
  if (mannschaft.data.length == 0) {
    res.status(404).json({
      code: 404,
      data: `The game with the id ${req.params.id} was not found`,
    });
  } else {
    res.status(200).json(mannschaft);
  }
};
const deleteMannschaft = async (req, res) => {
  const mannschaft = await model.getMannschaft(req.params.id);
  if (mannschaft.data.length == 0) {
    res.status(404).json({
      code: 404,
      data: `The game with the id ${req.params.id} was not found`,
    });
  } else {
    res.status(200).json(await model.deleteMannschaft(req.params.id));
  }
};
const addMannschaft = async (req, res) => res.status(200).json(await model.addMannschaft(req.body));
const updateMannschaft = async (req, res) => {
  const mannschaft = await model.getMannschaft(req.params.id);
  if (mannschaft.data.length == 0) {
    res.status(404).json({
      code: 404,
      data: `The game with the id ${req.params.id} was not found`,
    });
  } else {
    res.status(200).json(await model.updateMannschaft(req.params.id,req.body));
  }
};

module.exports = { getMannschaften, deleteMannschaft, getMannschaft, addMannschaft,updateMannschaft };
