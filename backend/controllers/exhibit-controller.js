const { Exhibit } = require('../models');
console.log(Exhibit);

module.exports = {
    create,
    index,
    show,
    update,
    delete: destroy,
};

async function create(req, res){
    try {
        res.status(201).json(await Exhibit.create(req.body));
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function index(req, res){
    try {
        res.status(200).json(await Exhibit.find())
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function show(req, res){
    try {
        res.status(200).json(await Exhibit.findById(req.params.id));
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function update(req, res){
    try {
        res.status(200).json(await Exhibit.findByIdAndUpdate(req.params.id, req.body, { new: true }));
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function destroy(req, res){
    try {
        res.status(200).json(await Exhibit.findByIdAndDelete({_id: req.params.id}));
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
