import { NuxtFireInstance } from '@nuxtjs/firebase'
import { ImageDataModel } from '~/data/models/ImageDataModel'
import { PriceDataModel } from '~/data/models/priceDataModel'

export class FirebaseService {
  private nuxtFire: NuxtFireInstance

  constructor(nuxtFire: NuxtFireInstance) {
    this.nuxtFire = nuxtFire
  }

  public async retrieveImageInfo(collection: string): Promise<ImageDataModel[]> {
    try {
      let querySnapshot = await this.nuxtFire.firestore
        .collection(collection)
        .get({ source: 'cache' })
      querySnapshot = querySnapshot.empty
        ? await this.nuxtFire.firestore
            .collection(collection)
            .get({ source: 'default' })
        : querySnapshot

      let imageDataList: ImageDataModel[] = []
      querySnapshot.forEach((doc) => {
        imageDataList.push(
          new ImageDataModel(
            collection,
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
