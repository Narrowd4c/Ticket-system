import "./input.css";

let data = [
  {
    id: 0,
    name: "肥宅心碎賞櫻3日",
    imgUrl:
      "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
    area: "高雄",
    description: "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
    group: 87,
    price: 1400,
    rate: 10,
  },
  {
    id: 1,
    name: "貓空纜車雙程票",
    imgUrl:
      "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    area: "台北",
    description:
      "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
    group: 99,
    price: 240,
    rate: 2,
  },
  {
    id: 2,
    name: "台中谷關溫泉會1日",
    imgUrl:
      "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    area: "台中",
    description:
      "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
    group: 20,
    price: 1765,
    rate: 7,
  },
];

let addTicket = document.querySelector("#addticket");
let list = document.querySelector("[data-list]");
let filterArea = document.querySelector("[data-filter-area]");
let listNum = document.querySelector("[data-list-num]");
let notFound = document.querySelector('[data-not-found]')

filterArea.addEventListener("change", (e) => {
  list.innerHTML = "";
  if (e.target.value === "全部地區") {
    printList(data);
  } else {
    let dataList = data.filter(({ area }) => area === e.target.value);
    printList(dataList);
  }
});


function printList(data) {
  data.forEach(
    ({ id, name, imgUrl, area, description, group, price, rate }) => {
      list.innerHTML += `<li id='${id}' class='lg:w-1/3 sm:w-1/2 w-full px-4 flex flex-col'>
      <div class="relative">
        <h4 class='text-white absolute -top-4 bg-primary-light text-xl px-5 py-2 rounded-r'>${area}</h4>
        <img src='${imgUrl}' alt="" class='h-[180px] w-full object-cover overflow-hidden'>
        <h5 class='absolute -bottom-3 text-white bg-primary py-[5px] px-2 rounded-r text-base'>${rate}</h5>
      </div>
      <div class="card-body flex flex-col justify-between border grow bg-white p-5">
        <div class="main">
          <h3 class="card-title lg:text-2xl md:text-xl text-2xl text-primary border-b-2 border-primary pb-1">${name}</h3>
          <div class="card-article pt-4 text-gray-400 mb-8 ">${description}</div>
        </div>
        <div class="card-footer flex justify-between">
          <h4 class='text-primary flex items-center'><i class="fas fa-exclamation-circle"></i><span class='ml-2'>剩下最後<span id='ticketnum'>${group}</span>組</span></h4>
          <div>
            <h4 class='text-primary'>TWD<span class='text-3xl font-medium align-middle ml-2'>${price}</span></h4>
          </div>
        </div>
      </div>
    </li>`;
    }
  );
  

  listNum.textContent = data.length;
  if (data.length === 0) {
    notFound.classList.remove('hidden');
  } else if(data.length >=1 ){ 
    notFound.classList.add('hidden');
  };
}


let areaTest = ["台北", "台中", "高雄"];
printList(data);

let alertMessage = document.querySelectorAll("[data-message]");
addTicket.addEventListener("submit", (e) => {
  e.preventDefault();
  let dataObj = {
    id: new Date(),
    name:
      e.target["ticket-name"]?.value !== ""
        ? e.target["ticket-name"]?.value
        : false,
    imgUrl:
      e.target["ticket-imgURL"]?.value !== ""
        ? e.target["ticket-imgURL"]?.value
        : false,
    area: areaTest.some((x) => x == e.target["ticket-area"]?.value)
      ? e.target["ticket-area"]?.value
      : false,
    description:
      e.target["ticket-description"]?.value !== ""
        ? e.target["ticket-description"]?.value
        : false,
    group:
      e.target["ticket-group"]?.value !== ""
        ? e.target["ticket-group"]?.value
        : false,
    price:
      e.target["ticket-price"]?.value !== ""
        ? e.target["ticket-price"]?.value
        : false,
    rate:
      e.target["ticket-rate"]?.value !== ""
        ? e.target["ticket-rate"]?.value
        : false,
  };

  let values = Object.values(dataObj).slice(1);
  alertMessage.forEach((item, i) => {
    console.log(values[i]);
    values[i] === false
      ? item.classList.remove("invisible")
      : item.classList.add("invisible");
  });
  if (values.every((x) => x)) {
    data.push(dataObj);
    list.innerHTML = "";
    printList(data);
    e.target.reset();
  }
});
