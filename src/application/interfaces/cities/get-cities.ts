// Use case based on '@application/interfaces/use-case'

import { UseCase } from '@application/interfaces/use-case'

export interface IGetCities extends UseCase<IGetCities.Input, IGetCities.Output> {
  execute: (input: IGetCities.Input) => Promise<IGetCities.Output>
}

export namespace IGetCities {
  export interface Input { }
  export type Output = void
}
