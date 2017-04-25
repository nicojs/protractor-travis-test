"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var chai_1 = require("chai");
var FileReportPage_1 = require("./pageObjects/FileReportPage");
var protractor_1 = require("protractor");
describe('File report page "Circle.js.html"', function () {
    var page;
    var forAllMutantSelections = function (fn) {
        for (var i = 0; i < 6; i++) {
            fn(page.mutantSelection(i));
        }
    };
    var get = function () {
        var f = "file:///" + path.resolve(path.join(__dirname, '../../reports/mutation/html/Circle.js.html')).replace(/\\/g, '/');
        console.log('get: ' + f);
        return protractor_1.browser.get(f);
    };
    beforeEach(function () {
        get();
        page = new FileReportPage_1.default();
    });
    it('should show title "Circle.js"', function () {
        return chai_1.expect(page.title()).to.eventually.be.eq('Circle.js - Stryker report');
    });
    it('should show 6 mutants in the file', function () {
        return chai_1.expect(page.mutationButtonCount()).to.eventually.be.eq(6);
    });
    it('should not "line-through" any of the original code lines', function () { return forAllMutantSelections(function (selection) { return chai_1.expect(selection.originalCodeTextDecoration()).to.eventually.equal('none'); }); });
    it('should not display any of the mutated code', function () { return forAllMutantSelections(function (selection) { return chai_1.expect(selection.originalCodeTextDecoration()).to.eventually.equal('none'); }); });
    it('should have 2 killed mutants and 4 survived', function () {
        chai_1.expect(page.mutantSelection(0).mutantStatusAnnotation()).to.eventually.eq('success');
        chai_1.expect(page.mutantSelection(1).mutantStatusAnnotation()).to.eventually.eq('danger');
        chai_1.expect(page.mutantSelection(2).mutantStatusAnnotation()).to.eventually.eq('success');
        chai_1.expect(page.mutantSelection(3).mutantStatusAnnotation()).to.eventually.eq('danger');
        chai_1.expect(page.mutantSelection(4).mutantStatusAnnotation()).to.eventually.eq('danger');
        chai_1.expect(page.mutantSelection(5).mutantStatusAnnotation()).to.eventually.eq('danger');
    });
    it('should hide killed mutants', function () {
        chai_1.expect(page.mutantSelection(0).isButtonVisible()).to.eventually.eq(false);
        chai_1.expect(page.mutantSelection(2).isButtonVisible()).to.eventually.eq(false);
    });
    it('should not mark the correct piece of code as original', function () {
        // Fix issue https://github.com/stryker-mutator/stryker-html-reporter/issues/5
        chai_1.expect(page.mutantSelection(1).originalCode()).to.eventually.eq('2 * Math.PI * radius');
    });
    it('should show survived mutants', function () {
        chai_1.expect(page.mutantSelection(1).isButtonVisible()).to.eventually.eq(true);
        chai_1.expect(page.mutantSelection(3).isButtonVisible()).to.eventually.eq(true);
        chai_1.expect(page.mutantSelection(4).isButtonVisible()).to.eventually.eq(true);
        chai_1.expect(page.mutantSelection(5).isButtonVisible()).to.eventually.eq(true);
    });
    describe('when "Also show killed mutants" is enabled', function () {
        beforeEach(function () { return page.displayKilledCheckbox().click(); });
        it('should also show the killed mutants', function () {
            chai_1.expect(page.mutantSelection(0).isButtonVisible()).to.eventually.eq(true);
            chai_1.expect(page.mutantSelection(2).isButtonVisible()).to.eventually.eq(true);
        });
        describe('and a killed mutant is enabled', function () {
            beforeEach(function () { return page.mutantSelection(0).enableMutant(); });
            it('should "line-through" the original code', function () {
                chai_1.expect(page.mutantSelection(0).originalCodeTextDecoration()).to.eventually.eq('line-through');
            });
            describe('and later the "Also show killed mutants" button is disabled', function () {
                beforeEach(function () { return page.displayKilledCheckbox().click(); });
                it('should have removed the "line-through" from the mutant\'s original code', function () {
                    chai_1.expect(page.mutantSelection(0).originalCodeTextDecoration()).to.eventually.eq('none');
                });
                it('should hide the killed mutants', function () {
                    chai_1.expect(page.mutantSelection(0).isButtonVisible()).to.eventually.eq(false);
                    chai_1.expect(page.mutantSelection(2).isButtonVisible()).to.eventually.eq(false);
                });
            });
        });
    });
    describe('when first mutant is enabled', function () {
        beforeEach(function () { return page.mutantSelection(1).enableMutant(); });
        it('should "line-through" the originalCode', function () {
            chai_1.expect(page.mutantSelection(1).originalCodeTextDecoration()).to.eventually.eq('line-through');
        });
        it('should show the mutated code', function () {
            chai_1.expect(page.mutantSelection(1).isMutantReplacementCodeVisible()).to.eventually.eq(true);
        });
        describe('and later disabled', function () {
            beforeEach(function () { return page.mutantSelection(1).enableMutant(); });
            it('should remove the "line-through" from the original code', function () {
                chai_1.expect(page.mutantSelection(1).originalCodeTextDecoration()).to.eventually.eq('none');
            });
            it('should hide the mutated code', function () {
                chai_1.expect(page.mutantSelection(1).isMutantReplacementCodeVisible()).to.eventually.eq(false);
            });
        });
    });
});
//# sourceMappingURL=fileReport.uiTest.js.map