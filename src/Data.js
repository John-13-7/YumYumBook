const shortid = require("shortid");

const recipes = [
  {
    shortId: shortid.generate(),
    name: "Pizza",
    calories: 1000,
    description: "Yum italian pizza",
  },
  {
    shortId: shortid.generate(),
    name: "Lasagna",
    calories: 800,
    description: "Yum italian lasagna, garfield approves",
  },
  {
    shortId: shortid.generate(),
    name: "Chicken Parmesan",
    calories: 500,
    description: "Yum italian chicken parm, beware lactose people",
  },
  {
    shortId: shortid.generate(),
    name: "Egg Fried Rice",
    calories: 1200,
    description: "Uncle Roger Approved",
  },
  {
    shortId: shortid.generate(),
    name: "Tonkotsu Ramen",
    calories: 1500,
    description: "Don't worry, not instant",
  },
  {
    shortId: shortid.generate(),
    name: "Fruit Bowl",
    calories: 450,
    description: "Fruits... in a bowl... with mint simple syrup and some rum",
  },
  {
    shortId: shortid.generate(),
    name: "Pork Katsu Don",
    calories: 1350,
    description: "Rice bowls ftw",
  },
  {
    shortId: shortid.generate(),
    name: "Pad Thai",
    calories: 750,
    description: "Sweet and Spicy Noods",
  },
  {
    shortId: shortid.generate(),
    name: "Fried Chicken",
    calories: 1600,
    description: "The best way to have chicken",
  },
  {
    shortId: shortid.generate(),
    name: "Steak",
    calories: 500,
    description: "Not Wagyu, but still pretty dam good",
  },
  {
    shortId: shortid.generate(),
    name: "Hamburger",
    calories: 350,
    description: "Dang, it's a cheeseburger without cheese",
  },
  {
    shortId: shortid.generate(),
    name: "Cheeseburger",
    calories: 450,
    description: "Dang, it's a hamburger with cheese",
  },
  {
    shortId: shortid.generate(),
    name: "Apple Pie",
    calories: 2400,
    description: "The classic cinnamon + fruit pie",
  },
  {
    shortId: shortid.generate(),
    name: "Chicken Alfredo",
    calories: 1800,
    description: "Creamy deliciousness",
  },
  {
    shortId: shortid.generate(),
    name: "Black Cod",
    calories: 550,
    description: "Nice delicious tender fish. Yum.",
  },
  {
    shortId: shortid.generate(),
    name: "Shrimp Po Boy",
    calories: 700,
    description: "A New Orleans Staple",
  },
  {
    shortId: shortid.generate(),
    name: "Chili Dog",
    calories: 600,
    description: "Meat on Meat in between Buns",
  },
  {
    shortId: shortid.generate(),
    name: "Orange Chicken",
    calories: 900,
    description: "Not Chinese Food, but still pretty good",
  },
  {
    shortId: shortid.generate(),
    name: "Country Fried Steak",
    calories: 850,
    description: "A classic southern breakfast",
  },
  {
    shortId: shortid.generate(),
    name: "Okonomiyaki",
    calories: 1150,
    description: "Yum Savory Pancake",
  },
  {
    shortId: shortid.generate(),
    name: "Curry Fishballs",
    calories: 650,
    description: "Yum fish balls dunked in curry",
  },
  {
    shortId: shortid.generate(),
    name: "Doughnut",
    calories: 500,
    description: "Yum Fried and Glazed Dough Rings",
  },
  {
    shortId: shortid.generate(),
    name: "Peanut Butter and Jelly Sandwich",
    calories: 300,
    description: "You really need a recipe for this one?",
  },
  {
    shortId: shortid.generate(),
    name: "Lemon Pepper Chicken Wings",
    calories: 400,
    description: "Tangy chicken wings for those who love flavor",
  },
  {
    shortId: shortid.generate(),
    name: "Classic Chocolate Chip Cookies",
    calories: 150,
    description: "Soft and chewy chocolate chip cookies that everyone loves!",
  },
  {
    shortId: shortid.generate(),
    name: "Grilled Cheese Sandwich",
    calories: 300,
    description:
      "Melted cheese between crispy bread slices, a comforting classic.",
  },
  {
    shortId: shortid.generate(),
    name: "Spaghetti and Meatballs",
    calories: 700,
    description:
      "A hearty meal of spaghetti and savory meatballs, topped with tangy tomato sauce.",
  },
  {
    shortId: shortid.generate(),
    name: "Roasted Chicken",
    calories: 400,
    description:
      "Juicy and flavorful roasted chicken with crispy skin and tender meat.",
  },
  {
    shortId: shortid.generate(),
    name: "Beef Stew",
    calories: 500,
    description:
      "A warm and comforting beef stew, filled with tender meat, veggies, and flavorful broth.",
  },
  {
    shortId: shortid.generate(),
    name: "Banana Bread",
    calories: 200,
    description:
      "Moist and delicious banana bread, perfect for breakfast or a sweet snack.",
  },
  {
    shortId: shortid.generate(),
    name: "Spinach and Feta Stuffed Chicken",
    calories: 600,
    description:
      "Tender chicken breasts filled with spinach and creamy feta cheese.",
  },
  {
    shortId: shortid.generate(),
    name: "Beef and Broccoli Stir-Fry",
    calories: 450,
    description:
      "Thinly sliced beef and crisp broccoli florets tossed in a savory sauce.",
  },
  {
    shortId: shortid.generate(),
    name: "Shrimp Scampi",
    calories: 400,
    description:
      "Buttery shrimp tossed with garlic, lemon, and white wine, served over pasta.",
  },
  {
    shortId: shortid.generate(),
    name: "Mushroom Risotto",
    calories: 550,
    description:
      "Creamy and flavorful arborio rice cooked with mushrooms and parmesan cheese.",
  },
  {
    shortId: shortid.generate(),
    name: "Chicken Tikka Masala",
    calories: 800,
    description:
      "A spicy and creamy Indian curry dish with tender chicken and aromatic spices.",
  },
  {
    shortId: shortid.generate(),
    name: "Vegetable Stir-Fry",
    calories: 350,
    description:
      "A colorful and healthy stir-fry loaded with veggies and tossed in a light soy sauce.",
  },
  {
    shortId: shortid.generate(),
    name: "Pesto Pasta",
    calories: 500,
    description:
      "Pasta tossed in a vibrant green pesto sauce made with fresh basil, garlic, and pine nuts.",
  },
  {
    shortId: shortid.generate(),
    name: "Beef Tacos",
    calories: 300,
    description:
      "Crispy corn tortillas filled with seasoned ground beef, lettuce, tomato, and cheese.",
  },
  {
    shortId: shortid.generate(),
    name: "Sweet and Sour Chicken",
    calories: 700,
    description:
      "Tangy and sweet chicken stir-fry with colorful bell peppers and pineapple.",
  },
  {
    shortId: shortid.generate(),
    name: "Blueberry Pancakes",
    calories: 400,
    description:
      "Fluffy and delicious pancakes filled with fresh blueberries and drizzled with maple syrup.",
  },
  {
    shortId: shortid.generate(),
    name: "Beef and Vegetable Stew",
    calories: 500,
    description:
      "A hearty and filling stew with tender beef, potatoes, carrots, and other veggies.",
  },
  {
    shortId: shortid.generate(),
    name: "Chicken Enchiladas",
    calories: 600,
    description:
      "Tortillas filled with seasoned chicken, cheese, and smothered in spicy tomato sauce.",
  },
  {
    shortId: shortid.generate(),
    name: "Lemon Garlic Shrimp Pasta",
    calories: 450,
    description:
      "Tender shrimp tossed in a garlicky lemon butter sauce with pasta and fresh herbs.",
  },
  {
    shortId: shortid.generate(),
    name: "Quinoa Salad",
    calories: 300,
    description:
      "A healthy and flavorful salad with quinoa, veggies, and a tangy vinaigrette dressing.",
  },
  {
    shortId: shortid.generate(),
    name: "Beef and Mushroom Pie",
    calories: 700,
    description:
      "A savory and delicious pie filled with tender beef, mushrooms, and gravy.",
  },
  {
    shortId: shortid.generate(),
    name: "Grilled Salmon",
    calories: 400,
    description:
      "Juicy and flavorful salmon fillets grilled to perfection with lemon and herbs.",
  },
  {
    shortId: shortid.generate(),
    name: "Vegetable Curry",
    calories: 400,
    description:
      "A colorful and spicy curry dish with an array of veggies, coconut milk, and aromatic spices.",
  },
  {
    shortId: shortid.generate(),
    name: "Fettuccine Alfredo",
    calories: 600,
    description:
      "Rich and creamy pasta dish with fettuccine noodles, parmesan cheese, and garlic.",
  },
  {
    shortId: shortid.generate(),
    name: "Pulled Pork Sandwich",
    calories: 500,
    description:
      "Slow-cooked pulled pork with tangy barbecue sauce served on a soft bun.",
  },
  {
    shortId: shortid.generate(),
    name: "Tomato Soup",
    calories: 250,
    description:
      "A classic and comforting soup made with juicy tomatoes, herbs, and cream.",
  },
];

module.exports = { recipes };
