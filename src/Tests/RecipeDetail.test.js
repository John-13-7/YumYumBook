import renderer from "react-test-renderer";
import RecipeDetail from "../components/RecipeDetail";

it("Render RecipeDetail Page", () => {
  const recipe_detail = renderer.create(<RecipeDetail />);
  expect(recipe_detail).toBeTruthy();
});
