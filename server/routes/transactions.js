const express = require('express');
const router = express.Router();
const { getTransactions, addTransaction, deleteTransaction, editTransaction } = require('../controllers/transactionController');

// Route requests to the transactions controller
router.route('/')
	.get(getTransactions)
	.post(addTransaction);

router.route('/:id')
	.delete(deleteTransaction)
	.put(editTransaction);

module.exports = router;
