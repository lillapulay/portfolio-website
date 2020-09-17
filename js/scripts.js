$(document).ready(function () { // Ready: because we load the file in the head tag
  $("#submit").click(function (event) { // Targets the button and makes it listen to a click event    

    //Defining variables (fields)
    var firstName = $("#contact-fname").val()
    var lastName = $("#contact-lname").val()
    var email = $("#contact-email").val()
    var message = $("#contact-message").val()
    var statusElm = $('.status')
    statusElm.empty() // Empties the 'status' field upon loading the document

    if (!(firstName.length >= 1 && firstName.length < 21)) { // firstName has to be 1-20 characters
      event.preventDefault()
      statusElm.append('<div>First name has to be 1-20 characters.</div>')
    }

    if (!(lastName.length >= 1 && lastName.length < 21)) { // lastName has to be 1-20 characters
      event.preventDefault()
      statusElm.append('<div>Last name has to be 1-20 characters.</div>')
    }

    if (!(email.length > 5 && email.includes('@') && email.includes('.'))) { // Email has to be 5+ chars, include @ and .
      event.preventDefault()
      statusElm.append('<div>Please enter a valid email address.</div>')
    }

    if (!(message.length >= 10 && message.length < 501)) { // Message has to be 10-500 characters
      event.preventDefault()
      statusElm.append('<div>Message has to be 10-500 characters.</div>'
        +
        '<div>(Currently: ' + message.length + ')</div>')
    }
  })
})