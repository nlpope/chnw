/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
document.addEventListener('DOMContentLoaded', () => {
   const studentList = document.getElementsByClassName("student-item cf");
   const itemsPerPage = 10;
   /*** 
   ShowPage dictates what is shown and what is not based on set indexes.
   It will be called by the eventListener in the next function
   ***/
   const showPage = (list, page) => {
      let startIndex = (page * itemsPerPage) - itemsPerPage;
      let endIndex = (page * itemsPerPage);
      for(let i=0; i<list.length; i++){
         let li = list[i];
         if (i >= startIndex && i < endIndex) {
            li.style.display = '';
         }else {
            li.style.display = 'none';
         }
      }
   }
   /***
   appendPageLinks creates, adds functionality to, and finally appends the pagination links. 
   EventListener awaits click event, removes the active class from each link, and adds the active class to the event target
   ***/   
   const appendPageLinks = (list) => {
      const totalPages = Math.ceil(list.length/itemsPerPage);
      const paginationDiv = document.createElement('div');
      const ul = document.createElement('ul');
      const pageDiv = document.querySelector('.page');   
      paginationDiv.className = 'pagination';
      pageDiv.appendChild(paginationDiv);
      paginationDiv.appendChild(ul);
      for(let i=1; i<=totalPages; i++){
         const li = document.createElement('li');
         const a = document.createElement('a');
         li.appendChild(a);
         a.textContent = i;
         a.href = '#';
         //Giving first link a default class of 'active'
         if(a.textContent === '1'){
            a.className = 'active';
         }
         a.addEventListener('click', (e) => {
            //calling showpage every time a link is clicked
            showPage(studentList, i);
            const toActivate = e.target;
            const anchorList = document.getElementsByTagName('a');
            for (let i=0; i<totalPages; i++){
               if(anchorList[i].className === 'active'){
                  anchorList[i].className = "";
               }
               toActivate.className = 'active';
            }
         });
         ul.appendChild(li);
      }
   }
   showPage(studentList, 1);
   appendPageLinks(studentList);
});