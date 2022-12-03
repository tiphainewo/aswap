export default class User {

    id = null;
    firstName = null;
    lastName = null;
    userImage = null;
    coordinates = null;
    gamesOwned=0;
 
    constructor(id, fname, lname, image, long, lat, gamesOwned) 
    {
      this.id = id;
      this.firstName = fname;
      this.lastName = lname;
      this.userImage = image;
      this.coordinates = [long, lat];
      this.gamesOwned = gamesOwned;
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