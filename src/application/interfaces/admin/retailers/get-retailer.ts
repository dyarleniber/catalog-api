// Use case based on '@application/interfaces/use-case'

import { UseCase } from '@application/interfaces/use-case'

export interface IGetRetailer extends UseCase<IGetRetailer.Input, IGetRetailer.Output> {
  execute: (input: IGetRetailer.Input) => Promise<IGetRetailer.Output>
}

export namespace IGetRetailer {
  export interface Input { }
  export type Output = void
}
