import renderer from "react-test-renderer";
import Nav from "../components/Nav";
import { BrowserRouter } from "react-router-dom";

it("Render Nav Page", () => {
  const nav = renderer.create(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );
  expect(nav).toBeTruthy();
});
