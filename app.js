// variable
const list = document.querySelector('.list');
const modal =document.querySelector('.modal-test');

//affiche les informations d'un employee dans le HTML

function showData(employees) {
    employees.forEach((employees) => {
      const listItem = document.createElement('li');
      const nameNode = createColumn('span', 'name', employees.name);
      const last_nameNode = createColumn('span', 'last_name', employees.last_name);
     /* const job_titleNode = createColumn('span', 'job_title', employees.job_title);
      const emailNode = createColumn('span', 'email', employees.email);*/
      const btnInfo = createColumn('button','info','plus')
      listItem.setAttribute('id', employees.id);
      listItem.appendChild(nameNode);
      listItem.appendChild(last_nameNode);
     /* listItem.appendChild(job_titleNode);
      listItem.appendChild(emailNode);*/
      listItem.appendChild(btnInfo);
      list.appendChild(listItem);
      listItem.addEventListener('click', editEmployees);
      btnInfo.addEventListener('click',function(e){
        plusData(e.target.parentElement.id);
       
        
      })
    });
  }
  function createColumn(type, className, data) {
    const node = document.createElement(type);
    node.setAttribute('class', className);
    if (data) {
      node.innerText = data;
    }
    return node;
  }
  //retourne toute les information d'un employees dans une modale
function showMoreData(employees) {
      const listItem = document.createElement('li');
      modal.innerHTML = '';
      const nameNode = createColumn('span', 'name', employees.id);
      const last_nameNode = createColumn('span', 'last_name', employees.last_name);
      const job_titleNode = createColumn('span', 'job_title', employees.job_title);
      const emailNode = createColumn('span', 'email', employees.email);
      const btnRemove = createColumn('button','delete','supprimer')
      const btnDel = createColumn('button','delete','close');
      listItem.setAttribute('id', employees.id);
      listItem.appendChild(nameNode);
      listItem.appendChild(last_nameNode);
      listItem.appendChild(job_titleNode);
      listItem.appendChild(emailNode);
      listItem.appendChild(btnDel);
      listItem.appendChild(btnRemove);
      modal.appendChild(listItem);
      
      btnDel.addEventListener('click', function(e){
        e.target.parentElement.remove();
      });
      btnRemove.addEventListener('click', function(e){
      removeItem(e.target.parentElement.id);
      });
    };
    function removeItem(id){
      console.log(id);
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        console.log('readyState', this.readyState);
        if (this.readyState === 4 && this.status === 200) {
          const employees = JSON.parse(this.responseText);
          (employees);
          //showMoreData(employees)
        }
      };
      xhttp.open('DELETE', 'https://6057e432c3f49200173ad08d.mockapi.io/api/v1/employees/'+id, true);
      //xhttp.open('GET', 'students.json', true);
      xhttp.send();
    };

function plusData(id) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      console.log('readyState', this.readyState);
      if (this.readyState === 4 && this.status === 200) {
        const employees = JSON.parse(this.responseText);
        console.log(employees);
        showMoreData(employees)
      }
    };
    xhttp.open('GET', 'https://6057e432c3f49200173ad08d.mockapi.io/api/v1/employees/'+id, true);
    //xhttp.open('GET', 'students.json', true);
    xhttp.send();
}
//charge les data dans une variables 
function loadData() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    console.log('readyState', this.readyState);
    if (this.readyState === 4 && this.status === 200) {
      const employees = JSON.parse(this.responseText);
      showData(employees);
    }
  };
  xhttp.open('GET', 'https://6057e432c3f49200173ad08d.mockapi.io/api/v1/employees/', true);
  //xhttp.open('GET', 'students.json', true);
  xhttp.send();
}
loadData();
  function editEmployees(e) {
    const id = e.target.id;
  
    var xhttp = new XMLHttpRequest();
  
    xhttp.onreadystatechange = function () {
      console.log('readyState', this.readyState);
      if (this.readyState === 4 && this.status === 200) {
        //const student = JSON.parse(this.responseText);
        console.log('employees', this.responseText);
      }
    };
    xhttp.open('PUT', 'https://6057e432c3f49200173ad08d.mockapi.io/api/v1/employees/?id', true);
    xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  }
