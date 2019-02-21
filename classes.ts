enum Editor {
    MARVEL,
    DC
}


class SuperHero {
    //implicitly add these three properties
    constructor (
        public name: string, //private are not visible to subclasses or outside world
        public editor: Editor, //protected are visible only to subclasses
        public creationYear: number //can be private, protected or readonly
    ) {
        //there is no such thing as a runtime private variable
        //at runtime everything is accessible
        //you can set variable to readonly
    }

    //method of a class is by default public
    createMessage() {
        return `Super Hero: 
        ${this.name} 
        ${Editor[this.editor]} 
        ${this.creationYear}`
    }
}


class FlyingHero extends SuperHero {

    fly (message:string) {
        console.log(message);
    }
}

//implicitly has a constructor
const greenLantern = new FlyingHero('Silver Age Green Lantern', Editor.DC, 1959);

console.log(greenLantern.createMessage());

const superman = new FlyingHero('Superman',Editor.DC,1938);

superman.fly('up and away!');
//this is valid
superman.name = 'Spiderman';

superman.name = 'Superman';
superman.editor = Editor.DC;
superman.creationYear = 1938;

console.log(superman.createMessage());




