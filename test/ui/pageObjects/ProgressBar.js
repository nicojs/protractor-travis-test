"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var ProgressBar = (function () {
    function ProgressBar(host) {
        var _this = this;
        this.host = host;
        this.progressBar = this.host.element(protractor_1.by.css('.progress-bar'));
        this.percentageText = function () { return _this.progressBar.getText(); };
        this.barSize = function () { return _this.progressBar.getSize(); };
        this.totalSize = function () { return _this.host.getSize(); };
        this.relativeBarWidth = function () { return _this.totalSize().then(function (totalSize) { return _this.barSize()
            .then(function (barSize) { return Math.floor((barSize.width / totalSize.width) * 100); }); }); };
    }
    return ProgressBar;
}());
exports.default = ProgressBar;
//# sourceMappingURL=ProgressBar.js.map