"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * enum使用也类似java
 * 使用enum会减少错误代码和typo，比如直接在CityNode里面的classification属性中，把alpha 写成 alhpa，平常不会有编译问题，但实际上产生了错误
 * 如果使用enum, 写成CityClass['-']用来代表'alpha'，就可以有效减少错误。
 * enum里面如果是特殊字符作为key，需要用引号
 * 如果是普通字符则不用引号，且使用时用'.'就可以访问，例如：
 * CityClass里面再定义一个best = "alpha+++", 使用时直接CityClass.best就可以了
 */
var CityClass;
(function (CityClass) {
    CityClass["-"] = "alpha";
    CityClass["+"] = "alpha+";
    CityClass["++"] = "alpha++";
})(CityClass = exports.CityClass || (exports.CityClass = {}));
//# sourceMappingURL=interface.js.map