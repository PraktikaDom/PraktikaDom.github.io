$(document).ready(function() {
   $(".logo").click(function(){
        window.location.href = '../index.html';
    }); 

   async function getResponseGroup(){
    let response = await fetch(`https://alexmarchukprod.com.ua/teachers`);
    let content = await response.json();
    let key;
    let table = document.querySelector('.search__table');
    
  for (key in content){
        patr = content[key].patronymic.split("").reverse();
        if(patr[0]=="ч"){
         avatar = "../IMG/avatar@3xteacherboy.png";
        }
    else avatar = "../IMG/avatar@3xteachergirl.png"
        table_body.innerHTML+=`
        <tr onclick="replace_win(${content[key].id});" class="search__table-tr border_rad">
        <td class="search__table-tdh td_del search_items"><img style="width:48px;" class="search__table_foto" src="${avatar}"></td>
        <td class="search__table-tdh td_del">${content[key].surname} ${content[key].name} ${content[key].patronymic}</td>
        <td class="search__table-tdh td_del td_oppo"></td>
        <td class="search__table-tdh td_del"><img class="search__table-navig" src="../IMG/expand-more-white-48-dp.svg"></td></tr>`
   }
}

getResponseGroup()
document.querySelector("#search-group-input").oninput = function(){
    var phrase = document.getElementById('search-group-input');
    var table = document.getElementById('table_body');
    var regPhrase = new RegExp(phrase.value, 'i');
    var flag = false;
    for (var i = 1; i < table.rows.length; i++) {
        flag = false;
        for (var j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
            table.rows[i].classList.add('border_rad');
        } else {
            table.rows[i].style.display = "none";
            table.rows[i].classList.remove('border_rad');
        }
    }
    if ($("#table_body").find('tr[style="display: none;"]').length==$("#table_body").find('tr').length-1){
        unknown.style.display = "";
    }  
    else unknown.style.display = "none"; 
    for (var i = 1; i<=$("#table_body").find('tr[style!="display: none;"]').length-1;i++){
        max_len = $("#table_body").find('tr[style!="display: none;"]').length-1;
        if ($("#table_body").find('tr[style!="display: none;"]')[i]==$("#table_body").find('tr[style!="display: none;"]')[max_len]) {
            $("#table_body").find('tr[style!="display: none;"]')[i].classList.add('border_rad-tr');
            $(".border_rad-tr td").addClass('border_rad-tdh');
        }
        else {
            $(".border_rad-tr td").removeClass('border_rad-tdh')
            $("#table_body").find('tr[style!="display: none;"]')[i].classList.remove('border_rad-tr');
        }
    }
}
});	