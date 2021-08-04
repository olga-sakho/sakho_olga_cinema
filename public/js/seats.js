$( document ).ready(function() {


$.getJSON("../js/orderSeat.json", function(seats) {
console.log(seats);

		var btnDiv = document.createElement('div')
		var bookButton = document.createElement('button')
			$(btnDiv).addClass('divBtn')
			$(bookButton).addClass('bookBtn')
			$(btnDiv).appendTo('body')
			$(bookButton).appendTo(btnDiv)
			$(bookButton).text('Забронировать')
var chooseSeat = []
var removeArr = []
	$.each(seats, function(index,value)  {
	 	var seatDiv = document.createElement('div')
	 	$(seatDiv).addClass('seat').html('<p> number: ' + value['number'] + '<br> ' + 'row: '  + value['row'] + '<br> ' +'</p>')
	  	$(seatDiv).appendTo($('.row'))
	  		if(value['busy'] == true){
						$(seatDiv).on('click', function(){
			    			$(this).find('p').toggle();
			    			$(this).addClass('selected')
			    			chooseSeat.push(value)
							console.log(chooseSeat)	

			    				$(seatDiv).on('click', function(){
					    			$(this).removeClass('selected')
					    			removeArr.push(value)
									console.log(removeArr)
					    		})
					    		
					    })
				
		    }
		    	else{
		    			$(seatDiv).addClass('occupied')
		    		}

	    		
	})

	$('.bookBtn').on('click', function(){
		 var orderSeat = chooseSeat.filter(x => !removeArr.includes(x));
				$('.seat.selected').addClass('occupied')
			$.each(orderSeat, function(index,value)  {
				$.each(seats, function(index1,value1) {
    				if(value['number'] == value1['number'] && value['row'] == value1['row']){
    						return value1['busy'] = false;
    				}

    			})
    				alert('Вы забронировали: ' + ' ' + 'Ряд: ' + value['row'] + ' ' + 'Место: ' + value['number'])
  			});

  	


  			axios.post('/list', seats)
			  .then(function (response) {
			    console.log(response);
			  })
			  .catch(function (error) {
			    console.log(error);
			  });
				console.log(seats)
			
	

		
		axios.get('/list', orderSeat)
		  .then(function (response) {
		    console.log(response);
		  })
		  .catch(function (error) {
		    console.log(error);
		  })
		  .then(function () {
		  });


	
	})



})

})
   
  