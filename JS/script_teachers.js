
async function getResponseGroup(){
    let response = await fetch(`https://alexmarchukprod.com.ua/groups`);
    let content = await response.json();
     
    let key;
    let table = document.querySelector('.search__table');
    
  if (true) {}
  for (key in content){
      table.innerHTML+=`<tr class="search__table-tr"></tr>`;
      if (content[key].formMaster == null) {
           table.innerHTML+=`
         <td class="search__table-tdh"><img class="img" src="../IMG/avatar.svg"></td>
         <td class="search__table-tdh">П.І.Б.</td>
         <td class="search__table-tdh"></td>
         <td class="search__table-tdh"><img class="search__table-navig" src="../IMG/expand-more-white-48-dp.svg"></td>`
      }
      else {
         table.innerHTML+=`
         <td class="search__table-tdh"><img class="" src="../IMG/avatar.svg"></td>
         <td class="search__table-tdh">${content[key].formMaster.surname} ${content[key].formMaster.name} ${content[key].formMaster.patronymic}</td>
         <td class="search__table-tdh"></td>
         <td class="search__table-tdh"><img class="search__table-navig" src="../IMG/expand-more-white-48-dp.svg"></td>`
      }
   }
}
