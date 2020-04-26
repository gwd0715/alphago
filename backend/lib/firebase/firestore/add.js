"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("../client");
const DBinterfaces_1 = require("../DBinterfaces");
const util_1 = require("./util");
class DBAdd {
    static async addTopListData(cityId, topPoiList) {
        try {
            let batch = client_1.db.batch();
            const cityRef = client_1.db.collection('Alpha Cities TopPOIs').doc(cityId);
            topPoiList.forEach((poi) => {
                const poiRef = cityRef.collection('topPOIs').doc(poi.id);
                batch.set(poiRef, poi);
            });
            await batch.commit();
            return DBinterfaces_1.SaveResult.Success;
        }
        catch (error) {
            return DBinterfaces_1.SaveResult.Fail;
        }
    }
    static async addTopListDataAndReturn(cityId, topPoiList) {
        const filteredTopPoiList = util_1.default.filterPOIsInfoFromAPI(topPoiList);
        const result = await this.addTopListData(cityId, filteredTopPoiList);
        if (result === DBinterfaces_1.SaveResult.Success) {
            return filteredTopPoiList.filter((v, i) => i < 10);
        }
        return [];
    }
    static async addDayPlanData(cityId, dayScheduleData, totalDays) {
        try {
            await client_1.db
                .collection('Alpha Cities DayPlan')
                .doc(cityId)
                .collection('Days To Plan')
                .doc(totalDays + 'days')
                .set(dayScheduleData);
            return DBinterfaces_1.SaveResult.Success;
        }
        catch (error) {
            console.log(error);
            return DBinterfaces_1.SaveResult.Fail;
        }
    }
    static async addDayPlanDataAndReturn(cityId, dayScheduleData, totalDays) {
        const dailySchedule = util_1.default.filterDayPlanFromAPI(dayScheduleData);
        const returnList = util_1.default.filterDBDayPlanToFront(dailySchedule);
        const result = await this.addDayPlanData(cityId, dailySchedule, totalDays);
        if (result === DBinterfaces_1.SaveResult.Success) {
            return returnList;
        }
        return [];
    }
    static async addOrUpdateUserInfo(uid, userInfo, update) {
        try {
            if (update) {
                await client_1.db.collection('Users').doc(uid).update(userInfo);
                console.log('update success');
            }
            else {
                await client_1.db.collection('Users').doc(uid).set(userInfo);
                console.log('set success');
            }
            return DBinterfaces_1.SaveResult.Success;
        }
        catch (err) {
            console.log(err);
            return DBinterfaces_1.SaveResult.Fail;
        }
    }
}
exports.default = DBAdd;
//# sourceMappingURL=add.js.map