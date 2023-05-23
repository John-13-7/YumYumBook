import renderer from "react-test-renderer";
import Lookup, { filter_other } from "../components/Lookup";

it("Render Lookup page ", () => {
  const lookup = renderer.create(<Lookup />);
  expect(lookup).toBeTruthy();
});
