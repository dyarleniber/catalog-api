// Use case based on '@application/interfaces/use-case'

import { UseCase } from '@application/interfaces/use-case'

export interface IUpdateRetailer extends UseCase<IUpdateRetailer.Input, IUpdateRetailer.Output> {
  execute: (input: IUpdateRetailer.Input) => Promise<IUpdateRetailer.Output>
}

export namespace IUpdateRetailer {
  export interface Input {
    id: string
    name: string
    description: string
    status: string
  }
  export type Output = void
}
