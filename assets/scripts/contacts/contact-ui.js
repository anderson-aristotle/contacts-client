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

const onUpdateSuccess = (event) => {
  $('#update-contact-message').addClass('show')
  setTimeout(() => {
    $('#update-contact-message').removeClass('show')
  }, 2000)
  $('form').trigger('reset')
}

const onUpdateFailure = () => {
  $('#failure-contact-message').addClass('show')
  setTimeout(() => {
    $('#failure-contact-message').removeClass('show')
  }, 2000)
  $('form').trigger('reset')
}

const onDeleteContactFailure = id => {
  $(`#deleteable-${id}-user-message`).html('this is not deleteable')
}

module.exports = {
  createContactSuccess,
  getContactsSuccess,
  onUpdateSuccess,
  onUpdateFailure,
  onDeleteContactFailure
}
