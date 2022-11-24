export default class User {

    userId = null;
    firstName = null;
    lastName = null;
    userImage = null;
    city = null;
    coordinates = null;
 
    constructor(id, fname, lname, image, city, coordinates) 
    {
      this.userId = id;
      this.firstName = fname;
      this.lastName = lname;
      this.userImage = image;
      this.city = city;
      this.coordinates = coordinates;
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