const tabsArr = ["deals-tab", "coupons-tab", "all-tab", "expired-tab"];

window.onload = function(){
const tabs = document.getElementsByClassName('tab-link');
for(let i=0; i<tabs.length; i++){
  tabs[i].addEventListener('click', function(){
      var current = document.getElementsByClassName('active-tab');
      console.log(current);
      current[0].className = current[0].className.replace(" active-tab", "");
      this.className += " active-tab";
  });
};
const couponCards = document.querySelectorAll('.coupon-card');
const noOfCoupons = couponCards.length;
const dealCards = document.querySelectorAll('.deal-card');
const noOfDeals = dealCards.length;

document.querySelector('.active-deals').innerHTML = `Active Deals: <span class="activeDeals">${noOfDeals}</span>`;
document.querySelector('.active-coupons').innerHTML = `Active Coupons: <span class="activeCoupons">${noOfCoupons}</span>`;

document.querySelector('.all').textContent = noOfCoupons+noOfDeals;
document.querySelector('.coupons').textContent = noOfCoupons;
document.querySelector('.deals').textContent = noOfDeals;

tabsArr.forEach(element => {
    if(element === "all-tab"){
      document.getElementById('all-tab').addEventListener('click', showAll);
      function showAll(){
        couponCards.forEach(el => {
          el.style.display = "flex";
        });
        dealCards.forEach(elem => {
          elem.style.display = "flex";
        });
      }
    }else if(element === "deals-tab"){
      document.getElementById('deals-tab').addEventListener('click', showDeals);
      function showDeals(){
        couponCards.forEach(ele => {
          ele.style.display = "none";
        });
        dealCards.forEach(ele => {
          ele.style.display = "flex";
        });
      }
    }else if(element === "coupons-tab"){
      document.getElementById('coupons-tab').addEventListener('click', showDeals);
      function showDeals(){
        dealCards.forEach(ele => {
          ele.style.display = "none";
        });
        couponCards.forEach(ele => {
          ele.style.display = "flex";
        });
      }
    }else if(element === "expired-tab"){
      document.getElementById('expired-tab').addEventListener('click', showExpired);
      function showExpired(){
        dealCards.forEach(ele => {
          ele.style.display = "none";
        });
        couponCards.forEach(ele => {
          ele.style.display = "none";
        });
      }
    }
  });


  

}

