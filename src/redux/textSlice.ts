import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TextState {
  value: string;
}

const initialState: TextState = {
  value: `
  # h1
  ## h2
  \`inline code\`
  \`\`\`
  code
  block
  block
  \`\`\`
  [link](link)
  > blockquote

  **bold text**
  - list
    - list element
  
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `,
};

export const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    changeText: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { changeText } = textSlice.actions;

export default textSlice.reducer;
