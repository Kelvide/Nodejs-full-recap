const friendsModel = require('../models/friends.model')

const creatFriends = (req, res) => {
    const { name } = req.body
    if (!name) return res.status(400).json({ error: "Missing friend name" })
    const newFriend = { name: req.body.name, id: friendsModel.length }
    friendsModel.push(newFriend)
    res.status(200).json(newFriend)
}

const getFriends = (req, res) => {
    res.json(friendsModel)
}

const getEachFriends = (req, res) => {
    if (friendsModel[+req.params.id]) {
        res.status(200).json(friendsModel[req.params.id])
    } else {
        res.status(404).json({ error: "Friend not found" })
    }
}

module.exports = { creatFriends, getEachFriends, getFriends }