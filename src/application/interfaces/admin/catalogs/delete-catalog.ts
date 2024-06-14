import { UseCase } from '@application/interfaces/use-case'

export interface IDeleteCatalog extends UseCase<IDeleteCatalog.Input, IDeleteCatalog.Output> {
  execute: (input: IDeleteCatalog.Input) => Promise<IDeleteCatalog.Output>
}

export namespace IDeleteCatalog {
  export interface Input { catalogId: string }
  export type Output = void
}
