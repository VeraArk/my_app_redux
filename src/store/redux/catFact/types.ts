export interface CatFacts{
    id: string,
    fact: string
}


export interface CatFactSliceState {
  catFacts: []
  error: string | undefined
}