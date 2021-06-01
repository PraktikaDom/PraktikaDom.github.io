async function getResponse(){
   	let response = await fetch('https://alexmarchukprod.com.ua/student?id=1')
   	let content = await response.json()
   	console.log(content.email)	
	$('.pupil-text__email').text(content.email)  
   }
   //getResponse();
$(document).ready(function() {
   $(".logo").click(function(){
        window.location.href = '../index.html';
    }); 

   $(".pupil-link").click(function(){
        window.location.href = 'group_item.html';
    });

   $(".teacher-link").click(function(){
        window.location.href = 'teachers.html';
    });
 	
   //$.get('https://alexmarchukprod.com.ua/student/?id=1', function(data) {
   //		data.forEach((item) => {
   //			const output = `<li">${item.interests}</li>`
   //			console.log(output);
   //			$('.pupil-text__interests').appendChild(output);
   //		});
   //});

   


});	