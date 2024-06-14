// Use case based on '@application/interfaces/use-case'

import { UseCase } from '@application/interfaces/use-case'

export interface IGetCategories extends UseCase<IGetCategories.Input, IGetCategories.Output> {
  execute: (input: IGetCategories.Input) => Promise<IGetCategories.Output>
}

export namespace IGetCategories {
  export interface Input { }
  export type Output = void
}
