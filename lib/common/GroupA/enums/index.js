"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NEnumB = exports.NEnumA = void 0;
var NEnumA;
(function (NEnumA) {
    var EExampleA;
    (function (EExampleA) {
        EExampleA[EExampleA["example1"] = 1] = "example1";
        EExampleA[EExampleA["example2"] = 2] = "example2";
        EExampleA[EExampleA["example3"] = 3] = "example3";
    })(EExampleA = NEnumA.EExampleA || (NEnumA.EExampleA = {}));
    var EExampleB;
    (function (EExampleB) {
        EExampleB[EExampleB["example4"] = 4] = "example4";
        EExampleB[EExampleB["example5"] = 5] = "example5";
        EExampleB[EExampleB["example6"] = 6] = "example6";
    })(EExampleB = NEnumA.EExampleB || (NEnumA.EExampleB = {}));
})(NEnumA || (exports.NEnumA = NEnumA = {}));
var NEnumB;
(function (NEnumB) {
    var EExampleC;
    (function (EExampleC) {
        EExampleC["example1"] = "A";
        EExampleC["example2"] = "B";
        EExampleC["example3"] = "C";
    })(EExampleC = NEnumB.EExampleC || (NEnumB.EExampleC = {}));
    var EExampleD;
    (function (EExampleD) {
        EExampleD["example4"] = "D";
        EExampleD["example5"] = "E";
        EExampleD["example6"] = "F";
    })(EExampleD = NEnumB.EExampleD || (NEnumB.EExampleD = {}));
})(NEnumB || (exports.NEnumB = NEnumB = {}));
