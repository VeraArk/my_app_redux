import { createAppSlice } from "store/createAppSlice"

import { FeedbackState } from "./types"


const initialState: FeedbackState = { like: 0, dislike: 0, }

export const feedbackSlice = createAppSlice({
  name: "FEEDBACK",
  initialState,
  reducers: create => ({
    plusLike: create.reducer(state => {
      state.like = state.like + 1
    }),
    plusDislike: create.reducer(state => {
      state.dislike = state.dislike + 1
    }),
    resetResults: create.reducer(state => {
      state.dislike = 0
      state.like = 0
    }),
  }),
  selectors: {
    like: (state: FeedbackState) => {
      return state.like
    },
    dislike: (state: FeedbackState) => {
      return state.dislike
    },
  },
})

export const feedbackSliceActions = feedbackSlice.actions

// selectors - это данные которые мы будем отдавать компонентам, т.е позволять компонентам подписываться
// на redux store
export const feedbackSliceSelectors = feedbackSlice.selectors
