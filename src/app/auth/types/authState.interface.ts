import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface'
import {BackendErrorsInterface} from './../../shared/types/backendErrors.interface'

export interface AuthStateInterface {
    isSubmitting: boolean
    currentUser: CurrentUserInterface | null | undefined
    isLoading: boolean
    validationErrors: BackendErrorsInterface | null
}
