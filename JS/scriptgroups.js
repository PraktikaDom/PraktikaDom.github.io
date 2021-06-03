
async function getResponseGroup(){
    let response = await fetch(`https://alexmarchukprod.com.ua/groups`);
    let content = await response.json();
     console.log(content)
    let key;
    let poop= 5;
    let table = document.querySelector('.search__table');
    
  if (true) {}
  for (key in content){
      if (content[key].formMaster == null) {
         table_body.innerHTML+=`
         <tr value="${content[key].id}" class="search__table-tr"><td class="search__table-tdh td_del" >${content[key].title}</td>
         <td class="search__table-tdh td_del">П.І.Б.</td>
         <td class="search__table-tdh td_del td_oppo">${content[key].students.length}</td>
         <td class="search__table-tdh td_del"><img class="search__table-navig" src="../IMG/expand-more-white-48-dp.svg"></td></tr>`
      }
      else {
         table_body.innerHTML+=`
         <tr value="${content[key].id}" class="search__table-tr"><td class="search__table-tdh td_del">${content[key].title}</td>
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
   //$( document ).ready(function(){
     // $(".search__table-tr").hover(function(){
      //  $(this).find(".search__table-tdh").css( "background", "#f4f5f6" )
      //  }, function(){
       // $(this).find(".search__table-tdh").css( "background", "#ffffff" )
      //});
    //});
