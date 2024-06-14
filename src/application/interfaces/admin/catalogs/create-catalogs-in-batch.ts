// Use case based on '@application/interfaces/use-case'

import { UseCase } from '@application/interfaces/use-case'

export interface ICreateCatalogsInBatch extends UseCase<ICreateCatalogsInBatch.Input, ICreateCatalogsInBatch.Output> {
  execute: (input: ICreateCatalogsInBatch.Input) => Promise<ICreateCatalogsInBatch.Output>
}

export namespace ICreateCatalogsInBatch {
  export interface Input { catalogs: [] }
  export type Output = void
}
