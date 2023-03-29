import React from 'react'
import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'


describe("Check if Header is rendered correctly !",()=>{
    let headerRender;
    beforeEach(()=>{
        render(<App/>)
        headerRender =screen.getByText("Emoji Search")
    })
    test('Document should be have HeaderComponent', () => {
        expect(headerRender).toBeInTheDocument()
    });
})