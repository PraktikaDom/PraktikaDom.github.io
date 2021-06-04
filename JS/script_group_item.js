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
      console.log(content) 
      let list_achivement = document.querySelector('.pupil-text__achivement');
      $('#group_caption').text(content.title);
      if (content.formMaster==null) $('#class_keriv').text("П.І.Б.")
      else $('#class_keriv').text(content.formMaster.surname+" "+content.formMaster.name+" "+content.formMaster.patronymic);
      $('#kilkict').text(content.students.length);
      $('#specialization').text(content.specialization);
      let k;
      for (k in content.advancedSubjects){
        const output = `<li class="conteiner-group__block1__side-caption_li">${content.advancedSubjects[k]}</li>`
        $('#advancedSubjects').append(output)
      }
  }
  getResponsePupil(x);



async function getResponseGroup(user_id){
    let response = await fetch(`https://alexmarchukprod.com.ua/group?id=${user_id}`);
    let content = await response.json();
    let key;
    let table = document.querySelector('.search__table');
  for (key in content){
        if (content[key].formMaster == null) {
            table_body.innerHTML+=`
            <tr value="${content[key].id}" class="search__table-tr">
            <td class="search__table-tdh td_del search_items"><img class="search__table_foto" src="../IMG/avatar@3x.webp"></td>
            <td class="search__table-tdh td_del">П.І.Б.</td>
            <td class="search__table-tdh td_del td_oppo"></td>
            <td class="search__table-tdh td_del"><img class="search__table-navig" src="../IMG/expand-more-white-48-dp.svg"></td></tr>`
        }
        else{
            table_body.innerHTML+=`
            <tr value="${content[key].id}" class="search__table-tr">
            <td class="search__table-tdh td_del search_items"><img class="search__table_foto" src="../IMG/avatar@3x.webp"></td>
            <td class="search__table-tdh td_del">${content[key].surname} ${content[key].name} ${content[key].patronymic}</td>
            <td class="search__table-tdh td_del td_oppo"></td>
            <td class="search__table-tdh td_del"><img class="search__table-navig" src="../IMG/expand-more-white-48-dp.svg"></td></tr>`
        }
   }
}
getResponseGroup(x);
function sort_age() {
    var tbody =$('#table_body');
    tbody.find('tr').sort(function(a, b) {
        if($('.search__sorting').val()=='Зростанням') return $(".td_oppo", a).text().localeCompare($('.td_oppo', b).text());
        else if($('.search__sorting').val()=='Зростанням'){
            return $(".td").remove();
            getResponseGroup(); 
          } 
          else return $(".td_oppo", b).text().localeCompare($(".td_oppo", a).text());
    }).appendTo(tbody);}
$(".search__sorting").change(function(){
  sort_age();
})

document.querySelector("#search-group-input").oninput = function(){
    var phrase = document.getElementById('search-group-input');
    var table = document.getElementById('table_body');
    var regPhrase = new RegExp(phrase.value, 'i');
    var flag = false;
    console.log(table.rows.length);
    for (var i = 1; i < table.rows.length; i++) {
        flag = false;
        for (var j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
    if (table.rows.length == $('table_body').find('tr[style="display: none;"]').keys() ) {
      $('#unknown').toggle();
    }
}
});