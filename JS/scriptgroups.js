async function getResponseGroup(){
    let response = await fetch(`https://alexmarchukprod.com.ua/groups`);
    let content = await response.json();
    let key;
    let table = document.querySelector('.search__table');
  for (key in content){
        if (content[key].formMaster == null) {
            table_body.innerHTML+=`
            <tr id="id=${content[key].id}" class="search__table-tr border_rad" onclick="replace_win(${content[key].id});">
            <td class="search__table-tdh td_del search_items" >${content[key].title}</td>
            <td class="search__table-tdh td_del">П.І.Б.</td>
            <td class="search__table-tdh td_del td_oppo">${content[key].students.length}</td>
            <td class="search__table-tdh td_del"><img class="search__table-navig" src="../IMG/expand-more-white-48-dp.svg"></td></tr>`
        }
        else{
            table_body.innerHTML+=`
            <tr class="search__table-tr border_rad" onclick="replace_win(${content[key].id});">
            <td class="search__table-tdh td_del search_items">${content[key].title}</td>
            <td class="search__table-tdh td_del">${content[key].formMaster.surname} ${content[key].formMaster.name} ${content[key].formMaster.patronymic}</td>
            <td class="search__table-tdh td_del td_oppo">${content[key].students.length}</td>
            <td class="search__table-tdh td_del"><img class="search__table-navig" src="../IMG/expand-more-white-48-dp.svg"></td></tr>`
        }
   }

}
getResponseGroup();

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
    for (var i = 1; i < table.rows.length; i++) {
        flag = false;
        for (var j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
            table.rows[i].classList.add('border_rad');
        } 
        else {
            table.rows[i].style.display = "none";
            table.rows[i].classList.remove('border_rad');
        }
    }
    if ($("#table_body").find('tr[style="display: none;"]').length==$("#table_body").find('tr').length-1) unknown.style.display = "";
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
