import { v4 } from "uuid"
import { useEffect } from "react"

import { useAppDispatch, useAppSelector } from "store/hooks"
import { jokeSelectors, jokeActions } from "store/redux/Joke/jokeSlice"
import { Joke } from "store/redux/Joke/types"

import Button from "components/Button/Button"

import {
  PageWrapper,
  JokeCard,
  JokeContainer,
  JokeWrapper,
  ButtonControl,
  JokeText,
  SetupText,
  PunchlineText,
} from "./styles"

function Homework18() {
  const dispatch = useAppDispatch()
  const jokes = useAppSelector(jokeSelectors.Joke)
  const error = useAppSelector(jokeSelectors.error)

  const getJoke = () => {
    dispatch(jokeActions.getJoke("Some fake data"))
  }

  const deleteJoke = () => {
    dispatch(jokeActions.deleteAllJokes())
  }

  const JokeParagraphs = jokes.map((joke: Joke) => {
    return (
      <JokeWrapper key={v4()}>
        <JokeText>
          <SetupText>{joke.setup}</SetupText>
                <PunchlineText>{joke.punchline}</PunchlineText>
        </JokeText>
        <ButtonControl>
          <Button
            isRed
            name="Delete"
            onClick={() => {
              dispatch(jokeActions.deleteJoke(joke.id))
            }}
          />
        </ButtonControl>
      </JokeWrapper>
    )
  })

  useEffect(() => {
    if (error) {
      alert(error)
    }
  }, [error])

  return (
    <PageWrapper>
      <JokeCard>
        {jokes.length > 0 && (
          <Button name="Delete all Jokes" isRed onClick={deleteJoke} />
        )}
        <JokeContainer>{jokes.length > 0 && JokeParagraphs}</JokeContainer>
        <Button name="Get Random Joke" onClick={getJoke} />
      </JokeCard>
    </PageWrapper>
  )
}

export default Homework18
