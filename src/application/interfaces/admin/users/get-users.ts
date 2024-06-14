// Use case based on '@application/interfaces/use-case'

import { UseCase } from '@application/interfaces/use-case'

export interface IGetUsers extends UseCase<IGetUsers.Input, IGetUsers.Output> {
  execute: (input: IGetUsers.Input) => Promise<IGetUsers.Output>
}

export namespace IGetUsers {
  export interface Input { }
  export type Output = void

}
