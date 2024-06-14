// Use case based on '@application/interfaces/use-case'

import { UseCase } from '@application/interfaces/use-case'

export interface ICreateRetailersInBatch extends UseCase<ICreateRetailersInBatch.Input, ICreateRetailersInBatch.Output> {
  execute: (input: ICreateRetailersInBatch.Input) => Promise<ICreateRetailersInBatch.Output>
}

export namespace ICreateRetailersInBatch {
  export interface Input {
    file: Express.Multer.File
  }
  export type Output = void
}
