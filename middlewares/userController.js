const UserModel = require("../models/Usermodel.js")
const jwt = require("jsonwebtoken")

const userController = {

	register: async (req, res)=>{
		let selectUser = await UserModel.findOne({email: req.body.email})
		if(selectUser) return res.json({"msg": "EXISTING_USER"})

		let user = new UserModel({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
		})

		try{
			let savedUser = await user.save()
			res.json({"msg": "SAVED_USER"})
		}catch(err){
			res.status(400).send(err)
		}
	},

	login: async (req, res)=>{
		let secret = "CDTYSTRHRVYTybgukhnkyusakgut7utnkgudhkj,ah"

		let selectUser = await UserModel.findOne({email: req.body.email})
		if(!selectUser)
			return res.json({"msg": "Email ou senha incorreto"})

		if(selectUser.password != req.body.password)
			return res.json({"msg": "Email ou senha incorreto"})

		try{
			let token = await jwt.sign({
				id: selectUser.id
			}, secret, {expiresIn: 15})

			res.status(200).json({userToken: token})
		}catch(err){
			res.status(400).send("Ocorreu um erro!")
		}
	},
}

module.exports = userController