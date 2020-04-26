"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const add_1 = require("./firebase/firestore/add");
const get_1 = require("./firebase/firestore/get");
const client_1 = require("./Triposo/client");
const DBinterfaces_1 = require("./firebase/DBinterfaces");
const app = express();
app.use(cors());
app.get('/api', async (req, res) => {
    res.send('Welcome to Backend of AlphaGo!');
});
const getCityId = (req, res, next) => {
    const cityName = req.query.cityName;
    if (!cityName) {
        res.status(400).send('cityName cannot be empty');
        return;
    }
    const cityId = client_1.triposo.getCityId(cityName);
    if (!cityId) {
        res.status(400).send('city not found');
        return;
    }
    res.locals.cityId = cityId;
    next();
};
const getDays = (req, res, next) => {
    const dayString = req.query.days;
    if (!dayString) {
        res.send('days cannot be empty');
        return;
    }
    const days = Number(dayString);
    if (!days) {
        res.status(400).send('Invalid Parameters of Days');
        return;
    }
    if (days > 14 || days < 1) {
        res.status(400).send('Days out of range');
        return;
    }
    res.locals.days = dayString;
    next();
};
const getPoiType = (req, res, next) => {
    const type = req.query.type;
    switch (type) {
        case 'all':
            res.locals.type = DBinterfaces_1.PoiTypes.ALL;
            next();
            break;
        case 'do':
            res.locals.type = DBinterfaces_1.PoiTypes.Do;
            next();
            break;
        case 'sightseeing':
            res.locals.type = DBinterfaces_1.PoiTypes.Sightseeing;
            next();
            break;
        case 'nightlife':
            res.locals.type = DBinterfaces_1.PoiTypes.Nightlife;
            next();
            break;
        default:
            res.status(400).send('Wrong Poi Type');
            break;
    }
};
app.get('/api/city', getCityId, async (req, res) => {
    const { cityId } = res.locals;
    const cityInfo = client_1.triposo.getCityInfoFromFile(cityId);
    res.json(cityInfo);
});
app.get('/api/dayPlan', getCityId, getDays, async (req, res) => {
    const { cityId, days } = res.locals;
    const dataFromDB = await get_1.default.getDayPlanFromDB(cityId, days);
    if (dataFromDB.length !== 0) {
        const nearByPoiList = await client_1.triposo.generateNearByPoiListFromDayPlan(dataFromDB);
        res.send([dataFromDB, nearByPoiList]);
        return;
    }
    const _start = '2020-01-01';
    const _end = '2020-01-' + days;
    const data = await client_1.triposo.getDayPlan(cityId, _start, _end);
    if (!data) {
        res.status(500).send('Fail to get day plan From API');
        return;
    }
    const finalList = await add_1.default.addDayPlanDataAndReturn(cityId, data, days);
    if (finalList.length === 0) {
        res.status(500).send('Fail to save dayPlan');
        return;
    }
    const nearByPoiList = await client_1.triposo.generateNearByPoiListFromDayPlan(finalList);
    res.send([finalList, nearByPoiList]);
    return;
});
app.get('/api/topPoi', getCityId, getPoiType, async (req, res) => {
    const { cityId, type } = res.locals;
    const poiId = req.query.poiId;
    const scoreString = req.query.score;
    const score = Number(scoreString);
    if (score && poiId) {
        const nextTopPoiList = await get_1.default.getTopListFromDB(type, cityId, score, poiId);
        res.send(nextTopPoiList);
        return;
    }
    let newTopPoiList = await get_1.default.getTopListFromDB(type, cityId);
    if (newTopPoiList.length !== 0) {
        res.send(newTopPoiList);
        return;
    }
    const rawPoiList = await client_1.triposo.getTopPOI(cityId);
    if (!rawPoiList) {
        res.status(500).send('Fail to get top list from API');
        return;
    }
    const topPoiList = await add_1.default.addTopListDataAndReturn(cityId, rawPoiList);
    if (topPoiList.length === 0) {
        res.status(500).send('Fail to save top list');
        return;
    }
    res.send(topPoiList);
    return;
});
app.get('/api/nearBy', async (req, res) => {
    const latString = req.query.lat;
    const lonString = req.query.lon;
    if (!latString || !lonString) {
        res.status(400).send('lat and lon parameters required');
        return;
    }
    const latitude = Number(latString);
    const longitude = Number(lonString);
    if (!latitude || !longitude) {
        res.status(400).send('Invalid Parameters of lat and lon');
        return;
    }
    const nearByPoiList = await client_1.triposo.getSinglePoiNearByFromApi(latitude, longitude);
    res.send(nearByPoiList);
});
const PORT = 8082;
app.listen(PORT, () => {
    console.log(`Listening port: ${PORT}`);
});
//# sourceMappingURL=index.js.map