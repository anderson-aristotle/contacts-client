'use strict'

const showContactsTemplate = require('../templates/contacts-listing.handlebars')

const createContactSuccess = (data) => {
  // $('form').trigger('reset')
  $('#create-contact-message').text('Contact created!')
  // setTimeout(() => { $('#create-contact-message').hide() }, 2000)
}

const onUpdateSuccess = (data) => {
  console.log(data)
  // $('form').trigger('reset')
  $('#create-contact-message').text('Contact created!')
}
const getContactsSuccess = (data) => {
  const showContactsHtml = showContactsTemplate({ contacts: data.contacts })
  $('.content').html(showContactsHtml)
  $('#create-contact-message').text('Contact created!')
  // setTimeout(() => { $('#create-contact-message').hide() }, 2000)
}

const failure = (error) => {
  console.log(error)
}

module.exports = {
  createContactSuccess,
  getContactsSuccess,
  onUpdateSuccess,
  failure
}
