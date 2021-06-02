
async function getResponseGroup(){
   	let response = await fetch(`https://alexmarchukprod.com.ua/groups`);
   	let content = await response.json();
     
   	let key;
   	let table = document.querySelector('.search__table');
	for (key in content){
      table.innerHTML+=`<tr class="search__table-tr"></tr>`;
      let length = content[key].student.length;
      console.log(length)

      if (content[key].formMaster == null) {
         table.innerHTML+=`
         <td class="search__table-tdh">${content[key].title}</td>
         <td class="search__table-tdh">П.І.Б.</td>
         <td class="search__table-tdh">${content[key].title}</td>
         <td class="search__table-tdh"></td>`
      }
      else {
         table.innerHTML+=`
         <td class="search__table-tdh">${content[key].title}</td>
         <td class="search__table-tdh">${content[key].formMaster.surname}</td>
         <td class="search__table-tdh">${content[key].title}</td>
         <td class="search__table-tdh"></td>`
      }
   }
}