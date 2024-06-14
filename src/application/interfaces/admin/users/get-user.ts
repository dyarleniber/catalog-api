// Use case based on '@application/interfaces/use-case'

import { UseCase } from '@application/interfaces/use-case'

export interface IGetUser extends UseCase<IGetUser.Input, IGetUser.Output> {
  execute: (input: IGetUser.Input) => Promise<IGetUser.Output>
}

export namespace IGetUser {
  export interface Input { }
  export type Output = void
}
