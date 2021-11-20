const express = require('express');
const asyncHandler = require('express-async-handler');
const { getMannschaften,deleteMannschaft,getMannschaft,addMannschaft,updateMannschaft } = require('../controllers/Mannschaften');

const router = express.Router();

router.get('/', asyncHandler(getMannschaften));
router.delete('/:id', asyncHandler(deleteMannschaft));
router.get('/:id', asyncHandler(getMannschaft));
router.patch('/:id', asyncHandler(updateMannschaft));
router.post('/', asyncHandler(addMannschaft));

module.exports = router;
