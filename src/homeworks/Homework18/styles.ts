import styled from "@emotion/styled"

import { colors } from "styles/colors"

export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:30px;
  padding: 100px;
  background-color: ${colors.PRIMARY};
`

export const JokeCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 700px;
  min-height: 300px;
  max-height: 800px;
  padding: 40px;
  border: 2px solid black;
  border-radius: 6px;
  background-color: white;
  overflow-y: auto;
`

export const JokeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 30px;
`
export const JokeText = styled.div`
display: flex;
flex-direction:column;
`
export const SetupText = styled.p`
  font-size: 24px;
  font-weight: 500;
`

export const PunchlineText = styled.p`
  font-weight: 700;
  font-size: 27px;
`
export const JokeWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
`

export const ButtonControl = styled.div`
  min-width: 100px;
  height: 70px;
`
