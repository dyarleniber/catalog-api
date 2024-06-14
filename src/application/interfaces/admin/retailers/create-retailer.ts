// Use case based on '@application/interfaces/use-case'

import { UseCase } from '@application/interfaces/use-case'

export interface ICreateRetailer extends UseCase<ICreateRetailer.Input, ICreateRetailer.Output> {
  execute: (input: ICreateRetailer.Input) => Promise<ICreateRetailer.Output>
}

export namespace ICreateRetailer {
  export interface Input {
    name: string
    url: string
    logo: string
    status: string
  }
  export type Output = void
}
