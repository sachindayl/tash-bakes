import { NuxtFireInstance } from '@nuxtjs/firebase'

export class FirebaseService {
  private nuxtFire: NuxtFireInstance

  constructor(nuxtFire: NuxtFireInstance) {
    this.nuxtFire = nuxtFire
  }

  public async retrieveImage(
    folderName: string,
    imageName: string
  ): Promise<string> {
    // if (process.env.environ === 'development') {
    //   return ''
    // }
    const url = await this.nuxtFire.storage
      .ref(folderName)
      .child(imageName)
      .getDownloadURL()
    return url as string
  }
}
