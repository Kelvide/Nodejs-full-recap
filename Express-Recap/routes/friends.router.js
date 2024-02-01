const router = require("express").Router();
const friendsController = require('../controllers/friends.controller')

router.use((req, res, next) => {
    console.log('ip address', req.ip, req.url)
    next()
})

router.post('/', friendsController.creatFriends)
router.get('/', friendsController.getFriends)
router.get('/:id', friendsController.getEachFriends)

module.exports = router