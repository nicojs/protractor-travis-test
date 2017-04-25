"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MutantSelection = (function () {
    function MutantSelection(button, originalCodeSpan, mutantReplacementSpan) {
        var _this = this;
        this.button = button;
        this.originalCodeSpan = originalCodeSpan;
        this.mutantReplacementSpan = mutantReplacementSpan;
        this.mutantId = function () { return _this.button.getAttribute('data-mutant'); };
        this.isMutantReplacementCodeVisible = function () { return _this.mutantReplacementSpan.isDisplayed(); };
        this.originalCodeTextDecoration = function () { return _this.originalCodeSpan.getCssValue('text-decoration')
            .then(function (textDecoration) { /* like "none solid rgb(68, 68, 68)" */ return textDecoration.split(' ')[0]; }); };
        this.mutantStatusAnnotation = function () { return _this.button.getAttribute('data-mutant-status-annotation'); };
        this.originalCode = function () { return _this.originalCodeSpan.getText(); };
        this.isButtonVisible = function () { return _this.button.isDisplayed(); };
        this.enableMutant = function () { return _this.button.click(); };
    }
    return MutantSelection;
}());
exports.default = MutantSelection;
//# sourceMappingURL=MutantSelection.js.map