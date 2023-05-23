import renderer from "react-test-renderer";
import Landing from "../components/Landing";

it("Render Landing Page", () => {
  const landing = renderer.create(<Landing />);
  expect(landing).toBeTruthy();
});
