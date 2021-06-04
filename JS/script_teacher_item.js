$(document).ready(function() {
   $(".logo").click(function(){
        window.location.href = '../index.html';
    }); 
   
   $(".teacher-link").click(function(){
        window.location.href = 'teachers.html';
    });
 	  function getURIParam(href, key, def) {
      if (arguments.length == 2) def = null;
          var qs = href.substring(href.indexOf('?') + 1);
          var s = qs.split('&');
      for (var k in s) {
          var s2 = s[k].split('=');
          if (s2[0] == key)
              return decodeURIComponent(s2[1]);
      }
      return def;
  }

  var href = window.location.href;
  var user_id = getURIParam(href, "id", 0);
	async function getResponseTeacher(user_id){
		let response = await fetch(`https://alexmarchukprod.com.ua/teacher?id=${user_id}`);
		let content = await response.json(); 
		let pht=`url("${content.photo}")`;
		let key;
		console.log(content.olympicReserve)
		let list_school = document.querySelector('.teacher_ul-school');
		let list_class_school = document.querySelector('.teacher_class-school');
		let list_achivement = document.querySelector('.teacher__achivement');
		$('.teacher-photo').css('background-image', pht)
		$('.teacher-id_name').text(content.surname + " "+content.name+" " +content.patronymic);   
		$('.teacher_category').text(content.rank);
		if (content.group==null) $('.teacher_class').text("Не є класним керівником");
		else $('.teacher_class').text(content.group.title);
		$('.teacher__subject').text(content.subjects);
		if (content.olympicReserve==null || content.olympicReserve.length==0) {list_school.innerHTML+=`<li>Не викладає в ШОР</li>`}
		else list_school.innerHTML+=`<li>${content.olympicReserve}</li>`
		for (key in content.groups) list_class_school.innerHTML+=`<li>${content.groups[key]}</li>`
		if (content.achievements==null || content.achievements.length==0) list_achivement.innerHTML+=`<li>Немає великих досягнень</li>`
		else for (key in content.achievements) list_achivement.innerHTML+=`<li>${content.achievements[key]}</li>`
	}
	getResponseTeacher(user_id);

});	