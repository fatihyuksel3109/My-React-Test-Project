import React from 'react'
import App from '../App'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';



describe("İlgili emojinin kopyalandığını kontrol edecek olan test",() =>{
    let copyEmoji;
    beforeEach(()=>{
        render(<App/>)
        copyEmoji = screen.getByText("Grinning")
    })
    test("copy to clickboard test",()=>{
        userEvent.click(copyEmoji)
        expect(copyEmoji.parentElement.getAttribute("data-clipboard-text")).toMatch("😀")
    })
})
