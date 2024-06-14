// Use case based on '@application/interfaces/use-case'

import { UseCase } from '@application/interfaces/use-case'

export interface ICreateRetailersFromFile extends UseCase<ICreateRetailersFromFile.Input, ICreateRetailersFromFile.Output> {
  execute: (input: ICreateRetailersFromFile.Input) => Promise<ICreateRetailersFromFile.Output>
}

export namespace ICreateRetailersFromFile {
  export interface Input {
    file: Express.Multer.File
  }
  export type Output = void
}
