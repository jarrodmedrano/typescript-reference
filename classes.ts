enum Editor {
    MARVEL,
    DC
}

class SuperHero {
    name: string;
    editor: Editor;
    creationYear: number;

    constructor(name: string,
    editor: Editor,
    creationYear: number) {
        this.name = name;
        this.editor = editor;
        this.creationYear = creationYear
    }
}

const superman = new SuperHero('Superman',Editor.DC,1938);

superman.name = 'Superman';
superman.editor = Editor.DC;
superman.creationYear = 1938;




