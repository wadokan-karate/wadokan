import OurTeam from "../components/OurTeam";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

test('should render ourteam tittle', ()=>{
    render(<OurTeam/>);
    const ourTeamTittle = screen.getByText(/LAS SENSEIS/i);
    expect(ourTeamTittle).toBeInTheDocument();
})