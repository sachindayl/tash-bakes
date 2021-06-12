import Vue from 'vue'
import VueFbCustomerChat from 'vue-fb-customer-chat'

Vue.use(VueFbCustomerChat, {
  page_id: 100264195282537, //  change 'null' to your Facebook Page ID,
  theme_color: '#ae737c', // theme color in HEX
  locale: 'en_US', // default 'en_US'
})
