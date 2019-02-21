"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Editor;
(function (Editor) {
    Editor[Editor["MARVEL"] = 0] = "MARVEL";
    Editor[Editor["DC"] = 1] = "DC";
})(Editor || (Editor = {}));
var SuperHero = /** @class */ (function () {
    //implicitly add these three properties
    function SuperHero(name, editor, creationYear) {
        this.name = name;
        this.editor = editor;
        this.creationYear = creationYear;
        //there is no such thing as a runtime private variable
        //at runtime everything is accessible
        //you can set variable to readonly
    }
    //method of a class is by default public
    SuperHero.prototype.createMessage = function () {
        return "Super Hero: \n        " + this.name + " \n        " + Editor[this.editor] + " \n        " + this.creationYear;
    };
    return SuperHero;
}());
var FlyingHero = /** @class */ (function (_super) {
    __extends(FlyingHero, _super);
    function FlyingHero() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FlyingHero.prototype.fly = function (message) {
        console.log(message);
    };
    return FlyingHero;
}(SuperHero));
//implicitly has a constructor
var greenLantern = new FlyingHero('Silver Age Green Lantern', Editor.DC, 1959);
console.log(greenLantern.createMessage());
var superman = new FlyingHero('Superman', Editor.DC, 1938);
superman.fly('up and away!');
//this is valid
superman.name = 'Spiderman';
superman.name = 'Superman';
superman.editor = Editor.DC;
superman.creationYear = 1938;
console.log(superman.createMessage());
