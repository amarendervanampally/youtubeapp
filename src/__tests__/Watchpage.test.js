import { render,screen } from "@testing-library/react"
import Watchpage from "../components/Watchpage"
import "@testing-library/jest-dom";

test("watch page heaing",() => {
render(<Watchpage/>);
const heading= screen.getByRole("heading");
expect(heading).toBeInTheDocument();
})