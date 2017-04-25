"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProgressBar_1 = require("./ProgressBar");
var protractor_1 = require("protractor");
var ResultTableRow = (function () {
    function ResultTableRow(host) {
        var _this = this;
        this.host = host;
        this.name = function () { return _this.host.element(protractor_1.by.css(':nth-child(1)')).getText(); };
        this.progressBar = function () { return new ProgressBar_1.default(_this.host.element(protractor_1.by.css(':nth-child(2)>div'))); };
        this.mutationScore = function () { return _this.host.element(protractor_1.by.css(':nth-child(3)')).getText(); };
        this.killed = function () { return _this.host.element(protractor_1.by.css(':nth-child(4)')).getText(); };
        this.survived = function () { return _this.host.element(protractor_1.by.css(':nth-child(5)')).getText(); };
        this.timeout = function () { return _this.host.element(protractor_1.by.css(':nth-child(6)')).getText(); };
        this.noCoverage = function () { return _this.host.element(protractor_1.by.css(':nth-child(7)')).getText(); };
        this.errors = function () { return _this.host.element(protractor_1.by.css(':nth-child(8)')).getText(); };
        this.totalDetected = function () { return _this.host.element(protractor_1.by.css(':nth-child(9)')).getText(); };
        this.totalUndetected = function () { return _this.host.element(protractor_1.by.css(':nth-child(10)')).getText(); };
        this.totalMutants = function () { return _this.host.element(protractor_1.by.css(':nth-child(11)')).getText(); };
    }
    return ResultTableRow;
}());
exports.default = ResultTableRow;
//# sourceMappingURL=ResultTableRow.js.map