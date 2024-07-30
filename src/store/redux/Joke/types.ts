export interface Joke {
  setup: string
  punchline: string
  id: string
}

export interface JokeSliceState {
  joke: Joke[]
  error: string | undefined
}
