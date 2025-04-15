class Address {
  constructor(neighborhood, street, city, state) {
    this.neighborhood = neighborhood;
    this.street = street;
    this.city = city;
    this.state = state;
  }
  newNeigborhood(
    newngbhd = this.neighborhood,
    newstr = this.street,
    newcit = this.city,
    newsta = this.state
  ) {
    this.neighborhood = newngbhd;
    this.street = newstr;
    this.city = newcit;
    this.state = newsta;
  }
}

let myAddress = new Address("joão Plinio", "planalto", "caruaru", "pernambuco");

console.log(myAddress);
myAddress.newNeigborhood("pereira matos");
console.log(myAddress);
