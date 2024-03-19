import {createActionGroup, emptyProps, props} from '@ngrx/store'
import {RegisterRequestInterface} from '../types/registerRequest.interface'
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface'

export const authActions = createActionGroup({
    source: 'auth',
    events: {
        Register: props<{request: RegisterRequestInterface}>(),
        'Register success': props<{currentUser: CurrentUserInterface}>(),
        'Register failure': emptyProps(),
    },
})

authActions.registerSuccess
// export const register = createAction(
//     '[Auth] Register',
//     props<{request: RegisterRequestInterface}>()
// )
// export const registerSuccess = createAction(
//     '[Auth] Register Success',
//     props<{request: RegisterRequestInterface}>()
// )
// export const registerFailure = createAction(
//     '[Auth] RegisterFailure',
//     props<{request: RegisterRequestInterface}>()
// )
