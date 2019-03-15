'use strict'
const store = require('./store.js')

const onSignUpSuccess = () => {
  $('#sign-up-auth-alert-success').addClass('show')
  setTimeout(() => { $('#sign-up-auth-alert-success').removeClass('show') }, 3000)
  // setTimeout(() => { $('#sign-up-form').hide() }, 2000)
  // setTimeout(() => { $('#sign-in-form').show('click') }, 4000)
  $('form').trigger('reset')
}

const onSignUpFailure = () => {
  $('#sign-up-auth-alert-failure').addClass('show')
  setTimeout(() => { $('#sign-up-auth-alert-failure').removeClass('show') }, 3000)
  $('form').trigger('reset')
}

const onSignInSuccess = (data) => {
  store.user = data.user
  $('#sign-in-auth-alert-success').addClass('show')
  $('.post-login').show()
  $('.pre-login').hide()
  $('form').trigger('reset')
  // setTimeout(() => { $('#sign-in-auth-alert-success').removeClass('show') }, 3000)
  // setTimeout(() => { $('#sign-in-form').hide() }, 2000)
  // setTimeout(() => { $('#change-password-form').show() }, 3000)
  // setTimeout(() => { $('#sign-out-button').show() },  3000)
}

const onSignInFailure = () => {
  $('#sign-in-auth-alert-failure').addClass('show')
  $('form').trigger('reset')
  // setTimeout(() => { $('#sign-in-auth-alert-failure').removeClass('show') }, 3000)
}

const onChangePasswordSuccess = () => {
  console.log('onChangePasswordSuccess')
  $('#change-password-auth-alert-success').addClass('show')
  setTimeout(() => { $('#change-password-auth-alert-success').removeClass('show') }, 3000)
  $('form').trigger('reset')
  // setTimeout(() => { $('#change-password-form').hide() }, 2000)
}

const onChangePasswordFailure = () => {
  $('#change-password-auth-alert-failure').addClass('show')
  $('form').trigger('reset')
  // setTimeout(() => { $('#change-password-auth-alert-failure').removeClass('show') }, 3000)
}

const onSignOutSuccess = () => {
  console.log('onSignOutSuccess')
  $('#sign-out-auth-alert-success').text()
  $('.post-login').hide()
  $('.pre-login').show()
  $('form').trigger('reset')

  // $('#sign-in-form').show()
  // $('#sign-up-form').show()
  // $('#sign-out-container').hide()
  // $('#change-password-form').hide()
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess
}
