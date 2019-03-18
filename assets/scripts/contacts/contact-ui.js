'use strict'

const showContactsTemplate = require('../templates/contacts-listing.handlebars')

const createContactSuccess = (responseData) => {
  $('#create-contact-container').addClass('show')
  setTimeout(() => {
    $('#create-contact-container').hide()
  }, 2000)
  $('form').trigger('reset')
}

const onUpdateSuccess = (responseData) => {
  $('#update-contact-container').addClass('show')
  setTimeout(() => {
    $('#update-contact-container').hide()
  }, 2000)
  $('form').trigger('reset')
}
const getContactsSuccess = (responseData) => {
  const showContactsHtml = showContactsTemplate({ contacts: responseData.contacts })
  $('.content').html(showContactsHtml)
  $('.user-feedback').text('Click "Get Contacts Button" to see new contact.')
  setTimeout(() => {
    $('.user-feedback').hide()
  }, 2000)
}

module.exports = {
  createContactSuccess,
  getContactsSuccess,
  onUpdateSuccess
}
