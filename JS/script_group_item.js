$(document).ready(function() {
   $(".logo").click(function(){
        window.location.href = '../index.html';
    }); 

   $(".pupil-link").click(function(){
        window.location.href = 'group_item.html';
    });
  x = prompt();
  async function getResponsePupil(user_id){
      let response = await fetch(`https://alexmarchukprod.com.ua/group?id=${user_id}`);
      let content = await response.json();
      console.log(content.advancedSubjects) 
      let list_achivement = document.querySelector('.pupil-text__achivement');
      $('#group_caption').text(content.title);
      if (content.formMaster==null) $('#class_keriv').text("П.І.Б.")
      else $('#class_keriv').text(content.formMaster.surname+" "+content.formMaster.name+" "+content.formMaster.patronymic);
      $('#kilkict').text(content.students.length);
      $('#specialization').text(content.specialization);
      let k;
      for (k in content.advancedSubjects){
        console.log(content.advancedSubjects[k]) 
        const output = `<li>${content.advancedSubjects[k]}</li>`
        $('#advancedSubjects').append(output)
      }
  }
  getResponsePupil(x);

});