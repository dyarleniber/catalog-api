// Use case based on '@application/interfaces/use-case'

import { UseCase } from '@application/interfaces/use-case'

export interface IGetCategory extends UseCase<IGetCategory.Input, IGetCategory.Output> {
  execute: (input: IGetCategory.Input) => Promise<IGetCategory.Output>
}

export namespace IGetCategory {
  export interface Input { }
  export type Output = void
}
