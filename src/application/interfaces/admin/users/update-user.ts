// Use case based on '@application/interfaces/use-case'

import { UseCase } from '@application/interfaces/use-case'

export interface IUpdateUser extends UseCase<IUpdateUser.Input, IUpdateUser.Output> {
  execute: (input: IUpdateUser.Input) => Promise<IUpdateUser.Output>
}

export namespace IUpdateUser {
  export interface Input { }
  export type Output = void

}
