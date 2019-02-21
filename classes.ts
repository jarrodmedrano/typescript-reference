enum Editor {
    MARVEL,
    DC
}

class SuperHero {
    //implicitly add these three properties
    constructor(public name: string,
    public editor: Editor,
    public creationYear: number) {

    }
}

const superman = new SuperHero('Superman',Editor.DC,1938);

superman.name = 'Superman';
superman.editor = Editor.DC;
superman.creationYear = 1938;




