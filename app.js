const list = document.querySelector('.list');

function showData(employees) {
    employees.forEach((employees) => {
      const listItem = document.createElement('li');
      const nameNode = createColumn('span', 'name', employees.name);
      const date = new Date(employees.createdAt).toLocaleDateString('fr-FR');
      const last_nameNode = createColumn('span', 'last_name', employees.last_name);
      const job_titleNode = createColumn('span', 'job_title', employees.job_title);
      const emailNode = createColumn('span', 'email', employees.email);
     
      listItem.setAttribute('id', employees.id);
      listItem.appendChild(name)
      listItem.appendChild(last_nameNode);
      listItem.appendChild(job_titleNode);
      listItem.appendChild(emailNode);
      list.appendChild(listItem);
  
      listItem.addEventListener('click', editStudent);
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

/*let xhr = new XMLHttpRequest()
xhr.onreadystatechange = function() {
    if (xhr.onreadyState == 4 && xhr.status == 200) {
        list.innerHtml = xhr.response
    }
}
xhr.open("GET",'https://6057e432c3f49200173ad08d.mockapi.io/api/v1/employees', true)
xhr.responseType="json"
xhr.send()*/

function loadData() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    console.log('readyState', this.readyState);
    if (this.readyState === 4 && this.status === 200) {
      const employees = JSON.parse(this.responseText);
      console.log(employees);

      showData(employees);
    }
  };
  xhttp.open('GET', 'https://6057e432c3f49200173ad08d.mockapi.io/api/v1/employees', true);
  //xhttp.open('GET', 'students.json', true);
  xhttp.send();
}

loadData();

/*function loadData() {
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function () {
      if (xhttp.readyState === 4 && xhttp.status === 200)
       {var employees = xhttp.response;
        console.log(employees);
        
        
       
      }
    };
    xhttp.open('GET', 'https://6057e432c3f49200173ad08d.mockapi.io/api/v1/employees', true);
    //xhttp.open('GET', 'students.json', true);
    xhttp.responseType='json'
    xhttp.send();
  }*/


  /*loadData();
  function editStudent(e) {
    const id = e.target.id;
  
    var xhttp = new XMLHttpRequest();
  
    xhttp.onreadystatechange = function () {
      console.log('readyState', this.readyState);
      if (this.readyState === 4 && this.status === 200) {
        //const student = JSON.parse(this.responseText);
        console.log('student', this.responseText);
      }
    };
    xhttp.open('PUT', 'https://6057e432c3f49200173ad08d.mockapi.io/api/v1/employees/?id', true);
    xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  
    //xhttp.open('GET', 'students.json', true);
    const newData = {
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/vladyn/128.jpg',
      createdAt: '2021-04-06T14:26:30.758Z',
      id,
      name: 'Guillaume Bartolini'
    };
    xhttp.send(JSON.stringify(newData));
  }*/
  