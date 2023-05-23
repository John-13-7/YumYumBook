import renderer from "react-test-renderer";
import FAQ from "../components/FAQ";

it("Render FAQ page", () => {
  const frequently_asked_questions = renderer.create(<FAQ />);
  expect(frequently_asked_questions).toBeTruthy();
});
