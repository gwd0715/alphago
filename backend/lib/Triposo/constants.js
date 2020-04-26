"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const APIinterface_1 = require("./APIinterface");
exports.defaultHeaders = {
    'X-Triposo-Account': '43ADL8X1',
    'X-Triposo-Token': 'umzp4xvjvjpqbzbnifn6iwv4nhhg6zww'
};
exports.URL = {
    baseURL: 'https://www.triposo.com/api/20200405/',
    location: 'https://www.triposo.com/api/20200405/location.json',
    dayPlanner: 'https://www.triposo.com/api/20200405/day_planner.json',
    POI: 'https://www.triposo.com/api/20200405/poi.json?',
    NearBy: 'https://www.triposo.com/api/20200405/local_highlights.json?'
};
exports.alphaCityList = [
    {
        id: 'London',
        cn_name: '伦敦',
        en_name: 'London',
        cn_country_name: '英国',
        en_country_name: 'UK',
        classification: APIinterface_1.CityClass['++']
    },
    {
        id: 'New_York_City',
        cn_name: '纽约',
        en_name: 'New York',
        cn_country_name: '美国',
        en_country_name: 'USA',
        classification: APIinterface_1.CityClass['++']
    },
    {
        id: 'wv__Beijing',
        cn_name: '北京',
        en_name: 'Beijing',
        cn_country_name: '中国',
        en_country_name: 'China',
        classification: APIinterface_1.CityClass['+']
    },
    {
        id: 'Dubai',
        cn_name: '迪拜',
        en_name: 'Dubai',
        cn_country_name: '阿联酋',
        en_country_name: 'United Arab Emirates',
        classification: APIinterface_1.CityClass['+']
    },
    {
        id: 'wv__Hong_Kong',
        cn_name: '香港',
        en_name: 'Hong Kong',
        cn_country_name: '中国',
        en_country_name: 'China',
        classification: APIinterface_1.CityClass['+']
    },
    {
        id: 'wv__Shanghai',
        cn_name: '上海',
        en_name: 'Shanghai',
        cn_country_name: '中国',
        en_country_name: 'China',
        classification: APIinterface_1.CityClass['+']
    },
    {
        id: 'Paris',
        cn_name: '巴黎',
        en_name: 'Paris',
        cn_country_name: '法国',
        en_country_name: 'France',
        classification: APIinterface_1.CityClass['+']
    },
    {
        id: 'Singapore',
        cn_name: '新加坡',
        en_name: 'Singapore',
        cn_country_name: '新加坡',
        en_country_name: 'Singapore',
        classification: APIinterface_1.CityClass['+']
    },
    {
        id: 'Sydney',
        cn_name: '悉尼',
        en_name: 'Sydney',
        cn_country_name: '澳大利亚',
        en_country_name: 'Australia',
        classification: APIinterface_1.CityClass['+']
    },
    {
        id: 'Tokyo',
        cn_name: '东京',
        en_name: 'Tokyo',
        cn_country_name: '日本',
        en_country_name: 'Japan',
        classification: APIinterface_1.CityClass['+']
    },
    {
        id: 'Bangkok',
        cn_name: '曼谷',
        en_name: 'Bangkok',
        cn_country_name: '泰国',
        en_country_name: 'Thailand',
        classification: APIinterface_1.CityClass['-']
    },
    {
        id: 'Chicago',
        cn_name: '芝加哥',
        en_name: 'Chicago',
        cn_country_name: '美国',
        en_country_name: 'USA',
        classification: APIinterface_1.CityClass['-']
    },
    {
        id: 'Istanbul',
        cn_name: '伊斯坦布尔',
        en_name: 'Istanbul',
        cn_country_name: '土耳其',
        en_country_name: 'Turkey',
        classification: APIinterface_1.CityClass['-']
    },
    {
        id: 'Los_Angeles',
        cn_name: '洛杉矶',
        en_name: 'Los Angeles',
        cn_country_name: '美国',
        en_country_name: 'USA',
        classification: APIinterface_1.CityClass['-']
    },
    {
        id: 'Mexico_City',
        cn_name: '墨西哥城',
        en_name: 'Mexico City',
        cn_country_name: '墨西哥',
        en_country_name: 'Mexico',
        classification: APIinterface_1.CityClass['-']
    },
    {
        id: 'Moscow',
        cn_name: '莫斯科',
        en_name: 'Moscow',
        cn_country_name: '俄罗斯',
        en_country_name: 'Russia',
        classification: APIinterface_1.CityClass['-']
    },
    {
        id: 'Seoul',
        cn_name: '首尔',
        en_name: 'Seoul',
        cn_country_name: '韩国',
        en_country_name: 'South Korea',
        classification: APIinterface_1.CityClass['-']
    },
    {
        id: 'Warsaw',
        cn_name: '华沙',
        en_name: 'Warsaw',
        cn_country_name: '波兰',
        en_country_name: 'Poland',
        classification: APIinterface_1.CityClass['-']
    },
    {
        id: 'City_of_Brussels',
        cn_name: '布鲁塞尔',
        en_name: 'Brussels',
        cn_country_name: '比利时',
        en_country_name: 'Belgium',
        classification: APIinterface_1.CityClass['-']
    },
    {
        id: 'Guangzhou',
        cn_name: '广州',
        en_name: 'Guangzhou',
        cn_country_name: '中国',
        en_country_name: 'China',
        classification: APIinterface_1.CityClass['-']
    },
    {
        id: 'Toronto',
        cn_name: '多伦多',
        en_name: 'Toronto',
        cn_country_name: '加拿大',
        en_country_name: 'Canada',
        classification: APIinterface_1.CityClass['-']
    },
    {
        id: 'Frankfurt',
        cn_name: '法兰克福',
        en_name: 'Frankfurt am main',
        cn_country_name: '德国',
        en_country_name: 'Germany',
        classification: APIinterface_1.CityClass['-']
    },
    {
        id: 'Milan',
        cn_name: '米兰',
        en_name: 'Milan',
        cn_country_name: '意大利',
        en_country_name: 'Italy',
        classification: APIinterface_1.CityClass['-']
    },
    {
        id: 'Madrid',
        cn_name: '马德里',
        en_name: 'Madrid',
        cn_country_name: '西班牙',
        en_country_name: 'Spain',
        classification: APIinterface_1.CityClass['-']
    },
    {
        id: 'Buenos_Aires',
        cn_name: '布宜诺斯艾利斯',
        en_name: 'Buenos Aires',
        cn_country_name: '阿根廷',
        en_country_name: 'Argentina',
        classification: APIinterface_1.CityClass['-']
    },
    {
        id: 'Melbourne',
        cn_name: '墨尔本',
        en_name: 'Melbourne',
        cn_country_name: '澳大利亚',
        en_country_name: 'Australia',
        classification: APIinterface_1.CityClass['-']
    },
    {
        id: 'Taipei',
        cn_name: '台北',
        en_name: 'Taipei',
        cn_country_name: '中国',
        en_country_name: 'China',
        classification: APIinterface_1.CityClass['-']
    },
    {
        id: 'Kuala_Lumpur',
        cn_name: '吉隆坡',
        en_name: 'Kuala Lumpur',
        cn_country_name: '马来西亚',
        en_country_name: 'Malaysia',
        classification: APIinterface_1.CityClass['-']
    },
    {
        id: 'Mumbai',
        cn_name: '孟买',
        en_name: 'Mumbai',
        cn_country_name: '印度',
        en_country_name: 'India',
        classification: APIinterface_1.CityClass['-']
    },
    {
        id: 'Miami',
        cn_name: '迈阿密',
        en_name: 'Miami',
        cn_country_name: '美国',
        en_country_name: 'USA',
        classification: APIinterface_1.CityClass['-']
    },
    {
        id: 'SC3A3o_Paulo',
        cn_name: '圣保罗',
        en_name: 'Sao Paulo',
        cn_country_name: '巴西',
        en_country_name: 'Brazil',
        classification: APIinterface_1.CityClass['-']
    },
    {
        id: 'Jakarta',
        cn_name: '雅加达',
        en_name: 'Jakarta',
        cn_country_name: '印度尼西亚',
        en_country_name: 'Indonesia',
        classification: APIinterface_1.CityClass['-']
    },
    {
        id: 'ZC3BCrich',
        cn_name: '苏黎世',
        en_name: 'Zurich',
        cn_country_name: '瑞士',
        en_country_name: 'Switzerland',
        classification: APIinterface_1.CityClass['-']
    }
];
//# sourceMappingURL=constants.js.map