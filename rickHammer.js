// Instructions: Rick Hammer is a carpenter who wants an application to compute the price of any desk a customer orders, based on the following: desk length and width in inches, type of wood, and number of drawers. The price is computed as follows:

// The charge for all desks is a minimum $200.
// If the surface (length * width) is over 750 square inches, add $50.
// If the wood is mahogany add $150; for oak, add $125. No charge is added for pine.
// For every drawer in the desk, there is an additional $30 charge.

// Design a flowchart or psuedocode for a program that accepts data for an order number, customer name, length, and width of the desk ordered, type of wood, and number of drawers. Display all the entered data and the final price for the desk.


$('#order').click(function(){
  
  var desk = $('#desk').val();
  var desklength = $('#desklength').val();
  var deskwidth = $('#deskwidth').val();
  var woodType = $('#woodType').val();
  var drawers = $('#drawers').val();

  var woodTypeName = "";

  let deskPrice = desk * 200;
  let deskSurface = desklength * deskwidth;

  if(deskSurface > 750){
    deskPrice = deskPrice + 50;
  }

  if(woodType == 1){
    deskPrice = deskPrice + 150;
    woodTypeName = "Mahogany";
  } else if(woodType == 2){
    deskPrice = deskPrice + 125;
    woodTypeName = "Oak";
  } else if(woodType == 3){
    deskPrice = deskPrice + 0;
    woodTypeName = "Pine";
  }

  // Added drawers to each desk
  var drawersToEachDesk = desk * drawers;

  var addedPriceToDrawers = drawersToEachDesk * 30;

  // console.log(addedPriceToDrawers);
  // console.log(deskPrice);

  var orderResult = deskPrice + addedPriceToDrawers;
  // console.log(orderResult);

  $('#orderResult').append(`<p>Desk: ${desk}</p>`);
  $('#orderResult').append(`<p>Desk length: ${desklength}</p>`);
  $('#orderResult').append(`<p>Desk width: ${deskwidth}</p>`);
  $('#orderResult').append(`<p>Wood type: ${woodTypeName}</p>`);
  $('#orderResult').append(`<p>Drawers: ${drawers}</p>`);
  $('#orderResult').append(`<p>Here is the total price for your order: ${orderResult}</p>`);


  $('#orderResult').append(`<p class="fs-5">Thank you!</p>`);

});


