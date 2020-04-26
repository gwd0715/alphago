"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const constants_1 = require("./constants");
const fs = require("fs");
const client_1 = require("./client");
exports.get = async (url, parameters) => {
    const options = {
        method: 'GET',
        url: url,
        params: parameters,
        headers: constants_1.defaultHeaders
    };
    try {
        const { data } = await axios_1.default(options);
        if (data) {
            return data;
        }
    }
    catch (err) {
        return Promise.reject('Could not get data');
    }
};
exports.generateAlphaCityList = async () => {
    let newAlphaCityList = [];
    let x = 1;
    for (const city of constants_1.alphaCityList) {
        try {
            const res = await client_1.triposo.getCityInfoFromApi(city.id);
            let newCity = {
                id: city.id,
                cn_name: city.cn_name,
                en_name: city.en_name,
                cn_country_name: city.cn_country_name,
                en_country_name: city.en_country_name,
                classification: city.classification,
                coordinates: res.coordinates,
                snippet: res.snippet,
                intro: res.intro,
                score: res.score,
                type: res.type,
                tag_labels: res.tag_labels,
                images: res.images
            };
            newAlphaCityList.push(newCity);
            console.log(`No.${x} city generated`);
            x += 1;
        }
        catch (err) {
            console.log(err);
        }
    }
    fs.writeFile('./alphacity.txt', JSON.stringify(newAlphaCityList), (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('File Created');
        }
    });
};
exports.filter = () => {
    try {
        const file = fs.readFileSync('./alphacity.txt');
        const arr = JSON.parse(file.toString());
        let newAlphaCityList = arr.map((city) => {
            return {
                id: city.id,
                name: city.en_name,
                country: city.en_country_name,
                classification: city.classification,
                score: city.score,
                snippet: city.snippet,
                coordinates: city.coordinates,
                images: city.images.map((image) => image.sizes.medium.url)
            };
        });
        fs.writeFileSync('./alphacityFront.txt', JSON.stringify(newAlphaCityList));
    }
    catch (err) {
        console.log(err);
    }
};
exports.getCentralPointCoordsList = (data) => {
    const resultList = data.map((eachDayPoi) => {
        const count = eachDayPoi.length;
        let latitude = 0;
        let longitude = 0;
        eachDayPoi.forEach((poi) => {
            latitude += (poi.lat * Math.PI) / 180;
            longitude += (poi.long * Math.PI) / 180;
        });
        latitude /= count;
        longitude /= count;
        const centralPointCoords = {
            latitude: (latitude * 180) / Math.PI,
            longitude: (longitude * 180) / Math.PI
        };
        return centralPointCoords;
    });
    return resultList;
};
exports.centralHelper = (data) => {
    const count = data.length;
    let latitude = 0;
    let longitude = 0;
    data.forEach(function (eachData) {
        latitude += (eachData.lat * Math.PI) / 180;
        longitude += (eachData.long * Math.PI) / 180;
    });
    latitude /= count;
    longitude /= count;
    let result = {
        latitude: (latitude * 180) / Math.PI,
        longitude: (longitude * 180) / Math.PI
    };
    return result;
};
exports.dateFormat = () => {
    // TODO
};
//# sourceMappingURL=utils.js.map