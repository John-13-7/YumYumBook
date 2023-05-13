import renderer from "react-test-renderer";
import App from "../App";
import Nav from "../components/Nav";
import { BrowserRouter } from "react-router-dom";

it("Render App component", () => {
  const app = renderer.create(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(app).toBeTruthy();
});

it("Render Navigation Bar", () => {
  const nav = renderer.create(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );
  expect(nav).toBeTruthy();
});
