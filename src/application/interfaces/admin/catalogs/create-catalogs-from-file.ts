// Use case based on '@application/interfaces/use-case'

import { UseCase } from '@application/interfaces/use-case'

export interface ICreateCatalogsFromFile extends UseCase<ICreateCatalogsFromFile.Input, ICreateCatalogsFromFile.Output> {
  execute: (input: ICreateCatalogsFromFile.Input) => Promise<ICreateCatalogsFromFile.Output>
}

export namespace ICreateCatalogsFromFile {
  export interface Input { file: File }
  export type Output = void
}
