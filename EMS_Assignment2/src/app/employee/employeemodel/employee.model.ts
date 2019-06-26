export class Employee {
  private _id: number;
  private _firstName: string;
  private _lastName: string;
  private _email: string;
  private _contact: number;
  private _address: string;
  private _username: string;
  private _password: string;
  private _gender: string;
  private _qualification: string;
  private _experience: string;
  private _languages: any[];
  constructor(){
      this.firstName='';
      this.lastName='';
      this.email='';
      this.address='';
      this.username='';
      this.password='';
      this.gender='';
      this.qualification='';
      this.experience='';
      this.languages = [];
  }
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
  public get firstName(): string {
    return this._firstName;
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  
  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  
  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }
  
  public get contact(): number {
    return this._contact;
  }
  public set contact(value: number) {
    this._contact = value;
  }
  
  public get address(): string {
    return this._address;
  }
  public set address(value: string) {
    this._address = value;
  }
  
  public get username(): string {
    return this._username;
  }
  public set username(value: string) {
    this._username = value;
  }
  
  public get password(): string {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
  }
  
  public get gender(): string {
    return this._gender;
  }
  public set gender(value: string) {
    this._gender = value;
  }
  
  public get qualification(): string {
    return this._qualification;
  }
  public set qualification(value: string) {
    this._qualification = value;
  }
  
  public get experience(): string {
    return this._experience;
  }
  public set experience(value: string) {
    this._experience = value;
  }
  public get languages(): any[] {
    return this._languages;
  }
  public set languages(value: any[]) {
    this._languages = value;
  }
}