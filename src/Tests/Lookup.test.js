import renderer from "react-test-renderer";
import Lookup, { filter_other } from "../components/Lookup";

// describe("Lookup Page", () => {
//   it("Mexican Recipes", () => {
//     const inp = ["mexican"];
//     const mexican_recipes = filter_other(inp);
//     const filtered_recipes = mexican_recipes.map(
//       ({ shortid, image, ...rest }) => rest
//     );
//     expect(filtered_recipes).toEqual(filtered_recipes);
//   });
// });

it("render lookup: ", () => {
  const lookup = renderer.create(<Lookup />);
  expect(lookup).toBeTruthy();
});
