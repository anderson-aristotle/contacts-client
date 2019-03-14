'use strict'

const showContactsTemplate = require('../templates/contacts-listing.handlebars')

const createContactSuccess = (data) => {
  $('form').trigger('reset')
  $('#create-contact-message').text('Contact created!')
}

const onUpdateSuccess = (data) => {
  console.log(data)
  $('form').trigger('reset')
  $('#create-contact-message').text('Contact created!')
}
const getContactsSuccess = (data) => {
  console.log(data)
  const showContactsHtml = showContactsTemplate({ contacts: data.contacts })
  $('.content').html(showContactsHtml)
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
