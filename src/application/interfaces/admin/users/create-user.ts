// Use case based on '@application/interfaces/use-case'

import { UseCase } from '@application/interfaces/use-case'

export interface IGetCatalogsExampleFile extends UseCase<IGetCatalogsExampleFile.Input, IGetCatalogsExampleFile.Output> {
  execute: (input: IGetCatalogsExampleFile.Input) => Promise<IGetCatalogsExampleFile.Output>
}

export namespace IGetCatalogsExampleFile {
  export interface Input { }
  export type Output = void
}
