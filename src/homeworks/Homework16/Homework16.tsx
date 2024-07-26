import { useAppDispatch, useAppSelector } from "store/hooks"

import Feedback from "components/Feedback/Feedback"
import { PageWrapper } from "./styles"
import {
  feedbackSliceSelectors,
  feedbackSliceActions,
} from "store/redux/feedback/feedbackSlice"

function Homework16() {
  const dispatch = useAppDispatch()

  const like = useAppSelector(feedbackSliceSelectors.like)
  const dislike = useAppSelector(feedbackSliceSelectors.dislike)

  const onLike = () => {
    dispatch(feedbackSliceActions.plusLike())
  }

  const onDislike = () => {
    dispatch(feedbackSliceActions.plusDislike())
  }

  const resetResults = () => {
    dispatch(feedbackSliceActions.resetResults())
  }

  return (
    <PageWrapper>
      <Feedback
        like={like}
        dislike={dislike}
        onDislike={onDislike}
        onLike={onLike}
        resetResults={resetResults}
      />
    </PageWrapper>
  )
}

export default Homework16
