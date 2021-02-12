import axios from 'axios'
import { MessageI } from '~/components/Contact.vue'

export class EmailService {
  async sendEmail(emailData: MessageI) {
    try {
      const formData = new FormData()
      formData.append('service_id', process.env.serviceId!)
      formData.append('template_id', process.env.templateId!)
      formData.append('user_id', process.env.userId!)
      formData.append('from_name', emailData.name)
      formData.append('client_email', emailData.email)
      formData.append('client_phone_number', emailData.phoneNumber)
      formData.append('message', emailData.message)
      return await axios.post(
        `https://api.emailjs.com/api/v1.0/email/send-form`,
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      )
    } catch (e) {
      return e
    }
  }
}
