const express = require("express");
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const { user } = require("../model/user.model");


const userRoute = express.Router();

// To get the user data as per page number
userRoute.get("/get", async(req,res)=>{
    try {
        const page = req.query.page || 1;
        const limit = 10;
        const offset = (page - 1) * limit;
        let totalCount = await user.count();
        totalCount = Math.ceil(totalCount/10);
        const data = await user.findAll({
          limit,
          offset,
        });
        res.status(200).send({ "ok": true, data, totalCount });
    } catch (error) {
        res.status(400).send({ "ok": false, "message": error.message });
    }
})

// To get the user data on the basis of certain filters
userRoute.get("/get/filter", async(req,res)=>{
    try {
        const { searchby, search } = req.query;
        const query = {};
        query[searchby] = search;
        const data = await user.findAll({
            where: query,
        });
        res.status(200).send({ "ok": true, data, totalCount:data.length });
    } catch (error) {
        res.status(400).send({ "ok": false, "message": error.message });
    }
})

// To add the random userdata in a table
userRoute.post("/add", async (req, res) => {
    try {
        const dataRequest = await fetch("https://randomuser.me/api/?results=55");
        const data = await dataRequest.json();

        const usersData = data.results.map((result) => ({
            name: result.name?.title + " " + result.name?.first + " " + result.name?.last,
            gender: result.gender,
            email: result.email,
            age: result.dob.age,
            phone: result.phone,
            username: result.login.username,
            address: `${result.location.street?.name} ${result.location.street?.number}, ${result.location.city}, ${result.location.state}, ${result.location.country}, ${result.location.postcode}`
        }));
        await user.bulkCreate(usersData);
        res.status(201).send({ "ok": true, "message": "Data Added successfully" });
    } catch (error) {
        res.status(400).send({ "ok": false, "message": error.message });
    }
})

// to delete all the rows from the user table
userRoute.delete("/delete", async(req,res)=>{
    try {
        await user.destroy({
            truncate: true,
        });
        res.status(200).send({ "ok": true, "message": "Data Deleted successfully" });
    } catch (error) {
        res.status(400).send({ "ok": false, "message": error.message });
    }
})

module.exports = {
    userRoute
}