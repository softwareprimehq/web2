
$(document).ready(function () {
  
  $("#phone_code").val('Select').trigger('change');
  // Cache the target element
  var $countryValue = $('#select_value');
 
  // Get initial value
  $countryValue.text('Select');
 
  // Initialize Selectric and bind to 'change' event
  $('#phone_code').on('change', function() {
    val = $(this).val();
    if(val!='Select') {
      val = '+ ' + val;
      $("#phone_code option[value*='Select']").prop('disabled', true);
    }
    $countryValue.text(val);
    });
  
});