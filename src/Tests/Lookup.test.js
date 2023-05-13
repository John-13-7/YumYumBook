import renderer from "react-test-renderer";
import Lookup from "../components/Lookup";

// describe("Lookup Page", () => {
//   it("Mexican Recipes", () => {
//     const inp = ["mexican"];
//     const mexican_recipes = filter_other(inp);
//     const filtered_recipes = mexican_recipes.map(
//       ({ shortid, image, ...rest }) => rest
//     );
//     expect(filtered_recipes).toEqual(filtered_recipes);
//   });
//   it("Always true", () => {
//     expect(true).toBe(true);
//   });
// });

describe("Always true", () => {
  it("true", () => {
    const lookup = renderer.create(<Lookup />);
    expect(lookup).toBeTruthy();
  });
});
