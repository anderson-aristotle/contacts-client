'use strict'
// const store = require('../store.js')

const onSignUpSuccess = () => {
  $('#sign-up-auth-alert-success').addClass('show')
  // $('#sign-up-container').hide()
}

const onSignUpFailure = () => {
  $('#sign-up-auth-alert-failure').addClass('show')
}

const onSignInSuccess = () => {
  $('#sign-in-auth-alert-success').addClass('show')
  $('#sign-up-form').hide()
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess
}
