const api = require('./contact-api.js')
const ui = require('./contact-ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onCreateContact = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.createContact(formData)
    .then(ui.createContactSuccess)
    .catch(ui.failure)
}

const onUpdateContact = (event) => {
  event.preventDefault()
  const contact = getFormFields(event.target)
  api.updateContact(contact)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

const onGetContacts = (event) => {
  event.preventDefault()
  api.getContacts()
    .then(ui.getContactsSuccess)
    .catch(ui.failure)
}

const onDeleteContact = (event) => {
  event.preventDefault()
  const contactId = $(event.target).closest('div').data('id')
  api.deleteContact(contactId)
    .then(() => onGetContacts(event))
    .catch(ui.onDeleteContactFailure(contactId))
}
const contactHandlers = () => {
  $('#get-contacts').on('click', onGetContacts)
  $('#update-contact').on('submit', onUpdateContact)
  $('#contacts-create').on('submit', onCreateContact)
  $('.content').on('click', '.delete-contact', onDeleteContact)
}

module.exports = {
  contactHandlers,
  onCreateContact,
  onUpdateContact,
  onDeleteContact
}
