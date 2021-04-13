import { NuxtFireInstance } from '@nuxtjs/firebase'
import { ImageDataModel } from '~/data/models/ImageDataModel'
import { ImageDataI } from '~/data/interfaces/ImageDataI'
import { PriceDataModel } from '~/data/models/priceDataModel'

export class FirebaseService {
  private nuxtFire: NuxtFireInstance

  constructor(nuxtFire: NuxtFireInstance) {
    this.nuxtFire = nuxtFire
  }

  public async retrieveImageInfo(collection: string) {
    try {
      let querySnapshot = await this.nuxtFire.firestore
        .collection(collection)
        .get({ source: 'cache' })
      querySnapshot = querySnapshot.empty
        ? await this.nuxtFire.firestore
            .collection(collection)
            .get({ source: 'default' })
        : querySnapshot

      let imageDataList: ImageDataI[] = []
      querySnapshot.forEach((doc) => {
        imageDataList.push(
          new ImageDataModel(
            '',
            doc.data().name,
            doc.data().imageFilename,
            new PriceDataModel(doc.data().price.cake, doc.data().price.cupcake)
          )
        )
      })
      return imageDataList
    } catch (e) {
      console.log(JSON.stringify(e))
      return Promise.reject(e)
    }
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
