import { createSlice } from "@reduxjs/toolkit";

const help = `Heading
=======
Sub-heading
-----------
### Another deeper heading
Paragraphs are separated
by a blank line.
Leave 2 spaces at the end of a line to do a
line break
Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .
Shopping list:
  * apples
  * oranges
  * pears
Numbered list:
  1. apples
  2. oranges
  3. pears
The rain---not the reign---in
Spain.
 *[Herman Fassett](https://freecodecamp.com/hermanfassett)*`;

export const markdownSlice = createSlice({
    name: "markdown",
    initialState: {
        isClicked: false,
        inputText: 'this is user input',
        helpText: help,
    },
    reducers: {
        inputTextbyUser: (state, action) => {
            state.inputText = action.payload;
        },
        isClickedHelp: (state,action) => {
            state.isClicked = action.payload;
        }
    },
});

export const {inputTextbyUser, isClickedHelp} = markdownSlice.actions;
export default markdownSlice.reducer;