const allCpns = [

  {   
    type: "coupon",
    discount: "20% OFF",
    btnId: 'a',
    title: "All User Offer – $4 Off On All Orders Above $5 | Limited Period Offer",
    id: "Aliexpress001",
    code: "EXP38",
    modalInfo: "Use this Coupon to get $4 Off on Orders Above $5",
    actionUrl: "https://s.click.aliexpress.com/e/_A08RtR",
    uses: "732 uses today"
},
{   
    type: "coupon",
    discount: "10% OFF",
    btnId: 'b',
    title: "$3.39 Off Any Order",
    id: "Aliexpress002",
    code: "MISSOU",
    modalInfo: "Use this Coupon to get $3.39 Off on any Order at AliExpress",
    actionUrl: "https://s.click.aliexpress.com/e/_A08RtR",
    uses: "732 uses today"
},
{   
    type: "coupon",
    discount: "23% OFF",
    title: "$4 Off Any Order",
    btnId: 'c',
    id: "Aliexpress003",
    uses: "732 uses today",
    code: "AEOFF176",
    modalInfo: "Use this Coupon to get $4 Off on any Order at AliExpress",
    uses: "732 uses today",
    actionUrl: "https://s.click.aliexpress.com/e/_A08RtR"
},
{   
    type: "coupon",
    discount: "23% OFF",
    title: "$4 Off Sitewide",
    btnId: 'd',
    id: "Aliexpress004",
    code: "ALIYOUTUBE1",
    modalInfo: "Use this Coupon to get $4 Off Sitewide",
    uses: "732 uses today",
    actionUrl: "https://s.click.aliexpress.com/e/_A08RtR"
},
    
    {   
      type: "coupon",
      btnId: 'e',
      discount: "23% OFF",
      title: "$4 Off Your Order",
      id: "Aliexpress005",
      code: "AEOFF154",
      modalInfo: "Use this Coupon to get $4 Off",
      actionUrl: "https://s.click.aliexpress.com/e/_A08RtR",
      uses: "345 uses today"
    },
    {   
      type: "coupon",
      btnId: 'f',
      discount: "23% OFF",
      title: "Up to 25% Off Sitewide For First Time User",
      id: "Aliexpress006",
      code: "EXP60",
      modalInfo: "Use this Coupon to get 25% Off Sitewide For First Time User",
      actionUrl: "https://s.click.aliexpress.com/e/_A08RtR",
      uses: "452 uses today"
    },
  {   
      type: "coupon",
      btnId: 'g',
      discount: "23% OFF",
      title: "$4 Discount For Order Over $5 For New Customer",
      id: "Aliexpress007",
      code: "SAHL1",
      modalInfo: "Use this Coupon to get $4 Discount For Order Over $5 For New Customer",
      actionUrl: "https://s.click.aliexpress.com/e/_A08RtR",
      uses: "526 uses today"
  },
  {   
      type: "coupon",
      btnId: 'h',
      discount: "23% OFF",
      title: "$15 Off Orders Over $100+ at Aliexpress",
      id: "Aliexpress008",
      code: "BONUS10",
      modalInfo: "Use this Coupon to get $15 Off Orders Over $100+ at Aliexpress",
      actionUrl: "https://s.click.aliexpress.com/e/_A08RtR",
      uses: "452 uses today"
  },
  {   
      type: "coupon",
      discount: "23% OFF",
      btnId: 'i',
      title: "$4 Off any Order at Aliexpress",
      id: "Aliexpress009",
      code: "ZW55",
      modalInfo: "Use this Coupon to get $4 Off any Order at Aliexpress",
      actionUrl: "https://s.click.aliexpress.com/e/_A08RtR",
      uses: "477 uses today"
  },
  {   
      type: "coupon",
      discount: "23% OFF",
      btnId: 'j',
      title: "$7 Discount for order over $50 at Ali Express",
      id: "Aliexpress010",
      code: "ALIEXPRESSBF7",
      modalInfo: "Use this Coupon to get $7 Discount for order over $50 at Ali Express",
      actionUrl: "https://s.click.aliexpress.com/e/_A08RtR",
      uses: "452 uses today"
  },
  {   
      type: "coupon",
      discount: "23% OFF",
      title: "$4 Discount For Order Over $5 For New Customer",
      id: "Aliexpress011",
      btnId: 'k',
      code: "P88YZZMV",
      modalInfo: "Use this Coupon to get $4 Discount For Order Over $5 For New Customer",
      actionUrl: "https://s.click.aliexpress.com/e/_A08RtR",
      uses: "586 uses today"
  },
  {   
      type: "coupon",
      discount: "23% OFF",
      title: "Extra $12 Off Orders over $110 Sitewide",
      id: "Aliexpress012",
      btnId: 'l',
      code: "ALIEXPRESSBF12",
      modalInfo: "Use this Coupon to get Extra $12 Off Orders over $110 Sitewide",
      actionUrl: "https://s.click.aliexpress.com/e/_A08RtR",
      uses: "452 uses today"
  },
  {   
      type: "coupon",
      discount: "23% OFF",
      title: "$5 Off over $10+ with Paypal",
      id: "Aliexpress013",
      btnId: 'm',
      code: "PAYPAL5",
      modalInfo: "Use this Coupon to get $5 Off over $10+ with Paypal",
      actionUrl: "https://s.click.aliexpress.com/e/_A08RtR",
      uses: "452 uses today"
  },
    
]
const allDls = [
  {
    title: "New Customers - Up To $4 In Coupons When You Join AliExpress",
    actionUrl: "https://s.click.aliexpress.com/e/_A08RtR",
    uses: "525 uses today"
  },
  {
    discount: "50% OFF",
    expiry: "31-12-2021",
    title: "Up To 50% Off Outdoor Apparel and Gear",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_A08RtR",
    store: "aliexpress",
    uses: "525 uses today"
  },
  {
    discount: "50% OFF",
    expiry: "31-12-2021",
    title: "Up To 50% Off Home Improvement and Tools",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_A08RtR",
    store: "aliexpress",
    uses: "423 uses today"
  },
  {
    discount: "50% OFF",
    expiry: "31-12-2021",
    title: "Up To 50% Off Home Decor",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_A08RtR",
    store: "aliexpress",
    uses: "585 uses today"
  },
  {
    discount: "50% OFF",
    expiry: "31-12-2021",
    title: "Up To 50% Off Sale Items",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_A08RtR",
    store: "aliexpress",
    uses: "475 uses today"
  },
  {
    discount: "60% OFF",
    expiry: "31-12-2021",
    title: "Up To 60% Off Sale Items",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_A08RtR",
    store: "aliexpress",
    uses: "485 uses today"
  },
  {
    discount: "HOT DEAL",
    expiry: "31-12-2021",
    title: "Latest Discounts From Aliexpress",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_A08RtR",
    store: "aliexpress",
    uses: "525 uses today"
  },
  {
    discount: "HOT DEAL",
    expiry: "31-12-2021",
    title: "Exclusive Savings",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_A08RtR",
    store: "aliexpress",
    uses: "525 uses today"
  },
]


