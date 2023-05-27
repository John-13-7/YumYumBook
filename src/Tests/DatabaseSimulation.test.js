import renderer from "react-test-renderer";
import DatabaseSimulation from "../components/DatabaseSimulation";

it("Render Database page", () => {
  const database = renderer.create(<DatabaseSimulation />);
  expect(database).toBeTruthy();
});
