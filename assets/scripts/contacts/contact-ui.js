'use strict'

const showContactsTemplate = require('../templates/contacts-listing.handlebars')

const getContactsSuccess = (responseData) => {
  const showContactsHtml = showContactsTemplate({ contacts: responseData.contacts })
  $('.content').html(showContactsHtml)
  $('.user-feedback').text('Click "Get Contacts Button" to see new contact.')
  setTimeout(() => {
    $('.user-feedback').hide()
  }, 2000)
}

const createContactSuccess = (responseData) => {
  $('#create-contact-message').addClass('show')
  setTimeout(() => {
    $('#create-contact-message').removeClass('show')
  }, 2000)
  $('form').trigger('reset')
}

const onUpdateContact = (event) => {
  $('update-form').on('submit', () => {
    $('form').reset()
  })
  $('#update-contact-message').addClass('show')
  setTimeout(() => {
    $('update-contact-message').removeClass('show')
  }, 2000)
}

const onDeleteContact = (responseData) => {
  $('#delete-contacts-message').addClass('show')
  setTimeout(() => {
    $('#delete-contacts-message').removeClass('show')
  }, 2000)
  $('form').trigger('reset')
}

const onDeleteContactFailure = id => {
  $(`#deleteable-${id}-user-message`).html('this is not deleteable')
}

module.exports = {
  createContactSuccess,
  getContactsSuccess,
  onDeleteContact,
  onUpdateContact,
  onDeleteContactFailure
}
