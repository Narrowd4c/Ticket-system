import "./input.css";
import axios from 'axios';

let addTicket = document.querySelector("#addticket");
let list = document.querySelector("[data-list]");
let filterArea = document.querySelector("[data-filter-area]");
let listNum = document.querySelector("[data-list-num]");
let notFound = document.querySelector("[data-not-found]");
let areaTest = ["台北", "台中", "高雄"];
let alertMessage = document.querySelectorAll("[data-message]");


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
    notFound.classList.remove("hidden");
  } else if (data.length >= 1) {
    notFound.classList.add("hidden");
  }
}

const chartDount = c3.generate({
  //https://c3js.org/reference.html#donut-label-show
  bindto: "#chart",
  data: {
    columns: [
      ["台北", 1],
      ["台中", 1],
      ["高雄", 1],
    ],
    type: "donut",
  },
  donut: {
    title: "套票地區比重",
    label: {
      show: false,
    },
    // threshold: 0.01,
    // expand: false,
    // padAngle: 0.01,
    width: 10,
  },
  // size: {
  //   height: 200, default : auto
  //   width: 200,
  // },
  color: {
    pattern: ["#26C0C7", "#5151D3", "#E68618"],
  },
});

function chart(data) { 
  let area = data.reduce((pre, { area}) => {
    if (area in pre) {
      pre[area]++
    } else { 
      pre[area] = 1
    }
    return pre
  }, {})
  chartDount.load({ columns: Object.entries(area) });
  return area
}

async function getAPI() { 
  let ticketUrl =
    "https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json";
  try {
    let res = await axios.get(ticketUrl); 
    return res
  } catch(error) { 
    console.error(error)
  }
};   

getAPI().then(({ data: { data } }) => { 
  //初始化
  printList(data);
  // //新增套票
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
    chart(data);
  });
  // //篩選地區
  filterArea.addEventListener("change", (e) => {
    list.innerHTML = "";
    if (e.target.value === "全部地區") {
      printList(data);
    } else {
      let dataList = data.filter(({ area }) => area === e.target.value);
      printList(dataList);
    }
  });
  
}); 






