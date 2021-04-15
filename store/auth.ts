import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'

export interface AuthUserI {
  uid: string
  email: string
}

@Module({
  name: 'auth',
  stateFactory: true,
  namespaced: true,
})
class Auth extends VuexModule {
  userState: AuthUserI = { uid: '', email: '' }
  claims: any

  get authUser() {
    return this.userState;
  }

  @Mutation
  ON_AUTH_STATE_CHANGED_MUTATION(authUser: any, claims: any) {
    if (authUser) {
      this.userState = authUser
      this.claims = claims
    } else {
      //logout
    }
  }

  @Action
  async onAuthStateChangedAction(authUser: any, claims: any) {
    if (authUser) {
      this.ON_AUTH_STATE_CHANGED_MUTATION(authUser, claims)
    } else {
      //logout
    }
  }


}
