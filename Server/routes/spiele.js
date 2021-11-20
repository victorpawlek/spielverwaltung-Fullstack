const express = require('express');
const asyncHandler = require('express-async-handler');
const { getSpiele,deleteSpiel,getSpiel,addSpiel,updateSpiel } = require('../controllers/spiele');

const router = express.Router();

router.get('/', asyncHandler(getSpiele));
router.delete('/:id', asyncHandler(deleteSpiel));
router.get('/:id', asyncHandler(getSpiel));
router.patch('/:id', asyncHandler(updateSpiel));
router.post('/', asyncHandler(addSpiel));

module.exports = router;
