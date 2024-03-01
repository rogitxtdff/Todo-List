const $ = document;

let i =0

let BtnAddTodo = $.querySelector("button");
let InputTextAddTodo = $.querySelector("#input-text");
let InputButtonAddTodo = $.querySelector("#input-button");
let RequestDiv = $.querySelector("#requst");
let DeletMyDivTodo = $.querySelector("#DeletMyDivTodo");
let DivNoStatus = $.querySelector("#No-status");
let SwitchDiv = $.querySelectorAll(".Switch");

//////////////////////////////////Request Display ON/OFF

function DisplayON(params) {
  RequestDiv.style.display = "block";
  InputTextAddTodo.value = "";
}
function DisplayOff(params) {
  RequestDiv.style.display = "none";
}

BtnAddTodo.addEventListener("click", DisplayON);
DeletMyDivTodo.addEventListener("click", DisplayOff);

/////////////////////////////////Creat Todo Element

function AddElem(params) {
  
   
  let imgElemCreat = $.createElement("img");
  let LiElemCreat = $.createElement("li");
  imgElemCreat.setAttribute(
    "class",
    "w-5 cursor-pointer hover:scale-125 duration-200 z-[1] absolute ml-[260px]"
  );
  imgElemCreat.setAttribute("id", "DeleteTodoElem");
  imgElemCreat.setAttribute("src", "./icon/icons8-delete-50.png");
  LiElemCreat.setAttribute(
    "class",
    "w-[93%] h-[8%] m-2 bg-white rounded-lg shadow-xl flex justify-center items-center text-[1.3em] text-gray-400"
  );
  LiElemCreat.setAttribute("draggable", "true");
  LiElemCreat.setAttribute("id",'idTodo'+i)
   
  LiElemCreat.innerHTML = InputTextAddTodo.value;
  LiElemCreat.append(imgElemCreat);
  DivNoStatus.append(LiElemCreat);
  LiElemCreat.addEventListener("dragstart", DragStart);
  imgElemCreat.addEventListener("click", function (params) {
    LiElemCreat.remove();
  });
  i++
  
}

function BtnInputAdd(params) {
  if (InputTextAddTodo.value) {
    AddElem();
    InputTextAddTodo.value = "";
    RequestDiv.style.display = "none";
  } else {
    alert("You have not typed anything");
  }
}

InputButtonAddTodo.addEventListener("click", BtnInputAdd);

///////////////////////////////////////Switch Todo

function DragStart(event) {
  event.dataTransfer.setData("ElemId", event.target.id);
}

SwitchDiv.forEach(function (DivSwitch) {
  DivSwitch.addEventListener("drop", function (params) {
    let IdTodo = params.dataTransfer.getData("ElemId");

    let AddId = $.getElementById(IdTodo);

    DivSwitch.append(AddId);
  });
  DivSwitch.addEventListener("dragover", function (params) {
    params.preventDefault();
  });
});
