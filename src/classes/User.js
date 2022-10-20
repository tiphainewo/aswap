export default class User {

    userId = null;
    firstName = null;
    lastName = null;
    userImage = null;
    city = null;
 
    constructor(id, fname, lname, image, city) 
    {
      this.userId = id;
      this.firstName = fname;
      this.lastName = lname;
      this.userImage = image;
      this.city = city;
    }
    
    getFullName()
    {
      return this.firstName+' '+ this.lastName;
    }
    getFirstName()
    {
      return this.firstName;
    }
    getLastName()
    {
      return this.lastName;
    }        
}