for(let i=0; i<allCpns.length; i++){
  document.querySelector('.allCoupons').innerHTML += `
  <div class="coupon-card">
  <div class="img-card-img">
      <img src="images/aliexpress.webp" alt="store">
  </div>
  <div class="coupons-details">
      <p class="coupon-info coupon-title">${allCpns[i].title}</p>
      <div class="star-rating store-stars mt-1 mb-1">
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star-half-o" aria-hidden="true"></i>
      </div>
      <p style="font-size: 12px; color: rgb(95, 94, 94); height: inherit;">${allCpns[i].uses}</p>
      <div class="button-code store-code-btn-res">
          <h6 class="couponCode">${allCpns[i].code}</h6>

          <div class="peel-btn">
              <a href="${allCpns[i].actionUrl}" target="_blank">
                  <button class="get-code" id="${allCpns[i].btnId}" data-bs-toggle="modal" data-bs-target="#exampleModal">Get Code</button>
              </a>
          </div>
      </div>
      

      
  </div>
  <div class="button-code store-code-btn-desk">
      <h6 class="couponCode">${allCpns[i].code}</h6>

      <div class="peel-btn">
          <a href="${allCpns[i].actionUrl}" target="_blank">
              <button class="get-code" id="${allCpns[i].btnId}" data-bs-toggle="modal" data-bs-target="#exampleModal">Get Code</button>
          </a>
      </div>
  </div>
</div>
  `;

};

for(let i=0; i<allDls.length; i++){
  document.querySelector('.allCoupons').innerHTML += `
  <div class="deal-card">
  <div class="img-card-img deal-img-card">
      <img src="images/aliexpress.webp" alt="store">
  </div>
  <div class="coupons-details">
      <p class="coupon-info coupon-title">${allDls[i].title}</p>
      <div class="star-rating store-stars mt-1 mb-1">
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star-half-o" aria-hidden="true"></i>
      </div>
      <p style="font-size: 12px; color: rgb(95, 94, 94); height: inherit;">${allDls[i].uses}</p>
      <a href="${allDls[i].actionUrl}" class="get-deal-res" target="_blank">
          <button class="get-deal">Get Deal</button>
      </a>

      
  </div>
  <a href="${allDls[i].actionUrl}" class="get-deal-desk" target="_blank">
      <button class="get-deal">Get Deal</button>
  </a>
</div>
  `;

};


var idArr = allCpns.map(a => a.btnId);
  for(let i=0; i<idArr.length; i++){
    document.getElementById(idArr[i]).addEventListener('click', function(){
      document.querySelector('.modal-body').innerHTML = `
      <img src="images/aliexpress.webp" alt="store-logo">
      <h6 class="mt-3 mb-3">${allCpns[i].title}</h6>
      <div class="copy-code">
          <span class="modal-code" id="modalCode">${allCpns[i].code}</span>
          <button class="copy" data-clipboard-target="#modalCode">Copy</button>
      </div>
      <p class="mt-2 mb-2">${allCpns[i].modalInfo}</p>
      <a href="#">
          <button class="store">Visit Store</button>
      </a>
      `
    });
  }