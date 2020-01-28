// const express = require('express')
// const app = express()
// let users = [{id: 1, name: 'Jacob'}, {id: 2, name: 'Tramy'}]
// app.use(express.json())
const {Request} = require('ally-http-request')

// let myUrl = 'http://localhost:4243/api/users';
let ally = new Request()
// console.log(Request)
ally.get('https://breakingbad.com/api/characters').then(res => console.log(res))

// app.get('/api/users', (req, res) => {
//     res.status(200).json(users)
// })

// app.post('/api/users', (req, res) => {
//     users.push(req.body)
//     res.status(200).json(users)
// })

// app.put('/api/users/:id', (req, res) => {
//     const {id} = req.params
//     let foundUser = users.findIndex(user => user.id == id)
//     users.splice(foundUser,1,req.body)
//     res.status(200).json(users)
// })

// app.delete(`/api/users/:id`, (req, res) => {
//     const {id} = req.params
//     let foundUser = users.findIndex(user => user.id == id)
//     users.splice(foundUser, 1)
//     res.status(200).json(users)
// })

// app.listen(4243, () => console.log('Listening on 4243'))