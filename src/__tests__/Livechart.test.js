import Livechart from "../components/Livechart"
import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';


test("find the button name is send",() => {
    render(<Livechart/>);
    const text = screen.getByText("send");
    expect(text).toBeInTheDocument();
})