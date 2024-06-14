// Use case based on '@application/interfaces/use-case'

import { UseCase } from '@application/interfaces/use-case'

export interface IDeleteRetailer extends UseCase<IDeleteRetailer.Input, IDeleteRetailer.Output> {
  execute: (input: IDeleteRetailer.Input) => Promise<IDeleteRetailer.Output>
}

export namespace IDeleteRetailer {
  export interface Input {
    id: string
  }
  export type Output = void
}
