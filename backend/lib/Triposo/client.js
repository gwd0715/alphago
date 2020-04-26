"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const constants_1 = require("./constants");
const fs = require("fs");
const path = require("path");
const util_1 = require("../firebase/firestore/util");
class Triposo {
    getCityId(name) {
        for (const city of constants_1.alphaCityList) {
            if (city['en_name'] === name) {
                return city.id;
            }
        }
        return null;
    }
    async getCityInfoFromApi(cityId) {
        const parameters = {
            id: cityId,
            fields: 'id,snippet,score,type,images,intro,tag_labels,coordinates'
        };
        const { results } = await utils_1.get(constants_1.URL.location, parameters);
        if (results.length === 0) {
            return Promise.reject(new Error('No results'));
        }
        const cityInfo = {
            id: results[0].id,
            coordinates: results[0].cordinates,
            intro: results[0].intro ? results[0].intro : '',
            snippet: results[0].snippet ? results[0].snippet : '',
            score: results[0].score,
            images: results[0].images,
            tag_labels: results[0].tag_labels,
            type: results[0].type
        };
        return cityInfo;
    }
    getCityInfoFromFile(cityId) {
        try {
            const file = fs.readFileSync(path.join(__dirname, '../static/alphacity.txt'));
            const cityList = JSON.parse(file.toString());
            for (const city of cityList) {
                if (city.id === cityId) {
                    return city;
                }
            }
        }
        catch (err) {
            console.log(err);
        }
        return null;
    }
    async getDayPlan(cityId, startDate, endDate) {
        const parameters = {
            location_id: cityId,
            start_date: startDate,
            end_date: endDate
        };
        try {
            const { results } = await utils_1.get(constants_1.URL.dayPlanner, parameters);
            return results;
        }
        catch (err) {
            console.log(err);
            return null;
        }
    }
    async getTopPOI(cityID) {
        const parameters = {
            location_id: cityID,
            count: 50,
            order_by: '-score',
            fields: 'name,id,coordinates,score,snippet,images',
            //architecture|art|city|culture|hiking|history|museums|exploringnature|shopping|showstheatresandmusic|zoos
            tag_labels: 'do|sightseeing|nightlife'
        };
        try {
            const { results } = await utils_1.get(constants_1.URL.POI, parameters);
            return results;
        }
        catch (err) {
            console.log(err);
            return null;
        }
    }
    async getSinglePoiNearByFromApi(lat, lon) {
        const parameters = {
            latitude: lat,
            longitude: lon,
            max_distance: 2000,
            poi_fields: 'name,id,coordinates,score,snippet,images',
            tag_labels: 'do|sightseeing|nightlife'
        };
        try {
            const { results } = await utils_1.get(constants_1.URL.NearBy, parameters);
            const nearByPOIList = util_1.default.filterPOIsInfoFromAPI(results[0].pois);
            return nearByPOIList;
        }
        catch (err) {
            console.log(err);
            return null;
        }
    }
    async generateNearByPoiListFromDayPlan(dayPlan) {
        const centralPointCoordsList = utils_1.getCentralPointCoordsList(dayPlan);
        let nearByPoiList = [];
        for (const i in centralPointCoordsList) {
            const eachDayNearByPoiList = await this.getSinglePoiNearByFromApi(centralPointCoordsList[i].latitude, centralPointCoordsList[i].longitude);
            if (!eachDayNearByPoiList) {
                nearByPoiList.push([]);
            }
            else {
                nearByPoiList.push(eachDayNearByPoiList);
            }
        }
        return nearByPoiList;
    }
}
exports.triposo = new Triposo();
//# sourceMappingURL=client.js.map