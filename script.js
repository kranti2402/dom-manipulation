/* Task 1 */


/* Task 2 using plain JavaScript */



/* Task 4 using jQuery */
   //Task4a
   $('#addText4').click(function(event){
       var paragraph = $('<p>').text('Hello World')
       $('#task4a').append(paragraph)
   })
   
   //Task 4b
   function changeBG(event){
       var color = event.target.innerText.toLowerCase();
       $('body').css('background-color',color)
   }