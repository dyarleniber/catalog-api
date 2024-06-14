// Use case based on '@application/interfaces/use-case'

import { UseCase } from '@application/interfaces/use-case'

export interface IGetCatalogs extends UseCase<IGetCatalogs.Input, IGetCatalogs.Output> {
  execute: (input: IGetCatalogs.Input) => Promise<IGetCatalogs.Output>
}

export namespace IGetCatalogs {
  export interface Input { }
  export type Output = void
}
