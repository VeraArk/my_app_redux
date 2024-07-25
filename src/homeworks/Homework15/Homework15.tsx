import Button from "components/Button/Button"
import Counter from "components/Counter/Counter"
import Input from "components/Input/Input"
import { useState } from "react"

import { PageWrapper, ButtonControl } from "./styles"

function Homework15() {
  const [count, setCount] = useState<number>(0)

  const onMinus = (): void => {
    setCount((prevValue: number) => prevValue - 1)
  }

  const onPlus = (): void => {
    setCount((prevValue: number) => prevValue + 1)
  }
  return (
    <PageWrapper>
      <Input
        id="name-id"
        name="userName"
        label="Yuor name"
        placeholder="Entry yuor name"
        onChange={() => {}}
      />
      <ButtonControl>
        <Button name="Get gamer's name" onClick={() => {}} />
      </ButtonControl>
      <Counter count={count} onPlus={onPlus} onMinus={onMinus} />
    </PageWrapper>
  )
}

export default Homework15
