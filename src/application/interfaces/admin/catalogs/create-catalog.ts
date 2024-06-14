import { UseCase } from '@application/interfaces/use-case'

export interface ICreateCatalog extends UseCase<ICreateCatalog.Input, ICreateCatalog.Output> {
  execute: (input: ICreateCatalog.Input) => Promise<ICreateCatalog.Output>
}

export namespace ICreateCatalog {
  export interface Input { catalogId: string }
  export type Output = void
}
