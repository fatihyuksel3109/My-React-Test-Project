import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import App from '../App'

describe('Search Emoji', () => { 
    let searchEmoji;
    beforeEach(()=>{
        render(<App/>)
        searchEmoji = screen.getByTestId("input")
    })
    test("render after filter",() =>{
        const value = "Yum"
        userEvent.type(searchEmoji,value)
        expect(screen.getByText(value)).toBeInTheDocument();
    })
})