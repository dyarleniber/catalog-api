// Use case based on '@application/interfaces/use-case'

import { UseCase } from '@application/interfaces/use-case'

export interface IDeleteCategory extends UseCase<IDeleteCategory.Input, IDeleteCategory.Output> {
  execute: (input: IDeleteCategory.Input) => Promise<IDeleteCategory.Output>
}

export namespace IDeleteCategory {
  export interface Input { id: string }
  export type Output = void
}
