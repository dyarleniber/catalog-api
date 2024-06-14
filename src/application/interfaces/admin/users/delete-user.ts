// Use case based on '@application/interfaces/use-case'

import { UseCase } from '@application/interfaces/use-case'

export interface IDeleteUser extends UseCase<IDeleteUser.Input, IDeleteUser.Output> {
  execute: (input: IDeleteUser.Input) => Promise<IDeleteUser.Output>
}

export namespace IDeleteUser {
  export interface Input {
    id: string
  }
  export type Output = void
}
