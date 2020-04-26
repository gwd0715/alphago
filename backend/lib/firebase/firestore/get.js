"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("../client");
const util_1 = require("./util");
class DBGet {
    static async getTopListFromDB(poiType, cityId, score, poiId) {
        let topList = [];
        try {
            const poiDocumentsRef = client_1.db
                .collection('Alpha Cities TopPOIs')
                .doc(cityId) // each alpha city as a document
                .collection('topPOIs')
                .where(poiType, '>', 0)
                .orderBy(poiType, 'desc')
                .orderBy('id');
            if (poiId) {
                const nextTopPOIListSnapshot = await poiDocumentsRef.startAfter(score, poiId).limit(10).get();
                nextTopPOIListSnapshot.forEach((doc) => {
                    topList.push(doc.data());
                });
                return topList;
            }
            const newTopPoiList = await poiDocumentsRef.limit(10).get();
            newTopPoiList.forEach((doc) => {
                topList.push(doc.data());
            });
        }
        catch (e) {
            console.log('fail to get top List');
            console.log(e);
        }
        return topList;
    }
    static async getDayPlanFromDB(cityId, totalDays) {
        try {
            const document = await client_1.db
                .collection('Alpha Cities DayPlan')
                .doc(cityId) // alpha cities
                .collection('Days To Plan')
                .doc(totalDays + 'days') // how many days to plan
                .get();
            const rawDaySchedule = document.data();
            const finalList = util_1.default.filterDBDayPlanToFront(rawDaySchedule);
            return finalList;
        }
        catch (err) {
            console.log('Get Day Plan Fail');
            console.log(err);
        }
        return [];
    }
}
exports.default = DBGet;
//# sourceMappingURL=get.js.map