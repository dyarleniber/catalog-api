// Use case based on '@application/interfaces/use-case'

import { UseCase } from '@application/interfaces/use-case'

export interface IGetCatalog extends UseCase<IGetCatalog.Input, IGetCatalog.Output> {
  execute: (input: IGetCatalog.Input) => Promise<IGetCatalog.Output>
}

export namespace IGetCatalog {
  export interface Input { catalogId: string }
  export type Output = void
}
