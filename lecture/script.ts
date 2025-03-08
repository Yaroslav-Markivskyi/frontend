interface ProgramerInterface {
    name: string;
    programmingLanguage: string;
}


class Programer implements ProgramerInterface {
    name: string;
    programmingLanguage: string;

    constructor(name: string, programmingLanguage: string) {
        this.name = name;
        this.programmingLanguage = programmingLanguage;
    }

    introduceMyself() {
        return `I'm ${this.name} and I code in ${this.programmingLanguage}`; 
    }

    returnData<T>(data: T): T {
        return data;
    }
}


const programer = new Programer('John', 'JavaScript');
console.log(programer.introduceMyself());
console.log(programer.returnData<string>('Hello'));