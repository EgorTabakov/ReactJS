import {Form} from "../Form";
import {render, fireEvent, screen} from "@testing-library/react";

describe('Form', () => {
    it('call onSubmit when btn clicked', () => {
        const mockSubmit = jest.fn();
        render(<Form onSubmit={mockSubmit}/>);

        const button = screen.getByTestId("custom-element")
        fireEvent(
            button,
            new MouseEvent("click", {
                bubbles: true,
                cancelable: true,
            })
        );

        expect(mockSubmit).toHaveBeenCalledTimes(1);
    });
});