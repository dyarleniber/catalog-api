// Use case based on '@application/interfaces/use-case'

import { UseCase } from '@application/interfaces/use-case'

export interface IGetRetailers extends UseCase<IGetRetailers.Input, IGetRetailers.Output> {
  execute: (input: IGetRetailers.Input) => Promise<IGetRetailers.Output>
}

export namespace IGetRetailers {
  export interface Input { }
  export type Output = void
}
