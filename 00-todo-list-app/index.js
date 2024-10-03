let arr = [];
let checkedArray = [];
const completedtag = document.getElementById('completedtag');
completedtag.style.display = 'none';

function add() {

  const description = document.getElementById("description").value;
  console.log(description);
  if(description == '' || description ==" "){
    return;
  }
  let obj = {
    id: Date.now(),
    description: description,
  };
  arr.push(obj);
  // console.log(obj);
  addToParagraph(arr);
  const inputval = document.getElementById("description");
  inputval.value = "";
}
function addToParagraph(arr) {
  let htmlString = "";
  const para = document.getElementById("show");
  
  //console.log("this in addtopagargaph called");
  //console.log("the length of arr is " +  arr.length);
  //console.log(arr);
  let i = 0;
  arr.forEach((obj) => {
    i++;
    //console.log("the object is add to list");
    htmlString += `<div class = "task">
      <input type="checkbox" name="" id="check" onclick="remove(${obj.id})">
        <p id="textCheck">${obj.description}</p>
        </div>
        
        `;
      });
      console.log("the value of i is " + i);
  para.innerHTML = htmlString;
}

//  this is for completed tasks
function addCompleted(){
  completedtag.style.display = '';
  const completddiv = document.getElementById('completed');
  let htmlString = '';
  if(checkedArray.length == 0){
    completedtag.style.display = 'none';
    return;
  }
  else {
    checkedArray.forEach((obj)=>{
      htmlString +=`
      <div class = "showCompleted" id="showCompleted">
      <input type="checkbox" name="" id="check2" onclick="add2(${obj.id})" checked  >
      <p id="textCompleted">${obj.description}</p>
          </div>
      `;
  
    })
  }
  completddiv.innerHTML = htmlString;
}
function add2(id){
  const copleteddiv = document.getElementById("completed");
  if(checkedArray.length ==0){
    return copleteddiv.style.display = "none";
    }
    checkedArray = checkedArray.filter((obj)=>{
      if(obj.id != id){
        return obj;
      }
      arr.push(obj);
      return;
    });  
  
  // arr.forEach((obj)=>{
  //   console.log(obj.id, obj.description);
  // })
  addCompleted()
  //addToParagraph(arr);
}

function remove(id) {
  console.log('remove is called');
     arr=arr.filter((obj)=>{
        if(obj.id == id){
          checkedArray.push(obj);
          return;
        }
        return obj;
    })
    console.log(arr);
    addCompleted()
    //addToParagraph(arr)
    
  }



  //   console.log(id);
  //   console.log("reomve is called");
  //   arr = arr.filter((val) => {
  //     if (val.id != id) {
  //       return val;
  //     }
  //   });
  
    // ##### if you want to remove that item from the list permanentely then you can use these methods
    // console.log(arr);
  //   addToParagraph(arr);

// *********** if you want to remove the item from the list permanentely then you can use this code insted
// let arr =[];
// function add(){
//     const description = document.getElementById('description').value;
//     console.log(description);
//     let obj ={
//         id : Date.now(),
//         description : description
//     }
//     arr.push(obj);
//     console.log(obj);
//     // document.getElementById('info').value = `${description}`;
//     addToParagraph(arr);
//     const inputval = document.getElementById('description')
//     inputval.value = "";
// }
// function addToParagraph(arr) {
//     let htmlString ='';
//     const para = document.getElementById("show");
//     arr.forEach((obj)=>{
//         // console.log(`${obj.description}`);
//         // const para = document.getElementById("show");
//         // const check = document.getElementById("check");

//         htmlString += `<div class = "task">
//       <input type="checkbox" name="" id="check" onchange="remove(${obj.id})">
//         <p id="textCheck">${obj.description}</p>
//         </div>

//         `;
//         // htmlString +=`
//         // para.innerHTML += `
//         // <input type="checkbox" name="" id="check">
//         // <p>${obj.description}</p> <br>`;
//         arr.forEach((obj)=>{
//             console.log(`id is ${obj.id} and description is ${obj.description}`);
//         })
//     })
//     para.innerHTML = htmlString;

// }
// function remove(id){
//     const text = document.getElementById("textCheck");
//     const check = document.getElementById("check");
//     if (check.checked === true) {
//          console.log(id);
//     arr.forEach((obj)=>{
//         if(obj.id==id){
//              text.style =''
//         }
//     })
//     }

// }
