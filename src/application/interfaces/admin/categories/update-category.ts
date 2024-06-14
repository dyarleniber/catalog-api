// Use case based on '@application/interfaces/use-case'

import { UseCase } from '@application/interfaces/use-case'

export interface IUpdateCategory extends UseCase<IUpdateCategory.Input, IUpdateCategory.Output> {
  execute: (input: IUpdateCategory.Input) => Promise<IUpdateCategory.Output>
}

export namespace IUpdateCategory {
  export interface Input {
    id: string
    name: string
    description: string
    status: string
  }
  export type Output = void
}
