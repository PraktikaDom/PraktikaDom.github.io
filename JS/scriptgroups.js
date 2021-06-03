
async function getResponseGroup(){
    let response = await fetch(`https://alexmarchukprod.com.ua/groups`);
    let content = await response.json();
    let key;
    let poop= 5;
    let table = document.querySelector('.search__table');
  for (key in content){
        if (content[key].formMaster == null) {
            table_body.innerHTML+=`
            <tr value="${content[key].id}" class="search__table-tr">
            <td class="search__table-tdh td_del search_items" >${content[key].title}</td>
            <td class="search__table-tdh td_del">П.І.Б.</td>
            <td class="search__table-tdh td_del td_oppo">${content[key].students.length}</td>
            <td class="search__table-tdh td_del"><img class="search__table-navig" src="../IMG/expand-more-white-48-dp.svg"></td></tr>`
        }
        else{
            table_body.innerHTML+=`
            <tr value="${content[key].id}" class="search__table-tr">
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