import { createAppSlice } from "store/createAppSlice"

import { CatFactSliceState } from "./types"

const catFactInitialState: CatFactSliceState = {
  catFacts: [],
  error: undefined,
}

export const catFactSlice = createAppSlice({
  name: "CAT_FACT",
  initialState: catFactInitialState,
  reducers: create => ({}),
  selectors: {
    catFacts: (state: CatFactSliceState) => state.catFacts,
    error: (state: CatFactSliceState) => state.error,
  },
})

export const catFactsActions = catFactSlice.actions

export const catFactSelectors = catFactSlice.selectors
