import { v4 } from "uuid"
import { useEffect } from "react"

import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  catFactSelectors,
  catFactsActions,
} from "store/redux/catFact/catFactSlice"
import { CatFacts } from "store/redux/catFact/types"

import Button from "components/Button/Button"

import {
  PageWrapper,
  CatFactCard,
  CatFactsContainer,
  CatFactText,
} from "./styles"

function Lesson_18() {
  const dispatch = useAppDispatch()
  const catFacts = useAppSelector(catFactSelectors.catFacts)
  const error = useAppSelector(catFactSelectors.error)

  const getCatFact = () => {}

  const catFactsParagraphs = catFacts.map((catFact: CatFacts) => {
    return <CatFactText key={v4()}>{catFact.fact}</CatFactText>
  })
  useEffect(() => {
    if (error) {
      alert(error)
    }
  }, [error])

  return (
    <PageWrapper>
      <CatFactCard>
        <CatFactsContainer>
          {catFacts.length > 0 && catFactsParagraphs}
        </CatFactsContainer>
        <Button name="Get Cat Fact" onClick={getCatFact} />
      </CatFactCard>
    </PageWrapper>
  )
}

export default Lesson_18