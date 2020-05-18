https://gist.github.com/a1f101f7d6e55b15e398695a595e481c


const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers() {},
  set appetizers(appetizerIn) {},
  get mains() {},
  set mains(mainIn) {},
  get desserts() {},
  set desserts(dessertIn) {},
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
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse: function (courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    },
  generateRandomMeal: function () {
    let appetizer = this.getRandomDishFromCourse('appetizers');
    let main = this.getRandomDishFromCourse('mains');
    let dessert = this.getRandomDishFromCourse('desserts');
    let totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is $${totalPrice}.`;
  }
}

menu.addDishToCourse('todaysItalian', 'capreze', 16.0);
menu.addDishToCourse('BonjourFrench', 'Pot', 14.0);
