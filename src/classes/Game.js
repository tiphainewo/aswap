export default class Game {

    id = null;
    name = null;
    image = null;
    price = null;
    userId = null;
    user = null;
 
    constructor(id, name, image, price, userid) 
    {
      this.id = id;
      this.name = name;
      this.image = image;
      this.userId = userid;
      this.price = price;
    }
         
}