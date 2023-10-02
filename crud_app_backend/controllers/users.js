//logic, calculation,  main code, function
const UserModel = require("./../models/users");

//get all users data
exports.getAllUsers = async(req,res) => {
    res.json(await UserModel.find());
};

//get single users data using it's id
exports.getSingleUser = async(req, res) => {
    try{
        res.json(await UserModel.find({_id: req.params.userId}));
    }catch(err){
        res.send("<h1>No Data Found For User with Id - " + req.params.userId + "</h1>");
    }
};

//to creat new user!
exports.saveUser = async(req, res) => {
    const newUser = new UserModel(req.body);
    res.send(await newUser.save());
};

//update the user
exports.updateUser = async (req, res) => {
    const data = await UserModel.findOneAndUpdate({_id: req.params.userId}, 
    //{fullName: req.body.fullName},
    req.body, {new: true});
    res.send(data);
};

//delete the user
exports.deleteUser = async (req, res) => {
    const deleteUser = await UserModel.findOneAndDelete({_id: req.params.userId,}); 
    res.send(deleteUser ? deleteUser : "Please Check USer Id!");
};