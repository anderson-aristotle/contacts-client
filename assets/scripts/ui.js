'use strict'

const onSignUpSuccess = () => {
  $('#sign-up-auth-alert-success').addClass('show')
  setTimeout(() => {
      $('#sign-up-auth-alert-success').removeClass('show')
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
