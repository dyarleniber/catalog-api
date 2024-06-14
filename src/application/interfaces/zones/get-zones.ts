// Use case based on '@application/interfaces/use-case'

import { UseCase } from '@application/interfaces/use-case'

export interface IGetZones extends UseCase<IGetZones.Input, IGetZones.Output> {
  execute: (input: IGetZones.Input) => Promise<IGetZones.Output>
}

export namespace IGetZones {
  export interface Input { }
  export type Output = void
}
