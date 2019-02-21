"use strict";
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
    }
    return SuperHero;
}());
var superman = new SuperHero('Superman', Editor.DC, 1938);
superman.name = 'Superman';
superman.editor = Editor.DC;
superman.creationYear = 1938;
