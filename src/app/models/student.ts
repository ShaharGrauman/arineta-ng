export class Student {
  static _id:number = 1;
  constructor(
    public name:string,
    public age:number,
    public course:string,
    public avg:number,
    public email:string,
    public balance:number,
    public courseProgress:number = 0,
    public image:string = '',
    public id:number = Student._id++
  ){}

  static get empty():Student {
    return new Student('', -1, '', -1, '', -1, -1, '', -1);
  }
}

export enum Course {
  Angular,
  '.NET',
  Java,
  'C++',
  Agriculture
}
