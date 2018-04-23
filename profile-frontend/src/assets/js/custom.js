

// Open or close menu when click on customer icon
function onToggleCustomerMenu() {
  if ($('#customer-menu').hasClass('close')) {
    $('#customer-menu').removeClass('close')
  } else {
    $('#customer-menu').addClass('close')
  }
}
