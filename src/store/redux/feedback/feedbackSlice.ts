import { createAppSlice } from "store/createAppSlice"

import { LikeSliceState, DislikeSliceState } from "./types"

interface FeedbackState {
  like: LikeSliceState
  dislike: DislikeSliceState
}

const initialState: FeedbackState = {
  like: { like: 0 },
  dislike: { dislike: 0 },
}

export const feedbackSlice = createAppSlice({
  name: "FEEDBACK",
  initialState,
  reducers: create => ({
    plusLike: create.reducer(state => {
      state.like.like = state.like.like + 1
    }),
    plusDislike: create.reducer(state => {
      state.dislike.dislike = state.dislike.dislike + 1
    }),
    resetResults: create.reducer(state => {
      state.dislike.dislike = 0
      state.like.like = 0
    }),
  }),
  selectors: {
    like: (state: FeedbackState) => {
      return state.like.like
    },
    dislike: (state: FeedbackState) => {
      return state.dislike.dislike
    },
  },
})

export const feedbackSliceActions = feedbackSlice.actions

// selectors - это данные которые мы будем отдавать компонентам, т.е позволять компонентам подписываться
// на redux store
export const feedbackSliceSelectors = feedbackSlice.selectors
