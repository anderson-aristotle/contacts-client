'use strict'
const ui = require('./ui.js')
const api = require('./auth/api.js')
const getFormFields = require('../../lib/get-form-fields.js')

const onSignUp = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

module.exports = {
  onSignUp
}
