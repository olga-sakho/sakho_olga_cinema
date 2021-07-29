$.getJSON('../public/js/seat', function(data) {
    console.log(data);
var seats = [
	{
		"number":7,
		"row":1,
		"busy":true
	},
	{
		"number":6,
		"row":1,
		"busy":true
	},
	{
		"number":5,
		"row":1,
		"busy":true
	},
	{
		"number":4,
		"row":1,
		"busy":true
	},
	{
		"number":3,
		"row":1,
		"busy":true
	},
	{
		"number":2,
		"row":1,
		"busy":true
	},
	{
		"number":1,
		"row":1,
		"busy":true
	},
	{
		"number":7,
		"row":2,
		"busy":true
	},
	{
		"number":6,
		"row":2,
		"busy":true
	},
	{
		"number":5,
		"row":2,
		"busy":true
	},
	{
		"number":4,
		"row":2,
		"busy":true
	},
	{
		"number":3,
		"row":2,
		"busy":true
	},
	{
		"number":2,
		"row":2,
		"busy":true
	},
	{
		"number":1,
		"row":2,
		"busy":true
	},
	{
		"number":7,
		"row":3,
		"busy":false
	},
	{
		"number":6,
		"row":3,
		"busy":false
	},
	{
		"number":5,
		"row":3,
		"busy":false
	},
	{
		"number":4,
		"row":3,
		"busy":false
	},
	{
		"number":3,
		"row":3,
		"busy":false
	},
	{
		"number":2,
		"row":3,
		"busy":false
	},
	{
		"number":1,
		"row":3,
		"busy":false
	},
	{
		"number":7,
		"row":4,
		"busy":true
	},
	{
		"number":6,
		"row":4,
		"busy":true
	},
	{
		"number":5,
		"row":4,
		"busy":true
	},
	{
		"number":4,
		"row":4,
		"busy":true
	},
	{
		"number":3,
		"row":4,
		"busy":true
	},
	{
		"number":2,
		"row":4,
		"busy":true
	},
	{
		"number":1,
		"row":4,
		"busy":true
	},
	{
		"number":7,
		"row":5,
		"busy":true
	},
	{
		"number":6,
		"row":5,
		"busy":true
	},
	{
		"number":5,
		"row":5,
		"busy":true
	},
	{
		"number":4,
		"row":5,
		"busy":true
	},
	{
		"number":3,
		"row":5,
		"busy":true
	},
	{
		"number":2,
		"row":5,
		"busy":false
	},
	{
		"number":1,
		"row":5,
		"busy":true
	},
	{
		"number":7,
		"row":6,
		"busy":true
	},
	{
		"number":6,
		"row":6,
		"busy":true
	},
	{
		"number":5,
		"row":6,
		"busy":true
	},
	{
		"number":4,
		"row":6,
		"busy":true
	},
	{
		"number":3,
		"row":6,
		"busy":true
	},
	{
		"number":2,
		"row":6,
		"busy":true
	},
	{
		"number":1,
		"row":6,
		"busy":true
	}
]




$( document ).ready(function() {
    console.log( "ready!" );

	$.each(seats, function(index,value)  {
	 	var seatDiv = document.createElement('div')
	 	$(seatDiv).addClass('seat').html('<p> number: ' + value['number'] + '<br> ' + 'row: '  + value['row'] + '<br> ' + '<button class = "add">' + 'Выбрать' + '</button>' + '<br> ' + '<button class = "remove">' + 'Отменить' + '</button>' +'</p>')
	  	$(seatDiv).appendTo($('.row'))
	  	if(value['busy'] === true){
						$(seatDiv).on('click', function(){
		    			$(this).find('p').toggle();
		    		})
		    			$('.add').on('click', function(){
				    		$(this).parents('.seat').addClass('selected')	
	    				})
	    				$('.remove').on('click', function(){
				    		$(this).parents('.seat').removeClass('occupied')
				    		$(this).parents('.seat').removeClass('selected')
	    				})
	    				/*var bookedSeat = []
	    				console.log($('.selected'))
	    				bookedSeat.push(($('.selected')))*/
	    			
	    }
	    		else{
	    			$(seatDiv).addClass('occupied')
	    		}
	    		
	
		var btnDiv = document.createElement('div')
		var bookButton = document.createElement('button')
		$(btnDiv).addClass('divBtn')
		$(bookButton).addClass('bookBtn')
		$(btnDiv).appendTo('body')
		$(bookButton).appendTo(btnDiv)
		$(bookButton).text('Забронировать')

		$('.bookBtn').on('click', function(){
  		$('.selected').addClass('occupied')	
  		var seatBook = $('.seat.selected.occupied')
				console.log(seatBook)
		})
		

	})

 

})
})
   
  /*for (var i = 0; i<seats.length; i++ ){
	 var seat = seats[i]; 
		if(seat.row ===1){
		  	var rowDiv1 = $('div.row1')
		  	var seatDiv1 = document.createElement('div')
		  	$(seatDiv1).addClass('seat1').html('<p> number: ' + seat.number + '<br> ' + 'row: '  + seat.row + '<br> ' + '<button class = "add">' + 'Забронировать' + '</button>' + '<br> ' + '<button class = "remove">' + 'Отменить' + '</button>' +'</p>')
				var btnAdd = document.createElement('button')
				$(seatDiv1).appendTo($('.row1'))
				if(seat.busy === true){
					$(seatDiv1).on('click', function(){
	    			$(this).find('p').toggle();
	    			$('.add').on('click', function(){
			    		$(this).parents('.seat1').addClass('selected')
			    			console.log($('.selected').text())
    				})
    				$('.remove').on('click', function(){
			    		$(this).parents('.seat1').removeClass('selected')
    				})
    			})
    		}
    		else{
    			$(seatDiv1).addClass('occupied')
    		}
    		
		}	

		if(seat.row ===2){
		  	var rowDiv2 = $('div.row2')
		  	var seatDiv2 = document.createElement('div')
				$(seatDiv2).addClass('seat2').html('<p> number: ' + seat.number + '<br> ' + 'row: '  + seat.row + '<br> '  + '<button class = "add">' + 'Забронировать' + '</button>' + '<br> ' + '<button class = "remove">' + 'Отменить' + '</button>' + '</p>')
				$(seatDiv2).appendTo($(rowDiv2))
					if(seat.busy === true){
						$(seatDiv2).on('click', function(){
	    				$(this).find('p').toggle();
		    				$('.add').on('click', function(){
				    			$(this).parents('.seat2').addClass('selected')
	    					})
    						$('.remove').on('click', function(){
			    				$(this).parents('.seat2').removeClass('selected')
    						})
    				})
					}
					else{
    			$(seatDiv2).addClass('occupied')
    		}
				
		}
		if(seat.row ===3){
		  	var rowDiv3 = $('div.row3')
		  	var seatDiv3 = document.createElement('div')
				$(seatDiv3).addClass('seat3').html('<p> number: ' + seat.number + '<br> ' + 'row: '  + seat.row + '<br> '  + '<button class = "add">' + 'Забронировать' + '</button>' + '<br> ' + '<button class = "remove">' + 'Отменить' + '</button>' + '</p>')
				$(seatDiv3).appendTo($(rowDiv3))
					if(seat.busy === true){
						$(seatDiv3).on('click', function(){
	    				$(this).find('p').toggle();
		    				$('.add').on('click', function(){
					    		$(this).parents('.seat3').addClass('selected')
		    				})
	    					$('.remove').on('click', function(){
				    			$(this).parents('.seat3').removeClass('selected')
	    					})
    				})
					}
					else{
    			$(seatDiv3).addClass('occupied')
    		}
				
		}
		if(seat.row ===4){
		  	var rowDiv4 = $('div.row4')
		  	var seatDiv4 = document.createElement('div')
				$(seatDiv4).addClass('seat4').html('<p> number: ' + seat.number + '<br> ' + 'row: '  + seat.row + '<br> '  + '<button class = "add">' + 'Забронировать' + '</button>' + '<br> ' + '<button class = "remove">' + 'Отменить' + '</button>' + '</p>')
				$(seatDiv4).appendTo($(rowDiv4))
					if(seat.busy === true){
						$(seatDiv4).on('click', function(){	   
	    				$(this).find('p').toggle();
	    					$('.add').on('click', function(){
				    			$(this).parents('.seat4').addClass('selected')
	    					})
    						$('.remove').on('click', function(){
			    				$(this).parents('.seat4').removeClass('selected')
    						})
    				})
					}
					else{
    			$(seatDiv4).addClass('occupied')
    		}
		}
		if(seat.row ===5){
		  	var rowDiv5 = $('div.row5')
		  	var seatDiv5 = document.createElement('div')
				$(seatDiv5).addClass('seat5').html('<p> number: ' + seat.number + '<br> ' + 'row: '  + seat.row + '<br> ' + '<button class = "add">' + 'Забронировать' + '</button>' + '<br> ' + '<button class = "remove">' + 'Отменить' + '</button>' + '</p>')
				$(seatDiv5).appendTo($(rowDiv5))
					if(seat.busy === true){
						$(seatDiv5).on('click', function(){
	    				$(this).find('p').toggle();
	    					$('.add').on('click', function(){
				    			$(this).parents('.seat5').addClass('selected')
	    					})
    						$('.remove').on('click', function(){
			    				$(this).parents('.seat5').removeClass('selected')
    						})
    				})
					}
					else{
    			$(seatDiv5).addClass('occupied')
    		}
		}
		if(seat.row ===6){
		  	var rowDiv6 = $('div.row6')
		  	var seatDiv6 = document.createElement('div')
				$(seatDiv6).addClass('seat6').html('<p> number: ' + seat.number + '<br> ' + 'row: '  + seat.row + '<br> '  + '<button class = "add">' + 'Забронировать' + '</button>' + '<br> ' + '<button class = "remove">' + 'Отменить' + '</button>' + '</p>')
				$(seatDiv6).appendTo($(rowDiv6))
					if(seat.busy === true){
							$(seatDiv6).on('click', function(){
	    					$(this).find('p').toggle();
	    						$('.add').on('click', function(){
				    				$(this).parents('.seat6').addClass('selected')
	    						})
    							$('.remove').on('click', function(){
			    					$(this).parents('.seat6').removeClass('selected')
    							})
    					})
    			}
    			else{
    			$(seatDiv6).addClass('occupied')
    			}
    	}

	}*/

		
	
  

	
	  
	
