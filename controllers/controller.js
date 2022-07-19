const Model = require("../model/model.js");

const add = async(req,res)=>{
    const {name,age} = req.body;
    const data = new Model({ name,age });
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(400).json(error);
    }
};

const showAll = async(req,res)=>{
    try {
        const data = await Model.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
};

const showById = async(req,res)=>{
    try {
        const {id} = req.params;
        const data = await Model.findById(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
};

const updateById = async(req,res)=>{
    try {
        const {id} = req.params;
        const {name,age} = req.body;
        const options = {new:true};
        const result = await Model.findByIdAndUpdate(id,{name,age},options);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error);
    }
};

const deleteById = async(req,res)=>{
    try {
        const {id} = req.params;
        const data = await Model.findByIdAndDelete(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports = {
    add,showAll,showById,updateById,deleteById
}