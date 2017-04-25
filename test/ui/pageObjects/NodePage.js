"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProgressBar_1 = require("./ProgressBar");
var ResultTableRow_1 = require("./ResultTableRow");
var protractor_1 = require("protractor");
var NodePage = (function () {
    function NodePage() {
        this.title = function () { return protractor_1.browser.element(protractor_1.by.tagName('h1')).getText(); };
        this.strykerImageSize = function () { return protractor_1.$('.stryker-image').getSize(); };
        this.strykerImageLocation = function () { return protractor_1.$('.stryker-image').getLocation(); };
        this.totalsBar = function () { return new ProgressBar_1.default(protractor_1.element(protractor_1.by.css('.totals .progress'))); };
        // Don't use elements.all(...).map directly as the implementation is broken in protractor when putting the same element as property of the new object
        this.fingrainedResults = function () { return protractor_1.element.all(protractor_1.by.css('.finegrained tbody tr'))
            .then(function (elements) { return elements.map(function (m) { return new ResultTableRow_1.default(m); }); }); };
    }
    return NodePage;
}());
exports.default = NodePage;
//# sourceMappingURL=NodePage.js.map