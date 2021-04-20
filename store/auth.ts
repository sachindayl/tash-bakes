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
  userState = ''
  claims: any

  get authUser() {
    return this.userState;
  }

  @Mutation
  public setUser(authUser: string) {
      this.userState = authUser
  }

  @Action
  async updateUser(authUser: string) {
    await this.context.commit('setUser', authUser)
  }


}

export default Auth;
