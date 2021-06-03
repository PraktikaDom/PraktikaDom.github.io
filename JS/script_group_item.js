$(document).ready(function() {
   $(".logo").click(function(){
        window.location.href = '../index.html';
    }); 

   $(".pupil-link").click(function(){
        window.location.href = 'group_item.html';
    });
  x = prompt();
  async function getResponsePupil(user_id){
      let response = await fetch(`https://alexmarchukprod.com.ua/student?id=${user_id}`);
      let content = await response.json(); 
      let list_achivement = document.querySelector('.pupil-text__achivement');
      $('#group_caption').text(content.birthday)
  }
  getResponsePupil(x);

});