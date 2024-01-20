const router = require("express").Router();
const friendsController = require('../controllers/friends.controller')

router.post('/', friendsController.creatFriends)
router.get('/', friendsController.getFriends)
router.get('/:id', friendsController.getEachFriends)

module.exports = router