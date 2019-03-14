'use strict'

const config = require('../config')
const store = require('../store.js')

const createContact = function (data) {
  return $.ajax({
    url: config.apiUrl + '/contacts',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const getContacts = function () {
  return $.ajax({
    url: config.apiUrl + '/contacts',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateContact = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/contacts/' + formData.contact.id,
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteContact = (contactId) => {
  return $.ajax({
    url: config.apiUrl + '/contacts/' + contactId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createContact,
  getContacts,
  updateContact,
  deleteContact
}
