'use strict'
const store = require('./store.js')

const onSignUpSuccess = () => {
  $('#sign-up-auth-alert-success').addClass('show')
  setTimeout(() => { $('#sign-up-auth-alert-success').removeClass('show') }, 3000)
  setTimeout(() => { $('#sign-up-form').hide() }, 2000)
  setTimeout(() => { $('#sign-in-form').show('click') }, 4000)
}

const onSignUpFailure = () => {
  $('#sign-up-auth-alert-failure').addClass('show')
  setTimeout(() => { $('#sign-up-auth-alert-failure').removeClass('show') }, 3000)
}

const onSignInSuccess = (data) => {
  store.user = data.user
  $('#sign-in-auth-alert-success').addClass('show')
  setTimeout(() => { $('#sign-in-auth-alert-success').removeClass('show') }, 3000)
  setTimeout(() => { $('#sign-in-form').hide() }, 2000)
  setTimeout(() => { $('#sign') })
}

const onSignInFailure = () => {
  $('#sign-in-auth-alert-failure').addClass('show')
  setTimeout(() => { $('#sign-in-auth-alert-failure').removeClass('show') }, 3000)
}

const onChangePasswordSuccess = () => {
  $('#change-password-auth-alert-success').addClass('show')
  setTimeout(() => { $('#change-password-auth-alert-success').removeClass('show') }, 3000)
  setTimeout(() => { $('#change-password-form').hide() }, 2000)
}

const onChangePasswordFailure = () => {
  $('#change-password-auth-alert-failure').addClass('show')
  setTimeout(() => { $('#sign-in-auth-alert-failure').removeClass('show') }, 3000)
}

const onSignOutSuccess = () => {
  $('#sign-out-auth-alert-success').text()
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
