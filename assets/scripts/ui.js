'use strict'
// const store = require('../store.js')

const onSignUpSuccess = () => {
  $('#sign-up-auth-alert-success').addClass('show')
}

const onSignUpFailure = () => {
  $('#sign-up-auth-alert-failure').addClass('show')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure
}
