'use strict'
const store = require('../store.js')

const onSignUpSuccess = () => {
  $('#sign-up-auth-alert-success').addClass('show')
  setTimeout(() => {
    $('#sign-up-auth-alert-success').removeClass('show')
  }, 3000)
  $('form').trigger('reset')
  $('#sign-up-container').addClass('hide')
}

const onSignUpFailure = () => {
  $('#sign-up-auth-alert-failure').addClass('show')
  setTimeout(() => { $('#sign-up-auth-alert-failure').removeClass('show') }, 3000)
  $('form').trigger('reset')
}

const onSignInSuccess = (data) => {
  $('.post-login').show()
  $('.pre-login').hide()
  $('form').trigger('reset')
  store.user = data.user
  $('#sign-in-auth-alert-success').addClass('show')
  setTimeout(() => {
    $('#sign-in-auth-alert-success').removeClass('show')
  }, 3000)
  $('crud-contacts').show()
}

const onSignInFailure = () => {
  $('#sign-in-auth-alert-failure').addClass('show')
  setTimeout(() => { $('#sign-in-auth-alert-failure').removeClass('show') }, 3000)
  $('form').trigger('reset')
}

const onChangePasswordSuccess = () => {
  $('#change-password-auth-alert-success').addClass('show')
  setTimeout(() => { $('#change-password-auth-alert-success').removeClass('show') }, 3000)
  $('form').trigger('reset')
}

const onChangePasswordFailure = () => {
  $('#change-password-auth-alert-failure').addClass('show')
  setTimeout(() => { $('#change-password-auth-alert-failure').removeClass('show') }, 3000)
  $('form').trigger('reset')
}

const onSignOutSuccess = () => {
  $('#sign-out-auth-alert-success').text()
  $('.post-login').hide()
  $('.pre-login').show()
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

//
// const signInFailure = function () {
//   $('#message').text('Error on sign in')
//   $('#message').removeClass()
//   $('#message').addClass('failure')
//   $('form').trigger('reset')
// }
//
// const signOutSuccess = function () {
//   $('#message').text('Signed out successfully')
//   $('#message').removeClass()
//   $('#message').addClass('success')
//   $('form').trigger('reset')
//   $('#content').hide()
//   $('#change-password-form').hide()
//   $('#sign-out').hide()
//   $('#change-password').hide()
//   $('.recipe-forms').hide()
//   $('#auth-forms').show()
//   $('#sign-in').show()
//   $('#sign-up').show()
//   $('form').trigger('reset')
//   store.user = null
// }
//
// const signOutFailure = function () {
//   $('#message').text('Error on sign out')
//   $('#message').removeClass()
//   $('#message').addClass('failure')
//   $('form').trigger('reset')
// }
//
// const changePasswordSuccess = function () {
//   $('#message').text('Changed password successfully')
//   $('#message').removeClass()
//   $('#message').addClass('success')
//   $('form').trigger('reset')
// }
//
// const changePasswordFailure = function () {
//   $('#message').text('Error on change password')
//   $('#message').removeClass()
//   $('#message').addClass('failure')
//   $('form').trigger('reset')
// }
//
