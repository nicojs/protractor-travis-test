"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var sinonChai = require("sinon-chai");
chai.Assertion.addMethod('equalData', function (expected) {
    var actual = this._obj;
    for (var i in expected) {
        this.assert(expected[i] === actual[i], "expected #{this} to at least contain the field \"" + i + "\" with value \"" + expected[i] + "\", but was \"" + actual[i] + "\"", "expected #{this} to not contain the field \"" + i + "\" with value \"" + expected[i] + "\", but it did.");
    }
});
chai.use(chaiAsPromised);
chai.use(sinonChai);
//# sourceMappingURL=chaiHelpers.js.map