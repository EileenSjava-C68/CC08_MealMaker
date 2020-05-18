const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appetizer) {
    this.appetizers = appetizer;
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(main) {
    this.mains = mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(dessert) {
    this.dessert = dessert;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
    },
  generateRandomMeal() {
    let appetizer = this.getRandomDishFromCourse('appetizers');
    let main = this.getRandomDishFromCourse('mains');
    let dessert = this.getRandomDishFromCourse('desserts');
    let totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is $${totalPrice}.`;
  }
}

menu.addDishToCourse('appetizers', 'capreze', 3.0);
menu.addDishToCourse('appetizers', 'Shira-Ae', 4.0);
menu.addDishToCourse('appetizers', 'Liangban-Doufu', 4.0);

menu.addDishToCourse('mains', 'Pot with Bread', 10.0);
menu.addDishToCourse('mains', 'Katsu-Don with Miso-soup', 14.0);
menu.addDishToCourse('mains', 'Sanxian-Chaofan with egg soup', 12.0);

menu.addDishToCourse('desserts', 'Chocolate Tarte with Coffee', 7.0);
menu.addDishToCourse('desserts', 'Kinton with Okoicha', 10.0);
menu.addDishToCourse('desserts', 'Huashenggao with Jasmin tea', 8.0);

let meal = menu.generateRandomMeal();
console.log(meal);
