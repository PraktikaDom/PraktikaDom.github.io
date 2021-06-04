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
        table_body.innerHTML+=`
        <tr onclick="replace_win(${content[key].id});" class="search__table-tr">
        <td class="search__table-tdh td_del search_items"><img style="width:48px;" class="search__table_foto" src="../IMG/avatar@3x.webp"></td>
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
    
    if ($("#table_body").find('tr[style="display: none;"]').length==$("#table_body").find('tr').length-1)  unknown.style.display = "";
    else unknown.style.display = "none"; 
}
});	