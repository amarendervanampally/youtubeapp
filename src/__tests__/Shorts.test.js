import { render ,screen } from "@testing-library/react"
import Shorts from "../components/Shorts"
import "@testing-library/jest-dom";

test("shoerts text find",()=>{
render(<Shorts/>);
const heading = screen.getByText("Shorts");
expect(heading).toBeInTheDocument();
})

test("shoerts text find",()=>{
    render(<Shorts/>);
    const inputbox = screen.getByRole("textbox");
    expect(inputbox.legnth).toBe(2);
    })