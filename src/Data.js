const shortid = require("shortid");
const recipes = [
  {
    shortId: shortid.generate(),
    name: "Pizza",
    calories: 1000,
    description: "Yum Italian pizza",
    image: "./recipe_images/pizza.jpg",
    cuisine: "Italian",
    ingredients: "flour, salt, cheese, pizza sauce",
    instructions: "You get the bread then fumble it. I get the bread and flip it and tumble it. Then you add pizza sauce to the dough. You add cheese. And bake at 400 degrees for ten minutes."
  },
  {
    shortId: shortid.generate(),
    name: "Lasagna",
    calories: 800,
    description: "Yum Italian lasagna, Garfield approves",
    image: "./recipe_images/lasagna.jpg",
    cuisine: "Italian",
    ingredients: "lasagna noodles, ground beef, onion, garlic, tomato sauce, ricotta cheese, mozzarella cheese, Parmesan cheese, eggs, Italian seasoning, salt, black pepper",
    instructions: "Cook lasagna noodles according to package instructions and set aside. In a large skillet, cook ground beef, onion, and garlic until the meat is browned. Drain excess fat. Stir in tomato sauce and simmer for 15 minutes. In a separate bowl, mix together ricotta cheese, mozzarella cheese, Parmesan cheese, eggs, Italian seasoning, salt, and black pepper. Preheat the oven to 375 degrees Fahrenheit (190 degrees Celsius). In a baking dish, spread a thin layer of the meat sauce. Layer lasagna noodles, cheese mixture, and meat sauce. Repeat the layers. Cover the dish with foil and bake for 25 minutes. Remove the foil and bake for an additional 25 minutes until the lasagna is bubbly and golden. Let it cool for a few minutes before serving."
  },
  {
    shortId: shortid.generate(),
    name: "Chicken Parmesan",
    calories: 500,
    description: "Yum Italian chicken parm, beware lactose people",
    image: "./recipe_images/chicken_parm.jpg",
    cuisine: "Italian",
    ingredients: "chicken breasts, bread crumbs, Parmesan cheese, eggs, flour, salt, black pepper, olive oil, marinara sauce, mozzarella cheese",
    instructions: "Preheat the oven to 375 degrees Fahrenheit (190 degrees Celsius). In one bowl, place flour. In another bowl, beat eggs. In a third bowl, combine bread crumbs, Parmesan cheese, salt, and black pepper. Coat each chicken breast in flour, dip it in beaten eggs, and then coat it in the bread crumb mixture. Heat olive oil in a skillet over medium-high heat. Cook the chicken breasts until golden brown on both sides. Place the cooked chicken breasts in a baking dish. Pour marinara sauce over the chicken and top with mozzarella cheese. Bake for about 20 minutes or until the chicken is cooked through and the cheese is melted and bubbly. Serve with pasta or salad."
  },
  {
    shortId: shortid.generate(),
    name: "Egg Fried Rice",
    calories: 1200,
    description: "Uncle Roger Approved",
    image: "./recipe_images/egg_fried_rice.jpg",
    cuisine: "Chinese",
    ingredients: "cooked rice, eggs, vegetables (such as carrots, peas, and green onions), soy sauce, sesame oil, vegetable oil, salt, black pepper",
    instructions: "Heat vegetable oil in a large skillet or wok over medium heat. Add vegetables to the skillet and stir-fry until they are tender-crisp. Push the vegetables to one side of the skillet and crack the eggs into the empty space. Scramble the eggs until they are fully cooked. Add the cooked rice to the skillet and mix it with the vegetables and eggs. Season with soy sauce, sesame oil, salt, and black pepper. Stir-fry for a few minutes until everything is well combined and heated through. Serve hot as a main dish or side dish."
  },
  {
    shortId: shortid.generate(),
    name: "Tonkotsu Ramen",
    calories: 1500,
    description: "Don't worry, not instant",
    image: "./recipe_images/tonkotsu_ramen.jpg",
    cuisine: "Chinese",
    ingredients: "pork belly, ramen noodles, chicken broth, garlic, ginger, soy sauce, mirin, sesame oil, soft-boiled eggs, green onions, bamboo shoots, seaweed, black garlic oil (optional)",
    instructions: "In a large pot, simmer pork belly, garlic, ginger, soy sauce, mirin, and chicken broth for several hours to make the tonkotsu broth. Cook the ramen noodles according to package instructions and set aside. Prepare soft-boiled eggs by cooking them for about 6-7 minutes, then cool and peel. Slice the pork belly into thin slices. In serving bowls, add cooked ramen noodles and pour the hot tonkotsu broth over them. Top with sliced pork belly, soft-boiled eggs, green onions, bamboo shoots, seaweed, and a drizzle of sesame oil. Add black garlic oil for extra flavor if desired. Serve hot and enjoy."
  },
  {
    shortId: shortid.generate(),
    name: "Fruit Bowl",
    calories: 450,
    description: "Fruits... in a bowl... with mint simple syrup and some rum",
    image: "./recipe_images/fruit_bowl.jpg",
    cuisine: "American",
    ingredients: "assorted fruits (such as strawberries, blueberries, pineapple, and watermelon), mint leaves, sugar, water, rum (optional)",
    instructions: "Wash and prepare the fruits by cutting them into bite-sized pieces. In a small saucepan, combine sugar and water and bring to a boil, stirring until the sugar dissolves. Remove from heat and add fresh mint leaves. Let the mint steep in the syrup for about 10 minutes, then strain the syrup to remove the mint leaves. Allow the syrup to cool. In a large bowl, combine the prepared fruits. Drizzle the mint simple syrup over the fruits and gently toss to coat. Add a splash of rum if desired. Refrigerate the fruit bowl for at least 30 minutes to allow the flavors to meld. Serve chilled."
  },
  {
    shortId: shortid.generate(),
    name: "Pork Katsu Don",
    calories: 1350,
    description: "Rice bowls ftw",
    image: "./recipe_images/pork_katsu_don.jpg",
    cuisine: "Japanese",
    ingredients: "pork cutlets, flour, eggs, panko breadcrumbs, salt, vegetable oil, onions, dashi stock, soy sauce, mirin, sugar, cooked rice, green onions",
    instructions: "Season the pork cutlets with salt. Coat each cutlet in flour, dip it in beaten eggs, and then coat it in panko breadcrumbs. Heat vegetable oil in a skillet over medium-high heat. Fry the pork cutlets until golden brown and crispy. Remove from the skillet and drain on paper towels. In the same skillet, sauté thinly sliced onions until they are soft and translucent. Add dashi stock, soy sauce, mirin, and sugar to the skillet. Simmer until the flavors combine and the sauce thickens slightly. Slice the pork cutlets into strips. Serve cooked rice in bowls, top with the sliced pork cutlets and sautéed onions. Pour the sauce over the rice and pork. Garnish with sliced green onions. Enjoy your Pork Katsu Don!"
  },
  {
    shortId: shortid.generate(),
    name: "Pad Thai",
    calories: 750,
    description: "Sweet and Spicy Noodles",
    image: "./recipe_images/pad_thai.jpg",
    cuisine: "Thai",
    ingredients: "rice noodles, shrimp or chicken, eggs, tofu, garlic, shallots, fish sauce, tamarind paste, palm sugar, lime, crushed peanuts, bean sprouts, green onions, cilantro",
    instructions: "Soak rice noodles in warm water until softened. In a wok or large skillet, heat oil and sauté garlic and shallots until fragrant. Add shrimp or chicken, tofu, and eggs. Stir-fry until cooked through. Push everything to one side of the wok and crack eggs into the empty space. Scramble the eggs until they are almost fully cooked, then mix everything together. Add soaked rice noodles to the wok and stir-fry for a few minutes until they are tender. In a small bowl, mix fish sauce, tamarind paste, palm sugar, and lime juice to make the Pad Thai sauce. Pour the sauce over the noodles and toss to coat. Add crushed peanuts, bean sprouts, green onions, and cilantro. Stir-fry for a minute or two until everything is well combined and heated through. Serve hot and garnish with additional crushed peanuts and lime wedges, if desired."
  },
  {
    shortId: shortid.generate(),
    name: "Fried Chicken",
    calories: 1600,
    description: "The best way to have chicken",
    image: "./recipe_images/fried_chicken.jpg",
    cuisine: "American",
    ingredients: "chicken pieces, buttermilk, all-purpose flour, cornstarch, paprika, garlic powder, onion powder, cayenne pepper, salt, black pepper, vegetable oil",
    instructions: "Marinate chicken pieces in buttermilk for at least 1 hour or overnight. In a large shallow dish, mix together all-purpose flour, cornstarch, paprika, garlic powder, onion powder, cayenne pepper, salt, and black pepper to create the coating mixture. Dredge each piece of marinated chicken in the coating mixture, making sure to coat it evenly. Heat vegetable oil in a deep skillet or Dutch oven over medium-high heat. Carefully place the coated chicken pieces in the hot oil and fry until golden brown and crispy, and the internal temperature reaches 165°F (74°C). Transfer the fried chicken to a wire rack or paper towel-lined plate to drain excess oil. Serve the Fried Chicken hot and enjoy the crispy and flavorful goodness!"
  },
  {
    shortId: shortid.generate(),
    name: "Steak",
    calories: 500,
    description: "Not Wagyu, but still pretty dam good",
    image: "./recipe_images/steak.jpg",
    cuisine: "American",
    ingredients: "steak (such as ribeye, sirloin, or filet mignon), salt, black pepper, butter, garlic, fresh herbs (optional)",
    instructions: "Preheat the grill or a skillet over high heat. Season both sides of the steak generously with salt and black pepper. Place the steak on the hot grill or skillet and cook for a few minutes on each side until it reaches your desired level of doneness (e.g., rare, medium-rare, medium, well-done). For medium-rare, aim for an internal temperature of 135-140°F (57-60°C). Remove the steak from the heat and let it rest for a few minutes. While resting, melt butter in a small saucepan and add minced garlic. Baste the steak with the melted butter and garlic mixture. Slice the steak against the grain and serve. Optionally, garnish with fresh herbs like rosemary or thyme for added flavor."
  },
  {
    shortId: shortid.generate(),
    name: "Hamburger",
    calories: 350,
    description: "Dang, it's a cheeseburger without cheese",
    image: "./recipe_images/hamburger.jpg",
    cuisine: "American",
    ingredients: "ground beef, salt, black pepper, hamburger buns, lettuce, tomato, onion, pickles, ketchup, mustard, mayonnaise",
    instructions: "Preheat a grill or skillet over medium-high heat. Divide the ground beef into equal-sized portions and shape them into patties. Season the patties with salt and black pepper. Place the patties on the grill or skillet and cook for about 4-5 minutes per side, or until they reach the desired level of doneness. Toast the hamburger buns on the grill or in a toaster. Assemble the hamburgers by placing a cooked patty on the bottom half of each bun. Top with lettuce, tomato slices, onion slices, pickles, ketchup, mustard, and mayonnaise. Place the top half of the bun on the condiments. Serve the hamburgers hot."
  },
  {
    shortId: shortid.generate(),
    name: "Cheeseburger",
    calories: 450,
    description: "Dang, it's a hamburger with cheese",
    image: "./recipe_images/cheeseburger.jpg",
    cuisine: "American",
    ingredients: "ground beef, salt, black pepper, cheese slices (such as cheddar or American), hamburger buns, lettuce, tomato, onion, pickles, ketchup, mustard, mayonnaise",
    instructions: "Preheat a grill or skillet over medium-high heat. Divide the ground beef into equal-sized portions and shape them into patties. Season the patties with salt and black pepper. Place the patties on the grill or skillet and cook for about 4-5 minutes per side, or until they reach the desired level of doneness. During the last minute of cooking, place a cheese slice on top of each patty to melt. Toast the hamburger buns on the grill or in a toaster. Assemble the cheeseburgers by placing a cooked patty with melted cheese on the bottom half of each bun. Top with lettuce, tomato slices, onion slices, pickles, ketchup, mustard,"
  },
  {
    shortId: shortid.generate(),
    name: "Apple Pie",
    calories: 2400,
    description: "The classic cinnamon + fruit pie",
    image: "./recipe_images/apple_pie.jpg",
    cuisine: "American",
    ingredients: "pie crust, apples, sugar, flour, cinnamon, nutmeg, lemon juice, butter",
    instructions: "Preheat the oven to 425°F (220°C). Prepare the pie crust and line a pie dish with it. In a large bowl, combine sliced apples, sugar, flour, cinnamon, nutmeg, and lemon juice. Mix well to coat the apples evenly. Pour the apple mixture into the prepared pie crust. Dot the top of the filling with small pieces of butter. Cover the pie with the remaining pie crust, sealing the edges and cutting slits on the top crust to allow steam to escape. Bake for 45-50 minutes, or until the crust is golden brown and the filling is bubbling. Allow the pie to cool for a few hours before serving."
  },
  {
    shortId: shortid.generate(),
    name: "Chicken Alfredo",
    calories: 1800,
    description: "Creamy deliciousness",
    image: "./recipe_images/chicken_alfredo.jpg",
    cuisine: "Italian",
    ingredients: "chicken breasts, fettuccine pasta, butter, garlic, heavy cream, Parmesan cheese, salt, black pepper, parsley",
    instructions: "Cook fettuccine pasta according to package instructions. Season chicken breasts with salt and black pepper. In a large skillet, melt butter over medium heat. Add minced garlic and cook until fragrant. Add the seasoned chicken breasts to the skillet and cook until browned and cooked through. Remove the chicken from the skillet and set aside. In the same skillet, pour in heavy cream and bring to a simmer. Stir in grated Parmesan cheese until melted and smooth. Season with salt and black pepper to taste. Slice the cooked chicken breasts into strips. Add the cooked fettuccine to the skillet with the Alfredo sauce and toss to coat the pasta. Add the sliced chicken and toss again. Garnish with chopped parsley. Serve hot and enjoy the creamy Chicken Alfredo."
  },
  {
    shortId: shortid.generate(),
    name: "Black Cod",
    calories: 550,
    description: "Nice delicious tender fish. Yum.",
    image: "./recipe_images/black_cod.jpg",
    cuisine: "Japanese",
    ingredients: "black cod fillets, miso paste, mirin, sake, sugar",
    instructions: "In a bowl, mix miso paste, mirin, sake, and sugar to create the marinade. Place the black cod fillets in a shallow dish and pour the marinade over them, making sure to coat all sides. Cover the dish with plastic wrap and marinate in the refrigerator for at least 1 hour, or up to 24 hours for a stronger flavor. Preheat the oven to 400°F (200°C). Remove the marinated black cod from the refrigerator and scrape off any excess marinade. Place the fillets on a baking sheet lined with parchment paper. Bake for about 15-20 minutes, or until the fish is cooked through and flakes easily with a fork. Serve the Black Cod hot and enjoy the tender and flavorful fish."
  },
  {
    shortId: shortid.generate(),
    name: "Shrimp Po Boy",
    calories: 700,
    description: "A New Orleans Staple",
    image: "./recipe_images/shrimp_po_boy.jpg",
    cuisine: "American",
    ingredients: "shrimp, flour, cornmeal, Cajun seasoning, salt, black pepper, buttermilk, mayonnaise, hot sauce, French bread or hoagie rolls, lettuce, tomatoes, pickles",
    instructions: "In a shallow dish, mix flour, cornmeal, Cajun seasoning, salt, and black pepper. Dip the shrimp in buttermilk, then coat them in the flour mixture. Heat oil in a deep skillet or pot over medium-high heat. Fry the shrimp until they are golden brown and crispy. In a separate bowl, combine mayonnaise and hot sauce to make the spicy mayo sauce. Slice the French bread or hoagie rolls horizontally. Spread the spicy mayo sauce on both sides of the bread. Layer lettuce, tomatoes, pickles, and fried shrimp on the bread. Serve the Shrimp Po Boy sandwiches hot and enjoy this New Orleans classic."
  },
  {
    shortId: shortid.generate(),
    name: "Chili Dog",
    calories: 600,
    description: "Meat on Meat in between Buns",
    image: "./recipe_images/chili_dog.jpg",
    cuisine: "American",
    ingredients: "hot dogs, hot dog buns, chili, cheddar cheese, onions (optional), mustard",
    instructions: "Grill or boil the hot dogs until heated through. Warm the hot dog buns. Place a grilled or boiled hot dog in each bun. Top with chili, shredded cheddar cheese, and onions if desired. Drizzle with mustard. Serve the Chili Dogs hot and enjoy this delicious meaty treat."
  },
  {
    shortId: shortid.generate(),
    name: "Orange Chicken",
    calories: 900,
    description: "Not Chinese Food, but still pretty good",
    image: "./recipe_images/orange_chicken.jpg",
    cuisine: "American",
    ingredients: "chicken breasts, cornstarch, salt, black pepper, vegetable oil, orange marmalade, soy sauce, vinegar, ginger, garlic",
    instructions: "Cut chicken breasts into bite-sized pieces. In a shallow dish, mix cornstarch, salt, and black pepper. Coat the chicken pieces in the cornstarch mixture. Heat vegetable oil in a skillet or wok over medium-high heat. Fry the coated chicken until golden brown and cooked through. Remove the chicken from the skillet and set aside. In the same skillet, combine orange marmalade, soy sauce, vinegar, ginger, and garlic. Stir until the sauce is well combined and heated through. Return the cooked chicken to the skillet and toss to coat it with the orange sauce. Cook for a few minutes until the chicken is heated through and the sauce thickens slightly. Serve the Orange Chicken hot and enjoy this tasty twist on a classic dish."
  },
  {
    shortId: shortid.generate(),
    name: "Country Fried Steak",
    calories: 850,
    description: "A classic southern breakfast",
    image: "./recipe_images/country_fried_steak.jpg",
    cuisine: "American",
    ingredients: "steaks (such as cube steak or round steak), all-purpose flour, salt, black pepper, paprika, garlic powder, buttermilk, vegetable oil, gravy (optional)",
    instructions: "In a shallow dish, mix all-purpose flour, salt, black pepper, paprika, and garlic powder. Dip each steak in buttermilk, then coat it in the flour mixture, pressing the coating onto the meat. Heat vegetable oil in a skillet over medium-high heat. Fry the coated steaks until they are golden brown and cooked through. Remove the steaks from the skillet and drain on paper towels. Serve the Country Fried Steak hot, optionally with gravy poured over the top. Enjoy this classic southern dish."
  },
  {
    shortId: shortid.generate(),
    name: "Okonomiyaki",
    calories: 1150,
    description: "Yum Savory Pancake",
    image: "./recipe_images/okonomiyaki.jpg",
    cuisine: "Japanese",
    ingredients: "cabbage, all-purpose flour, eggs, dashi stock, green onions, bacon or pork belly slices, tempura flakes (tenkasu), bonito flakes, okonomiyaki sauce, mayonnaise",
    instructions: "In a large bowl, combine shredded cabbage, all-purpose flour, eggs, dashi stock, chopped green onions, and tempura flakes. Mix well to form a batter. Heat a greased skillet or griddle over medium heat. Pour the batter onto the skillet to form a pancake shape. Arrange bacon or pork belly slices on top of the batter. Cook until the bottom is golden brown, then flip the pancake and cook the other side until golden brown and the cabbage is cooked through. Transfer the cooked okonomiyaki to a serving plate. Drizzle okonomiyaki sauce and mayonnaise on top. Sprinkle bonito flakes over the okonomiyaki for extra flavor. Serve the Okonomiyaki hot and enjoy this delicious savory pancake."
  },
  {
    shortId: shortid.generate(),
    name: "Curry Fishballs",
    calories: 650,
    description: "Yum fish balls dunked in curry",
    image: "./recipe_images/curry_fishballs.jpg",
    cuisine: "Chinese",
    ingredients: "fish balls, curry powder, coconut milk, water, soy sauce, sugar, cornstarch",
    instructions: "In a saucepan, combine curry powder, coconut milk, water, soy sauce, and sugar. Stir until the curry powder is dissolved and the ingredients are well combined. Bring the mixture to a simmer. In a separate bowl, mix cornstarch with a little water to create a slurry. Add the cornstarch slurry to the simmering curry mixture, stirring constantly, until the sauce thickens. Add the fish balls to the curry sauce and simmer for a few minutes until the fish balls are heated through. Serve the Curry Fishballs hot as a snack or with rice as a main dish. Enjoy the combination of flavorful curry and tasty fish balls."
  },
  {
    shortId: shortid.generate(),
    name: "Doughnut",
    calories: 500,
    description: "Yum Fried and Glazed Dough Rings",
    image: "./recipe_images/doughnut.jpg",
    cuisine: "American",
    ingredients: "all-purpose flour, sugar, yeast, salt, milk, butter, eggs, vegetable oil for frying, powdered sugar or glaze (optional)",
    instructions: "In a large bowl, combine all-purpose flour, sugar, yeast, and salt. In a separate bowl, warm milk and melt butter. Add the milk mixture and beaten eggs to the dry ingredients. Stir until a dough forms. Knead the dough on a floured surface for a few minutes until it becomes smooth and elastic. Place the dough in a greased bowl, cover it, and let it rise in a warm place until it doubles in size. Punch down the dough and roll it out on a floured surface to about 1/2-inch thickness. Cut out doughnut shapes using a doughnut cutter or round cookie cutter. Place the doughnuts on a baking sheet and let them rise again until puffy. Heat vegetable oil in a deep pot or fryer to 350°F (175°C). Carefully drop the doughnuts into the hot oil and fry until golden brown on both sides. Remove the fried doughnuts and drain them on paper towels. Dust with powdered sugar or glaze with your preferred glaze recipe. Enjoy the delicious Fried and Glazed Doughnuts."
  },
  {
    shortId: shortid.generate(),
    name: "Peanut Butter and Jelly Sandwich",
    calories: 300,
    description: "You really need a recipe for this one?",
    image: "./recipe_images/pbnj.jpg",
    cuisine: "American",
    ingredients: "bread slices, peanut butter, jelly or jam of your choice",
    instructions: "Spread peanut butter on one slice of bread and jelly or jam on another slice. Press the two slices together to form a sandwich. Optionally, you can toast the bread before spreading the fillings for a warm and crispy sandwich. Enjoy the classic and simple Peanut Butter and Jelly Sandwich."
  },
  {
    shortId: shortid.generate(),
    name: "Lemon Pepper Chicken Wings",
    calories: 400,
    description: "Tangy chicken wings for those who love flavor",
    image: "./recipe_images/lemon_pepper_chicken_wings.jpg",
    cuisine: "American",
    ingredients: "chicken wings, lemon zest, black pepper, salt, garlic powder, butter, lemon juice",
    instructions: "Preheat the oven to 425°F (220°C). In a bowl, combine lemon zest, black pepper, salt, and garlic powder to create the seasoning mixture. Toss the chicken wings in the seasoning mixture, coating them evenly. Place the seasoned wings on a baking sheet lined with parchment paper. Bake for about 40-45 minutes, or until the wings are golden brown and cooked through. In a separate saucepan, melt butter and stir in lemon juice. Remove the baked wings from the oven and toss them in the lemon butter sauce. Serve the Lemon Pepper Chicken Wings hot and enjoy the tangy and flavorful chicken."
  },
  {
    shortId: shortid.generate(),
    name: "Chocolate Chip Cookies",
    calories: 150,
    description: "Soft and chewy chocolate chip cookies that everyone loves!",
    image: "./recipe_images/chocolate_chip_cookies.jpg",
    cuisine: "American",
    ingredients: "all-purpose flour, baking soda, salt, unsalted butter, granulated sugar, brown sugar, eggs, vanilla extract, chocolate chips",
    instructions: "Preheat the oven to 375°F (190°C). In a bowl, whisk together all-purpose flour, baking soda, and salt. In a separate bowl, cream together unsalted butter, granulated sugar, and brown sugar until light and fluffy. Beat in eggs one at a time, then stir in vanilla extract. Gradually add the dry ingredients to the wet ingredients, mixing until just combined. Stir in chocolate chips. Drop rounded tablespoonfuls of dough onto ungreased baking sheets. Bake for 9-11 minutes, or until golden brown around the edges. Allow the cookies to cool on the baking sheets for a few minutes, then transfer them to wire racks to cool completely. Enjoy the delicious homemade Chocolate Chip Cookies."
  },
  {
    shortId: shortid.generate(),
    name: "Grilled Cheese Sandwich",
    calories: 300,
    description:
      "Melted cheese between crispy bread slices, a comforting classic.",
    image: "./recipe_images/grilled_cheese_sandwich.jpg",
    cuisine: "American",
    ingredients: "bread slices, cheese slices (such as cheddar or American), butter",
    instructions: "Preheat a skillet or griddle over medium heat. Butter one side of each bread slice. Place one slice, buttered side down, on the skillet. Top with cheese slices and cover with the other bread slice, buttered side up. Cook the sandwich for a few minutes on each side, or until the bread is golden brown and the cheese is melted. Remove the grilled cheese sandwich from the skillet and let it cool for a minute. Slice the sandwich diagonally if desired. Serve the Grilled Cheese Sandwich hot and enjoy the simple and comforting flavors."
  },
  {
    shortId: shortid.generate(),
    name: "Spaghetti and Meatballs",
    calories: 700,
    description:
      "A hearty meal of spaghetti and savory meatballs, topped with tangy tomato sauce.",
    image: "./recipe_images/spaghetti_and_meatballs.jpg",
    cuisine: "Italian",
    ingredients: "spaghetti pasta, ground beef, breadcrumbs, grated Parmesan cheese, garlic, eggs, dried herbs (such as oregano and basil), salt, black pepper, olive oil, onion, canned crushed tomatoes, tomato paste, sugar, fresh basil leaves",
    instructions: "Cook spaghetti pasta according to package instructions. In a large bowl, combine ground beef, breadcrumbs, grated Parmesan cheese, minced garlic, beaten eggs, dried herbs, salt, and black pepper. Mix well and shape the mixture into meatballs. Heat olive oil in a skillet over medium heat. Brown the meatballs on all sides, then remove them from the skillet and set aside. In the same skillet, sauté chopped onion until translucent. Add canned crushed tomatoes, tomato paste, sugar, and dried herbs. Simmer the sauce for about 20 minutes. Return the meatballs to the skillet and continue simmering for another 10 minutes, or until the meatballs are cooked through. Drain the cooked spaghetti and serve it with the meatballs and sauce. Garnish with fresh basil leaves. Enjoy the hearty Spaghetti and",
  },
  {
    shortId: shortid.generate(),
    name: "Roasted Chicken",
    calories: 400,
    description:
      "Juicy and flavorful roasted chicken with crispy skin and tender meat.",
    image: "./recipe_images/roasted_chicken.jpg",
    cuisine: "American",
    ingredients: "whole chicken, butter, garlic, fresh herbs (such as rosemary and thyme), salt, black pepper",
    instructions: "Preheat the oven to 425°F (220°C). Rinse the whole chicken inside and out, then pat it dry with paper towels. Place the chicken on a roasting rack in a roasting pan. In a small bowl, mix softened butter with minced garlic and chopped fresh herbs. Rub the butter mixture all over the chicken, including under the skin. Season the chicken generously with salt and black pepper. Tie the legs together with kitchen twine. Roast the chicken in the preheated oven for about 1 hour and 15 minutes, or until the internal temperature reaches 165°F (74°C) and the skin is golden brown and crispy. Remove the chicken from the oven and let it rest for a few minutes before carving. Serve the Roasted Chicken hot and enjoy the juicy and flavorful meat."
  },
  {
    shortId: shortid.generate(),
    name: "Beef Stew",
    calories: 500,
    description:
      "A warm and comforting beef stew, filled with tender meat, veggies, and flavorful broth.",
    image: "./recipe_images/beef_stew.jpg",
    cuisine: "American",
    ingredients: "beef stew meat, flour, salt, black pepper, vegetable oil, onion, garlic, carrots, potatoes, beef broth, Worcestershire sauce, tomato paste, dried herbs (such as thyme and bay leaves)",
    instructions: "In a bowl, combine flour, salt, and black pepper. Toss the beef stew meat in the flour mixture to coat. Heat vegetable oil in a large pot or Dutch oven over medium heat. Brown the coated beef stew meat in batches until all sides are browned. Remove the meat from the pot and set aside. In the same pot, sauté chopped onion and minced garlic until softened. Add sliced carrots, diced potatoes, beef broth, Worcestershire sauce, tomato paste, and dried herbs. Stir well to combine. Return the browned beef stew meat to the pot. Bring the stew to a boil, then reduce the heat to low. Cover and simmer for about 2-3 hours, or until the meat is tender and the flavors have melded together. Remove bay leaves before serving. Enjoy the warm and comforting Beef Stew."
  },
  {
    shortId: shortid.generate(),
    name: "Banana Bread",
    calories: 200,
    description:
      "Moist and delicious banana bread, perfect for breakfast or a sweet snack.",
    image: "./recipe_images/banana_bread.jpg",
    cuisine: "American",
    ingredients: "ripe bananas, all-purpose flour, baking soda, salt, unsalted butter, granulated sugar, eggs, vanilla extract, chopped nuts (optional)",
    instructions: "Preheat the oven to 350°F (175°C). In a large bowl, mash ripe bananas with a fork. Add all-purpose flour, baking soda, and salt to the mashed bananas. In a separate bowl, cream together unsalted butter and granulated sugar. Beat in eggs one at a time, then stir in vanilla extract. Add the wet ingredients to the banana mixture and mix until just combined. If desired, fold in chopped nuts. Pour the batter into a greased loaf pan. Bake in the preheated oven for about 60 minutes, or until a toothpick inserted into the center comes out clean. Remove from the oven and let the banana bread cool in the pan for a few minutes, then transfer it to a wire rack to cool completely. Slice and serve the moist and delicious Banana Bread for breakfast or as a sweet snack. Enjoy!"
  },
  {
    shortId: shortid.generate(),
    name: "Spinach and Feta Stuffed Chicken",
    calories: 600,
    description:
      "Tender chicken breasts filled with spinach and creamy feta cheese.",
    image: "./recipe_images/spinach_and_feta_stuffed_chicken.jpg",
    cuisine: "Greek",
    ingredients: "chicken breasts, fresh spinach, feta cheese, garlic, olive oil, salt, black pepper",
    instructions: "Preheat the oven to 375°F (190°C). Cut a slit in each chicken breast to create a pocket. Season the chicken breasts with salt and black pepper. In a skillet, heat olive oil over medium heat. Sauté minced garlic until fragrant. Add fresh spinach and cook until wilted. Remove from heat and let cool slightly. Stuff each chicken breast with the cooked spinach and crumbled feta cheese. Secure the openings with toothpicks if needed. Heat olive oil in an oven-safe skillet over medium-high heat. Sear the stuffed chicken breasts on each side until browned. Transfer the skillet to the preheated oven and bake for about 20-25 minutes, or until the chicken is cooked through and reaches an internal temperature of 165°F (74°C). Remove the toothpicks before serving. Enjoy the flavorful Spinach and Feta Stuffed Chicken."
  },
  {
    shortId: shortid.generate(),
    name: "Beef and Broccoli Stir-Fry",
    calories: 450,
    description:
      "Thinly sliced beef and crisp broccoli florets tossed in a savory sauce.",
    image: "./recipe_images/beef_and_broccoli_stir_fry.jpg",
    cuisine: "American",
    ingredients: "beef sirloin, broccoli florets, garlic, ginger, soy sauce, oyster sauce, brown sugar, cornstarch, vegetable oil",
    instructions: "In a small bowl, mix together soy sauce, oyster sauce, brown sugar, minced garlic, grated ginger, and cornstarch. Set the sauce aside. Heat vegetable oil in a large skillet or wok over high heat. Add thinly sliced beef and stir-fry until browned. Remove the beef from the skillet and set aside. In the same skillet, stir-fry broccoli florets until crisp-tender. Return the beef to the skillet and pour the sauce over the beef and broccoli. Stir-fry for a few more minutes until the sauce thickens and coats the beef and broccoli. Serve the Beef and Broccoli Stir-Fry hot over steamed rice or noodles. Enjoy the delicious combination of flavors."
  },
  {
    shortId: shortid.generate(),
    name: "Shrimp Scampi",
    calories: 400,
    description:
      "Buttery shrimp tossed with garlic, lemon, and white wine, served over pasta.",
    image: "./recipe_images/shrimp_scampi.jpg",
    cuisine: "Italian",
    ingredients: "shrimp, garlic, butter, olive oil, white wine, lemon juice, red pepper flakes, salt, black pepper, parsley, cooked pasta",
    instructions: "In a skillet, melt butter with olive oil over medium heat. Add minced garlic and sauté until fragrant. Add shrimp and cook until they turn pink and opaque. Remove the shrimp from the skillet and set aside. In the same skillet, pour in white wine and lemon juice. Bring to a simmer and cook for a few minutes to reduce the sauce. Stir in red pepper flakes, salt, and black pepper to taste. Return the cooked shrimp to the skillet and toss them in the sauce. Cook for another minute or two to heat the shrimp through. Remove from heat and sprinkle with chopped parsley. Serve the Shrimp Scampi over cooked pasta, drizzling the remaining sauce over the top. Enjoy the delicious and buttery shrimp with a burst of garlic, lemon, and white wine flavors!"
  },
  {
    shortId: shortid.generate(),
    name: "Mushroom Risotto",
    calories: 550,
    description:
      "Creamy and flavorful arborio rice cooked with mushrooms and parmesan cheese.",
    image: "./recipe_images/mushroom_risotto.jpg",
    cuisine: "Italian",
    ingredients: "arborio rice, mushrooms, onion, garlic, vegetable broth, white wine, butter, Parmesan cheese, fresh thyme, salt, black pepper",
    instructions: "In a saucepan, heat vegetable broth and keep it warm on low heat. In a separate large pot, melt butter over medium heat. Sauté diced onion until translucent, then add minced garlic and sliced mushrooms. Cook until the mushrooms release their moisture and become tender. Add arborio rice to the pot and stir to coat the rice with butter. Pour in white wine and cook until it evaporates. Begin adding the warm vegetable broth to the pot, one ladleful at a time, stirring frequently. Wait for the liquid to be absorbed before adding more broth. Continue this process until the rice is cooked al dente and has a creamy texture. Stir in grated Parmesan cheese, fresh thyme leaves, salt, and black pepper. Remove from heat and let it rest for a few minutes. Serve the Mushroom Risotto hot, garnished with additional Parmesan cheese and thyme leaves if desired."
  },
  {
    shortId: shortid.generate(),
    name: "Chicken Tikka Masala",
    calories: 800,
    description:
      "A spicy and creamy Indian curry dish with tender chicken and aromatic spices.",
    image: "./recipe_images/chicken_tikka_masala.jpg",
    cuisine: "Indian",
    ingredients: "chicken breasts, yogurt, lemon juice, ginger-garlic paste, garam masala, ground cumin, ground coriander, turmeric, cayenne pepper, salt, butter, onion, garlic, tomato puree, heavy cream, fresh cilantro",
    instructions: "In a bowl, combine yogurt, lemon juice, ginger-garlic paste, garam masala, ground cumin, ground coriander, turmeric, cayenne pepper, and salt. Add chicken breasts to the bowl and coat them well with the marinade. Cover and refrigerate for at least 1 hour, or overnight for best results. Preheat the oven to 400°F (200°C). Place the marinated chicken breasts on a baking sheet and bake for 20-25 minutes, or until cooked through. Remove from the oven and let them cool slightly. In a large skillet, melt butter over medium heat. Sauté chopped onion until golden brown, then add minced garlic and cook for another minute. Stir in tomato puree and cook for a few minutes. Add heavy cream and simmer for a few more minutes to thicken the sauce. Cut the baked chicken breasts into bite-sized pieces and add them to the skillet. Cook for a few more minutes to heat through. Garnish with fresh cilantro. Serve the Chicken Tikka Masala hot with rice or naan bread."
  },
  {
    shortId: shortid.generate(),
    name: "Vegetable Stir-Fry",
    calories: 350,
    description:
      "A colorful and healthy stir-fry loaded with veggies and tossed in a light soy sauce.",
    image: "./recipe_images/vegetable_stir_fry.jpg",
    cuisine: "Chinese",
    ingredients: "assorted vegetables (such as bell peppers, broccoli, carrots, snow peas), garlic, ginger, soy sauce, sesame oil, vegetable oil, salt, black pepper",
    instructions: "Prepare the vegetables by washing, trimming, and cutting them into bite-sized pieces. Mince garlic and grate ginger. Heat vegetable oil in a wok or large skillet over high heat. Add minced garlic and grated ginger to the hot oil and stir-fry for a few seconds until fragrant. Add the vegetables to the wok and stir-fry for a few minutes until they start to soften but still retain their crunch. Season with soy sauce, sesame oil, salt, and black pepper. Continue stir-frying for another minute or two to coat the vegetables evenly with the sauce and allow the flavors to meld together. Be careful not to overcook the vegetables; they should be vibrant and slightly crisp. Transfer the Vegetable Stir-Fry to a serving dish and serve hot as a side dish or as a main course with steamed rice or noodles. Enjoy the colorful and healthy combination of flavors in this Chinese-inspired stir-fry!"
  },
  {
    shortId: shortid.generate(),
    name: "Pesto Pasta",
    calories: 500,
    description:
      "Pasta tossed in a vibrant green pesto sauce made with fresh basil, garlic, and pine nuts.",
    image: "./recipe_images/pesto_pasta.jpg",
    cuisine: "Italian",
    ingredients: "pasta, fresh basil leaves, garlic, pine nuts, Parmesan cheese, olive oil, salt, black pepper",
    instructions: "Cook the pasta according to package instructions until al dente. Meanwhile, in a food processor or blender, combine fresh basil leaves, minced garlic, toasted pine nuts, grated Parmesan cheese, salt, and black pepper. Blend until the ingredients are finely chopped. While the food processor is running, gradually pour in olive oil until a smooth and creamy pesto sauce is formed. Drain the cooked pasta and return it to the pot. Add the pesto sauce to the pasta and toss until well coated. Season with additional salt and black pepper if needed. Serve the Pesto Pasta hot, garnished with extra Parmesan cheese and fresh basil leaves if desired."
  },
  {
    shortId: shortid.generate(),
    name: "Beef Tacos",
    calories: 300,
    description:
      "Crispy corn tortillas filled with seasoned ground beef, lettuce, tomato, and cheese.",
    image: "./recipe_images/beef_tacos.jpg",
    cuisine: "American",
    ingredients: "ground beef, taco seasoning, corn tortillas, lettuce, tomato, cheese, salsa, sour cream",
    instructions: "In a skillet, brown the ground beef over medium heat. Drain any excess fat. Add taco seasoning to the skillet and stir to coat the beef evenly. Cook for a few more minutes until the beef is fully cooked and the flavors are well combined. Warm the corn tortillas in a separate skillet or in the oven. Fill each tortilla with the seasoned ground beef, shredded lettuce, diced tomato, grated cheese, salsa, and a dollop of sour cream. Fold the tortillas in half or roll them up. Serve the Beef Tacos hot and enjoy the crispy texture and delicious flavors."
  },
  {
    shortId: shortid.generate(),
    name: "Sweet and Sour Chicken",
    calories: 700,
    description:
      "Tangy and sweet chicken stir-fry with colorful bell peppers and pineapple.",
    image: "./recipe_images/sweet_and_sour_chicken.jpg",
    cuisine: "Chinese",
    ingredients: "chicken breasts, bell peppers, pineapple chunks, onion, garlic, ketchup, rice vinegar, soy sauce, brown sugar, cornstarch, vegetable oil",
    instructions: "In a bowl, mix together ketchup, rice vinegar, soy sauce, brown sugar, minced garlic, and cornstarch. Set the sauce aside. Heat vegetable oil in a skillet or wok over high heat. Add diced chicken breasts and stir-fry until browned. Remove the chicken from the skillet and set aside. In the same skillet, stir-fry sliced bell peppers and diced onion until crisp-tender. Add pineapple chunks and cooked chicken back to the skillet. Pour the sauce over the chicken and vegetables. Stir-fry for a few more minutes until the sauce thickens and coats the chicken and vegetables. Serve the Sweet and Sour Chicken hot over steamed rice. Enjoy the flavorful combination of tangy and sweet flavors."
  },
  {
    shortId: shortid.generate(),
    name: "Blueberry Pancakes",
    calories: 400,
    description:
      "Fluffy and delicious pancakes filled with fresh blueberries and drizzled with maple syrup.",
    image: "./recipe_images/blueberry_pancakes.jpg",
    cuisine: "American",
    ingredients: "all-purpose flour, baking powder, salt, sugar, milk, eggs, butter, fresh blueberries, maple syrup",
    instructions: "In a mixing bowl, combine all-purpose flour, baking powder, salt, and sugar. In a separate bowl, whisk together milk and eggs. Pour the milk and egg mixture into the dry ingredients and stir until just combined. Gently fold in fresh blueberries. Heat a non-stick skillet or griddle over medium heat and melt butter. Pour the pancake batter onto the skillet to form pancakes of desired size. Cook until bubbles form on the surface, then flip the pancakes and cook until golden brown on both sides. Serve the Blueberry Pancakes hot, stacked and drizzled with maple syrup."
  },
  {
    shortId: shortid.generate(),
    name: "Beef and Vegetable Stew",
    calories: 500,
    description:
      "A hearty and filling stew with tender beef, potatoes, carrots, and other veggies.",
    image: "./recipe_images/beef_and_vegetable_stew.jpg",
    cuisine: "American",
    ingredients: "beef stew meat, onion, garlic, carrots, potatoes, celery, beef broth, tomato paste, Worcestershire sauce, dried thyme, dried rosemary, salt, black pepper, flour",
    instructions: "In a large pot or Dutch oven, brown the beef stew meat over medium-high heat. Remove the beef from the pot and set aside. In the same pot, sauté diced onion and minced garlic until softened. Add sliced carrots, diced potatoes, diced celery, beef broth, tomato paste, Worcestershire sauce, dried thyme, dried rosemary, salt, and black pepper. Stir well to combine. Return the browned beef stew meat to the pot. Bring the stew to a boil, then reduce the heat to low. Cover and simmer for about 2-3 hours, or until the beef is tender and the flavors have melded together. In a small bowl, mix flour with water to make a slurry. Stir the slurry into the stew to thicken the broth. Continue cooking for a few more minutes until the stew has thickened. Serve the Beef and Vegetable Stew hot, and enjoy the hearty and comforting flavors."
  },
  {
    shortId: shortid.generate(),
    name: "Chicken Enchiladas",
    calories: 600,
    description:
      "Tortillas filled with seasoned chicken, cheese, and smothered in spicy tomato sauce.",
    image: "./recipe_images/chicken_enchiladas.jpg",
    cuisine: "Mexican",
    ingredients: "cooked chicken, tortillas, shredded cheese, onion, garlic, chili powder, cumin, oregano, salt, black pepper, tomato sauce, chicken broth, sour cream, cilantro",
    instructions: "Preheat the oven to 350°F (175°C). In a skillet, sauté diced onion and minced garlic until softened. Add shredded cooked chicken, chili powder, cumin, oregano, salt, and black pepper. Stir well to coat the chicken with the spices. In a separate bowl, mix together tomato sauce and chicken broth. Pour a small amount of the tomato sauce mixture into the",
  },
  {
    shortId: shortid.generate(),
    name: "Lemon Garlic Shrimp Pasta",
    calories: 450,
    description:
      "Tender shrimp tossed in a garlicky lemon butter sauce with pasta and fresh herbs.",
    image: "./recipe_images/lemon_garlic_shrimp_pasta.jpg",
    cuisine: "Italian",
    ingredients: "shrimp, pasta, garlic, lemon, butter, olive oil, fresh parsley, salt, black pepper",
    instructions: "Cook the pasta according to package instructions until al dente. In a skillet, heat olive oil over medium heat. Add minced garlic and sauté until fragrant. Add shrimp to the skillet and cook until pink and cooked through. Remove the shrimp from the skillet and set aside. In the same skillet, melt butter over low heat. Squeeze the juice of a lemon into the skillet and stir well. Return the cooked shrimp to the skillet and toss to coat them in the lemon butter sauce. Add the cooked pasta to the skillet and toss everything together. Season with salt and black pepper to taste. Garnish with chopped fresh parsley. Serve the Lemon Garlic Shrimp Pasta hot and enjoy the burst of flavors."
  },
  {
    shortId: shortid.generate(),
    name: "Quinoa Salad",
    calories: 300,
    description:
      "A healthy and flavorful salad with quinoa, veggies, and a tangy vinaigrette dressing.",
    image: "./recipe_images/quinoa_salad.jpg",
    cuisine: "American",
    ingredients: "quinoa, cucumber, cherry tomatoes, red onion, bell pepper, feta cheese, fresh parsley, lemon juice, olive oil, Dijon mustard, honey, salt, black pepper",
    instructions: "Cook the quinoa according to package instructions and let it cool. In a large bowl, combine cooked quinoa, diced cucumber, halved cherry tomatoes, sliced red onion, diced bell pepper, crumbled feta cheese, and chopped fresh parsley. In a separate small bowl, whisk together lemon juice, olive oil, Dijon mustard, honey, salt, and black pepper to make the vinaigrette dressing. Pour the dressing over the quinoa salad and toss well to combine. Adjust the seasoning if needed. Chill the Quinoa Salad in the refrigerator for at least 30 minutes to allow the flavors to meld. Serve the salad cold as a refreshing and nutritious side dish or light meal."
  },
  {
    shortId: shortid.generate(),
    name: "Beef and Mushroom Pie",
    calories: 700,
    description:
      "A savory and delicious pie filled with tender beef, mushrooms, and gravy.",
    image: "./recipe_images/beef_and_mushroom_pie.jpg",
    cuisine: "American",
    ingredients: "beef, mushrooms, onion, garlic, flour, beef broth, Worcestershire sauce, thyme, salt, black pepper, pie crust",
    instructions: "In a large skillet, brown the beef over medium heat. Remove the beef from the skillet and set aside. In the same skillet, sauté diced onion and minced garlic until softened. Add sliced mushrooms and cook until they release their moisture. Return the browned beef to the skillet. Sprinkle flour over the beef and mushrooms, and stir to coat. Gradually pour in beef broth and Worcestershire sauce while stirring. Add thyme, salt, and black pepper. Simmer the mixture until the sauce thickens. Remove from heat and let it cool. Preheat the oven to the temperature recommended for the pie crust. Roll out the pie crust and line a pie dish with it. Pour the beef and mushroom filling into the pie crust. Cover with another layer of pie crust or create a lattice pattern with strips of pie crust. Bake in the preheated oven until the crust is golden brown and the filling is hot and bubbly. Allow the pie to cool slightly before serving."
  },
  {
    shortId: shortid.generate(),
    name: "Grilled Salmon",
    calories: 400,
    description:
      "Juicy and flavorful salmon fillets grilled to perfection with lemon and herbs.",
    image: "./recipe_images/grilled_salmon.jpg",
    cuisine: "American",
    ingredients: "salmon fillets, lemon, olive oil, garlic, fresh herbs (such as dill, parsley, or thyme), salt, black pepper",
    instructions: "Preheat the grill to medium-high heat. In a small bowl, combine the juice of a lemon, olive oil, minced garlic, chopped fresh herbs, salt, and black pepper. Place the salmon fillets on a greased grill grate, skin side down. Brush the lemon herb mixture over the top of the salmon fillets. Close the grill lid and cook for about 4-6 minutes per side, depending on the thickness of the fillets. The salmon is done when it flakes easily with a fork. Remove the salmon from the grill and serve hot. Garnish with additional fresh herbs and lemon slices if desired."
  },
  {
    shortId: shortid.generate(),
    name: "Vegetable Curry",
    calories: 400,
    description:
      "A colorful and spicy curry dish with an array of veggies, coconut milk, and aromatic spices.",
    image: "./recipe_images/vegetable_curry.jpg",
    cuisine: "Chinese",
    ingredients: "assorted vegetables (such as bell peppers, carrots, broccoli, and peas), onion, garlic, ginger, curry powder, turmeric, cumin, coconut milk, vegetable broth, tomato paste, soy sauce, brown sugar, lime juice, cilantro",
    instructions: "In a large skillet or wok, heat oil over medium heat. Add diced onion and cook until translucent. Stir in minced garlic and grated ginger, and cook for another minute. Add curry powder, turmeric, and cumin to the skillet, and toast the spices for a few seconds to release their flavors. Add the assorted vegetables to the skillet and stir-fry for a few minutes until they start to soften. In a bowl, whisk together coconut milk, vegetable broth, tomato paste, soy sauce, brown sugar, and lime juice. Pour the coconut milk mixture into the skillet and stir well to combine. Reduce the heat to low and simmer the curry for about 10-15 minutes, or until the vegetables are tender and the flavors have melded together. Serve the Vegetable Curry hot, garnished with fresh cilantro. Enjoy the fragrant and spicy curry with steamed rice or naan bread."
  },
  {
    shortId: shortid.generate(),
    name: "Pulled Pork Sandwich",
    calories: 500,
    description:
      "Slow-cooked pulled pork with tangy barbecue sauce served on a soft bun.",
    image: "./recipe_images/pulled_pork_sandwich.jpg",
    cuisine: "American",
    ingredients: "pork shoulder, barbecue sauce, onion, garlic, paprika, brown sugar, salt, black pepper, hamburger buns",
    instructions: "Rub the pork shoulder with paprika, brown sugar, salt, and black pepper. Place the seasoned pork shoulder in a slow cooker and add diced onion and minced garlic. Pour barbecue sauce over the pork shoulder. Cover the slow cooker and cook on low heat for 8-10 hours, or until the pork is tender and easily shreds. Once the pork is cooked, remove it from the slow cooker and shred it using two forks. Return the shredded pork to the slow cooker and mix it with the remaining sauce. Serve the pulled pork on hamburger buns, and optionally, add additional barbecue sauce and coleslaw for extra flavor and crunch."
  },
  {
    shortId: shortid.generate(),
    name: "Tomato Soup",
    calories: 250,
    description:
      "A classic and comforting soup made with juicy tomatoes, herbs, and cream.",
    image: "./recipe_images/tomato_soup.jpg",
    cuisine: "American",
    ingredients: "tomatoes, onion, garlic, vegetable broth, tomato paste, sugar, basil, thyme, cream, salt, black pepper",
    instructions: "In a large pot, sauté diced onion and minced garlic until softened. Add diced tomatoes, vegetable broth, tomato paste, sugar, basil, thyme, salt, and black pepper. Bring the mixture to a boil, then reduce the heat and simmer for about 20-30 minutes to allow the flavors to meld together. Use an immersion blender or transfer the soup to a blender to puree until smooth. Return the soup to the pot and stir in cream. Heat the soup over low heat until warmed through. Adjust the seasoning if needed. Serve the Tomato Soup hot, garnished with a sprinkle of fresh herbs if desired. Enjoy the comforting and flavorful soup with crusty bread or grilled cheese sandwiches."
  },
  {
    shortId: shortid.generate(),
    name: "Spicy Crawfish",
    calories: 300,
    description:
      "One of the most popular crawfish recipes in Chinese food.",
    image: "./recipe_images/Spicy_Crawfish.jpg",
    cuisine: "Chinese",
    ingredients: "crawfish, garlic, ginger, onion, bell peppers, dried chili peppers, soy sauce, hoisin sauce, sugar, salt, vegetable oil",
    instructions: "Heat vegetable oil in a large wok or skillet over high heat. Add minced garlic, grated ginger, and diced onion to the wok and stir-fry for a minute until fragrant. Add bell peppers and dried chili peppers, and continue stir-frying for a couple of minutes. Add crawfish to the wok and stir-fry until they turn pink and cooked through. In a small bowl, mix together soy sauce, hoisin sauce, sugar, and salt. Pour the sauce over the crawfish and vegetables in the wok. Stir well to coat everything in the sauce. Continue cooking for another minute or two to allow the flavors to blend together. Serve the Spicy Crawfish hot as an appetizer or main dish. Enjoy the bold and spicy flavors of this Chinese-inspired crawfish recipe."
  },
  {
    shortId: shortid.generate(),
    name: "Boiled Beef in Hot Sauce",
    calories: 280,
    description:
      "A classic Sichuan dish that is easy to make at home and excitingly sizzly.",
    image: "./recipe_images/Boiled_Beef.jpg",
    cuisine: "Chinese",
    ingredients: "beef (such as flank steak or sirloin), Sichuan peppercorns, dried chili peppers, garlic, ginger, green onions, soy sauce, rice wine vinegar, sugar, sesame oil, vegetable oil, salt",
    instructions: "Bring a pot of water to a boil. Add the beef and cook until it is just cooked through, about 2-3 minutes. Remove the beef from the pot and let it cool. While the beef is cooling, prepare the sauce. In a small bowl, combine soy sauce, rice wine vinegar, sugar, sesame oil, and salt. Stir until the sugar is dissolved. Once the beef has cooled, slice it thinly against the grain. Heat vegetable oil in a pan or wok over medium heat. Add Sichuan peppercorns, dried chili peppers, minced garlic, minced ginger, and chopped green onions. Stir-fry for a minute until fragrant. Add the sliced beef to the pan and stir-fry for another minute to heat it through. Pour the sauce over the beef and stir to coat everything evenly. Continue cooking for a minute or two to allow the flavors to meld together. Transfer the Boiled Beef in Hot Sauce to a serving dish and garnish with additional chopped green onions if desired. Serve hot with steamed rice or noodles. Enjoy the spicy and flavorful Sichuan dish!"
  }
];

module.exports = { recipes };
