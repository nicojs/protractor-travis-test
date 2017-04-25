"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MutantSelection_1 = require("./MutantSelection");
var protractor_1 = require("protractor");
var FilePage = (function () {
    function FilePage() {
        this.title = function () { return protractor_1.$('h1').getText(); };
        this.mutationButtonCount = function () { return protractor_1.element.all(protractor_1.by.css('.stryker-mutant-button')).count(); };
        this.mutantSelection = function (index) { return new MutantSelection_1.default(protractor_1.$(".stryker-mutant-button[data-mutant=\"" + index + "\"]"), protractor_1.$(".stryker-original-code[data-mutant=\"" + index + "\"]"), protractor_1.$(".stryker-mutant-replacement[data-mutant=\"" + index + "\"]")); };
        this.displayKilledCheckbox = function () { return protractor_1.$('.stryker-display-killed'); };
    }
    return FilePage;
}());
exports.default = FilePage;
//# sourceMappingURL=FileReportPage.js.map