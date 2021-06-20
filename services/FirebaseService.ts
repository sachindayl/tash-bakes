import { NuxtFireInstance } from '@nuxtjs/firebase'
import { ImageDataModel } from '~/data/models/ImageDataModel'
import { PriceDataModel } from '~/data/models/priceDataModel'
import { TestimonialModel } from '~/data/models/TestimonialModel'
import { SeasonalDataModel } from '~/data/models/SeasonalDataModel'

export class FirebaseService {
  private nuxtFire: NuxtFireInstance

  constructor(nuxtFire: NuxtFireInstance) {
    this.nuxtFire = nuxtFire
  }

  public async retrieveImageInfo(
    collection: string
  ): Promise<ImageDataModel[]> {
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

  public async retrieveImageUrl(
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

  public async retrieveTestimonials() {
    try {
      let querySnapshot = await this.nuxtFire.firestore
        .collection('testimonials')
        .get({ source: 'cache' })
      querySnapshot = querySnapshot.empty
        ? await this.nuxtFire.firestore
          .collection('testimonials')
          .get({ source: 'default' })
        : querySnapshot

      let testimonialList: TestimonialModel[] = []
      querySnapshot.forEach((doc) => {
        testimonialList.push(
          new TestimonialModel(
            doc.data().name,
            doc.data().image,
            doc.data().message
          )
        )
      })
      return testimonialList
    } catch (e) {
      console.log(JSON.stringify(e))
      return Promise.reject(e)
    }
  }

  public async retrieveSeasonalProductsInfo() {
    try {
      let querySnapshot = await this.nuxtFire.firestore
        .collection('seasonal')
        .where('isVisible', '==', true)
        .get({ source: 'cache' })
      querySnapshot = querySnapshot.empty
        ? await this.nuxtFire.firestore
          .collection('seasonal')
          .where('isVisible', '==', true)
          .get({ source: 'default' })
        : querySnapshot

      let seasonalList: SeasonalDataModel[] = []
      querySnapshot.forEach((doc) => {
        seasonalList.push(
          new SeasonalDataModel(
            doc.data().name,
            doc.data().caption,
            doc.data().price,
            doc.data().isVisible,
            doc.data().image,
            doc.data().type,
            doc.data().colour ?? '#FFFFFF',
            doc.data().colour2 ?? '#FFFFFF'
          )
        )
      })
      return seasonalList
    } catch (e) {
      console.log(JSON.stringify(e))
      return Promise.reject(e)
    }
  }
}
