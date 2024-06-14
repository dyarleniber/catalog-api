// Use case based on '@application/interfaces/use-case'

import { UseCase } from '@application/interfaces/use-case'

export interface IUpdateCatalogStatus extends UseCase<IUpdateCatalogStatus.Input, IUpdateCatalogStatus.Output> {
  execute: (input: IUpdateCatalogStatus.Input) => Promise<IUpdateCatalogStatus.Output>
}

export namespace IUpdateCatalogStatus {
  export interface Input { id: string, status: string }
  export type Output = void
}
