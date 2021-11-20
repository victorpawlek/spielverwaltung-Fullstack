const model = require('../model/spiele');

const getSpiele = async (req, res) => res.status(200).json(await model.getSpiele());
const getSpiel = async (req, res) => {
  const spiel = await model.getSpiel(req.params.id);
  if (spiel.data.length == 0) {
    res.status(404).json({
      code: 404,
      data: `The game with the id ${req.params.id} was not found`,
    });
  } else {
    res.status(200).json(spiel);
  }
};
const deleteSpiel = async (req, res) => {
  const spiel = await model.getSpiel(req.params.id);
  if (spiel.data.length == 0) {
    res.status(404).json({
      code: 404,
      data: `The game with the id ${req.params.id} was not found`,
    });
  } else {
    res.status(200).json(await model.deleteSpiel(req.params.id));
  }
};
const addSpiel = async (req, res) => res.status(200).json(await model.addSpiel(req.body));
const updateSpiel = async (req, res) => {
  const spiel = await model.getSpiel(req.params.id);
  if (spiel.data.length == 0) {
    res.status(404).json({
      code: 404,
      data: `The game with the id ${req.params.id} was not found`,
    });
  } else {
    res.status(200).json(await model.updateSpiel(req.params.id,req.body));
  }
};

module.exports = { getSpiele, deleteSpiel, getSpiel, addSpiel,updateSpiel };
