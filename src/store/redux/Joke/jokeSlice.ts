import axios from "axios"
import { v4 } from "uuid"
import { createAppSlice } from "store/createAppSlice"
import { PayloadAction } from "@reduxjs/toolkit"

import { JokeSliceState, Joke } from "./types"

const jokeInitialState: JokeSliceState = {
  joke: [],
  error: undefined,
}

export const jokeSlice = createAppSlice({
  name: "RANDOM_JOKE",
  initialState: jokeInitialState,
  reducers: create => ({
    getJoke: create.asyncThunk(
      async (payload: any) => {
        let response = await axios.get(
          " https://official-joke-api.appspot.com/random_joke",
        )
        return response
      },
      {
        pending: (state: JokeSliceState) => {
          state.error = undefined
        },
        fulfilled: (state: JokeSliceState, action) => {
          state.joke = [
            ...state.joke,
            {
              setup: action.payload.data.setup,
              punchline: action.payload.data.punchline,
              id: v4(),
            },
          ]
        },
        rejected: (state: JokeSliceState, action) => {
          state.error = action.error.message
          console.log("rejected", action)
        },
      },
    ),
    deleteJoke: create.reducer(
      (state: JokeSliceState, action: PayloadAction<string>) => {
        state.joke = state.joke.filter((joke: Joke) => {
          return joke.id !== action.payload
        })
      },
    ),
    deleteAllJokes: create.reducer(() => jokeInitialState),
  }),
  selectors: {
    Joke: (state: JokeSliceState) => state.joke,
    error: (state: JokeSliceState) => state.error,
  },
})

export const jokeActions = jokeSlice.actions

export const jokeSelectors = jokeSlice.selectors
