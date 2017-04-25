"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var chai_1 = require("chai");
var NodePage_1 = require("./pageObjects/NodePage");
var protractor_1 = require("protractor");
describe('Node results page', function () {
    function get() {
        var f = "file:///" + path.resolve(path.join(__dirname, '../../reports/mutation/html/index.html')).replace(/\\/g, '/');
        protractor_1.browser.get(f);
    }
    var page;
    beforeEach(function () {
        get();
        page = new NodePage_1.default();
    });
    it("should have title \"" + path.sep + "sampleProject" + path.sep + "src - Stryker report\"", function () {
        return chai_1.expect(page.title()).to.eventually.eq(path.sep + "sampleProject" + path.sep + "src - Stryker report");
    });
    it('should show the "stryker-image"', function () {
        return chai_1.expect(page.strykerImageSize()).to.eventually.equalData({ width: 80, height: 80 });
    });
    it('should position the image on the top right', function () {
        return chai_1.expect(page.strykerImageLocation()).to.eventually.satisfy(function (loc) {
            chai_1.expect(loc.y).to.be.lessThan(10);
            chai_1.expect(loc.x).to.be.greaterThan(50);
            return true;
        });
    });
    describe('and looking at the "totals" progress bar', function () {
        it('should show "77%"', function () {
            return chai_1.expect(page.totalsBar().percentageText()).to.eventually.eq('77%');
        });
        it('should set the width to 77%', function () {
            return chai_1.expect(page.totalsBar().relativeBarWidth()).to.eventually.be.within(75, 78); // allow for rounding errors
        });
    });
    describe('when looking at the "finegrained" results table', function () {
        it('should show 2 records', function () {
            return chai_1.expect(page.fingrainedResults().then(function (results) { return results.length; })).to.eventually.eq(2);
        });
        it('show "circle.js" "33%" "66%" "2/6" "2" "1" "0" "3" "0" "2" "4" and "6" on the second row', function () {
            return chai_1.expect(page.fingrainedResults().then(function (results) { return results[1]; })).to.eventually.satisfy(function (result) {
                chai_1.expect(result.name()).to.eventually.be.eq('Circle.js');
                chai_1.expect(result.progressBar().percentageText()).to.eventually.be.eq('33%');
                chai_1.expect(result.mutationScore()).to.eventually.be.eq('2/6');
                chai_1.expect(result.killed()).to.eventually.be.eq('2');
                chai_1.expect(result.survived()).to.eventually.be.eq('1');
                chai_1.expect(result.timeout()).to.eventually.be.eq('0');
                chai_1.expect(result.noCoverage()).to.eventually.be.eq('3');
                chai_1.expect(result.errors()).to.eventually.be.eq('0');
                chai_1.expect(result.totalDetected()).to.eventually.be.eq('2');
                chai_1.expect(result.totalUndetected()).to.eventually.be.eq('4');
                chai_1.expect(result.totalMutants()).to.eventually.be.eq('6');
                return true;
            });
        });
    });
});
//# sourceMappingURL=nodeReport.uiTest.js.map