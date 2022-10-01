const list = [ { name: 'create a post', status: 'In progress', priority: 'low'  },
{ name: 'test', status: 'Done', priority: 'high'  } ];

function addTask(task, priority) {
   list.push({name: task, status: 'To Do', priority: priority});
}



function changeStatus(task, status) {
   let changeTask = list.find((el) => el.name === task);
   changeTask.status = status;
}


function deleteTask(task) {
   let indexDeleteTask = list.findIndex((el) => el.name === task);
   list.splice(indexDeleteTask, 1);
}


function showList() {
   let listStatus = {
       'To Do': '',
       'In progress': '',
       'Done': '',
   }
   let result = '';
   list.forEach((el) => {listStatus[el.status] += el.name + '\n'});
   for(let key in listStatus) {
       result += `${key}:\n${listStatus[key] || '  -\n'}\n`;
   }
   
   return result;
}
addTask('read a book', 'high');
addTask('make a bed', 'low');
addTask('make a walk', 'high');
changeStatus('make a bed', 'In progress');
changeStatus('read a book', 'Done');
deleteTask('make a bed');
deleteTask('create a post');
console.log(showList());
console.log(list);