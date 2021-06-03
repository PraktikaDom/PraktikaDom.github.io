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
      let pht=`url("${content.photo}")`;
      let key;
      let list_school = document.querySelector('.pupil-text_ul-school');
      let list_interests = document.querySelector('.pupil-text__interests');
      let list_achivement = document.querySelector('.pupil-text__achivement');
      $('.pupil-photo').css('background-image', pht)
      $('.pupil-id_name').text(content.surname + " "+content.name+" " +content.patronymic);   
      $('.pupil-text__data').text(content.birthday);
      $('.pupil-text__email').text(content.email);
      $('.pupil-text__subject').text(content.favoriteSubject);
      $('.pupil-text__description').text(content.description);
      if (content.olympicReserve==null || content.olympicReserve.length==0) list_school.innerHTML+=`<li>Не відвідую ШОР</li>`;
      for (key in content.olympicReserve) list_school.innerHTML+=`<li>${content.olympicReserve[key]}</li>`;
      for (key in content.interests) list_interests.innerHTML+=`<li>${content.interests[key]}</li>`;
      if (content.achievements==null || content.achievements.length==0) list_achivement.innerHTML+=`<li>Немаю великих досягнень</li>`;
      else for (key in content.achievements) list_achivement.innerHTML+=`<li>${content.achievements[key]}</li>`;
  }
  getResponsePupil(x);

});	