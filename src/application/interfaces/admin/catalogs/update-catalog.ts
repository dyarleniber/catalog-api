// Use case based on '@application/interfaces/use-case'

import { UseCase } from '@application/interfaces/use-case'

export interface IUpdateCatalog extends UseCase<IUpdateCatalog.Input, IUpdateCatalog.Output> {
  execute: (input: IUpdateCatalog.Input) => Promise<IUpdateCatalog.Output>
}

export namespace IUpdateCatalog {
  export interface Input {
    id: string
    name: string
    description: string
    status: string
  }
  export type Output = void
}
