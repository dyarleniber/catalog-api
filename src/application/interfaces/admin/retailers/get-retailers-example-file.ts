// Use case based on '@application/interfaces/use-case'

import { UseCase } from '@application/interfaces/use-case'

export interface IGetRetailersExampleFile extends UseCase<IGetRetailersExampleFile.Input, IGetRetailersExampleFile.Output> {
    execute: (input: IGetRetailersExampleFile.Input) => Promise<IGetRetailersExampleFile.Output>
}

export namespace IGetRetailersExampleFile {
    export interface Input { }
    export type Output = void

}

