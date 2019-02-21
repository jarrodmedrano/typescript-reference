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

    createMessage() { //overrides super class method
        return `Flying Hero: 
        ${this.name} 
        ${Editor[this.editor]} 
        ${this.creationYear}`
    }
}

//abstract classes lets us define our data and some of our behavior
//not concrete definition of behavior

abstract class NewHero {
    constructor (
        public name: string, //private are not visible to subclasses or outside world
        public _editor: Editor, //protected are visible only to subclasses
        public creationYear: number //can be private, protected or readonly
    ) {
        //there is no such thing as a runtime private variable
        //at runtime everything is accessible
        //you can set variable to readonly
    }

    abstract createMessage():string;
    //subclass must inherit createMessage() method
    get editor():string {
        return Editor[this._editor];
    }

    set editor(editorName:string) {
        this._editor = (<any>Editor)[editorName]; //casting to type any
    }

    get message() {
        return `New Hero: 
        ${this.name} 
        ${Editor[this._editor]} 
        ${this.creationYear}`
    }
}

//superman.editor = "Marvel";


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




