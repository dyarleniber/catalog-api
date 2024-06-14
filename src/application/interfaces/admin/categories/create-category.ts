// Use case based on '@application/interfaces/use-case'

import { UseCase } from '@application/interfaces/use-case'

export interface ICreateCategory extends UseCase<ICreateCategory.Input, ICreateCategory.Output> {
  execute: (input: ICreateCategory.Input) => Promise<ICreateCategory.Output>
}

export namespace ICreateCategory {
  export interface Input { name: string }
  export type Output = void
}
