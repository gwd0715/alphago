"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Utils {
    static filterPOIsInfoFromAPI(data) {
        const filteredData = data.map((rawPoiInfo) => ({
            id: rawPoiInfo.id,
            name: rawPoiInfo.name,
            lat: rawPoiInfo.coordinates.latitude,
            long: rawPoiInfo.coordinates.longitude,
            snippet: rawPoiInfo.snippet,
            do_score: rawPoiInfo.do_score ? rawPoiInfo.do_score : 0,
            sightseeing_score: rawPoiInfo.sightseeing_score ? rawPoiInfo.sightseeing_score : 0,
            nightlife_score: rawPoiInfo.nightlife_score ? rawPoiInfo.nightlife_score : 0,
            score: rawPoiInfo.score ? rawPoiInfo.score : 0,
            inPlan: false,
            images: rawPoiInfo.images
                .map((img) => (img.sizes.medium ? img.sizes.medium.url : ''))
                .filter((url) => url !== '')
        }));
        return filteredData;
    }
    static filterDayPlanFromAPI(data) {
        const filteredData = {};
        data[0].days.forEach((dayDetails, index) => {
            filteredData['day-' + (index + 1)] = {
                order: index,
                poiArray: dayDetails.itinerary_items.map((item) => ({
                    title: item.title,
                    description: item.description,
                    poi: {
                        lat: item.poi.coordinates.latitude,
                        long: item.poi.coordinates.longitude,
                        id: item.poi.id,
                        name: item.poi.name,
                        score: item.poi.score,
                        snippet: item.poi.snippet,
                        inPlan: true,
                        images: item.poi.images
                            .map((img) => (img.sizes.medium ? img.sizes.medium.url : ''))
                            .filter((url) => url !== '')
                    }
                }))
            };
        });
        return filteredData;
    }
    static filterDBDayPlanToFront(data) {
        let rawData = [];
        for (const eachDay in data) {
            rawData.push(data[eachDay]);
        }
        rawData.sort((a, b) => a.order - b.order);
        const filteredData = rawData.map((node) => node.poiArray
            .filter((eachDay) => eachDay.title !== 'breakfast' && eachDay.title !== 'lunch' && eachDay.title !== 'dinner')
            .map((item) => item.poi));
        return filteredData;
    }
}
exports.default = Utils;
//# sourceMappingURL=util.js.map