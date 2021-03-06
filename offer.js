document.querySelector('meta[name="description"]').setAttribute("content", "Save online with AliExpress promo codes & coupons for "+ month+'-'+year);
document.querySelector('meta[name="keywords"]').setAttribute("content", "AliExpress, coupon, promo, coupon, voucher, discount, code, promotion, sale, deals, offers, " + month+'-'+year);

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
    id: "Aliexpress017",
    discount: "$4 OFF",
    title: "$4 Off Any Order",
    expiry: "Expires on 31-12-2021",
    code: "WA22",
    modalInfo: "Use this Coupon to get $4 Off Any Order",
    buttonId: "1522",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "qq",
    uses: "552 uses today"
  },
  {
    id: "Aliexpress018",
    discount: "$5 OFF",
    title: "$5 Off Any Order",
    expiry: "Expires on 31-12-2021",
    code: "ALI567",
    modalInfo: "Use this Coupon to get $5 Off Any Order",
    buttonId: "1523",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "mm",
    uses: "463 uses today"
  },
  {
    id: "Aliexpress019",
    discount: "$5 OFF",
    title: "$5 Off First order",
    expiry: "Expires on 31-12-2021",
    code: "ALIMINUS162",
    modalInfo: "Use this Coupon to get $5 Off First order",
    buttonId: "1524",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "tt",
    uses: "485 uses today"
  },
  {
    id: "Aliexpress014",
    discount: "5% OFF",
    title: "Use Code and Save 5%",
    expiry: "Expires on 31-12-2021",
    code: "28VERANOALI",
    modalInfo: "Use this Coupon to save 5%",
    buttonId: "15",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "q",
    uses: "485 uses today"
  },
  {
    id: "Aliexpress015",
    discount: "$5 OFF",
    title: "$5 Off Sitewide Coupon",
    expiry: "Expires on 31-12-2021",
    code: "RQMY",
    modalInfo: "Use this Coupon to get $5 Off Sitewide Coupon",
    buttonId: "16",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "p",
    uses: "542 uses today"
  },
  {
    id: "Aliexpress016",
    discount: "40% OFF",
    title: "Save 40%",
    expiry: "Expires on 31-12-2021",
    code: "ALI675",
    modalInfo: "Use this Coupon to Save 40%",
    buttonId: "17",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "o",
    uses: "455 uses today"
  },
  
  
  {
    id: "Aliexpress004",
    discount: "$4 OFF",
    title: "$4 Off Sitewide",
    expiry: "Expires on 31-12-2021",
    code: "ALIYOUTUBE1",
    modalInfo: "Use this Coupon to get $4 Off Sitewide",
    buttonId: "3",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "d",
    uses: "745 uses today"
  },
  

  {
    id: "Aliexpress006",
    discount: "25% OFF",
    title: "Up to 25% Off Sitewide For First Time User",
    expiry: "Expires on 31-12-2021",
    code: "EXP60",
    modalInfo: "Use this Coupon to get Up to 25% Off Sitewide For First Time User",
    buttonId: "5",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "f",
    uses: "458 uses today"
  },
  {
    id: "Aliexpress007",
    discount: "$4 OFF",
    title: "$4 Discount For Order Over $5 For New Customer",
    expiry: "Expires on 31-12-2021",
    code: "SAHL1",
    modalInfo: "Use this Coupon to get $4 Discount For Order Over $5 For New Customer",
    buttonId: "6",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "g",
    uses: "857 uses today"
  },
  {
    id: "Aliexpress008",
    discount: "$15 OFF",
    title: "$15 Off Orders Over $100+ at Aliexpress",
    expiry: "Expires on 31-12-2021",
    code: "BONUS10",
    modalInfo: "Use this Coupon to get $15 Off Orders Over $100+ at Aliexpress",
    buttonId: "7",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "h",
    uses: "732 uses today"
  },
  {
    id: "Aliexpress009",
    discount: "$4 OFF",
    title: "$4 Off any Order at Aliexpress",
    expiry: "Expires on 31-12-2021",
    code: "ZW55",
    modalInfo: "Use this Coupon to get $4 Off any Order at Aliexpress",
    buttonId: "8",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "i",
    uses: "356 uses today"
  },
  {
    id: "Aliexpress010",
    discount: "$7 OFF",
    title: "$7 Discount for order over $50 at Ali Express",
    expiry: "Expires on 31-12-2021",
    code: "ALIEXPRESSBF7",
    modalInfo: "Use this Coupon to get $7 Discount for order over $50 at Ali Express",
    buttonId: "9",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "j",
    uses: "623 uses today"
  },
  {
    id: "Aliexpress011",
    discount: "$4 OFF",
    title: "$4 Discount For Order Over $5 For New Customer",
    expiry: "Expires on 31-12-2021",
    code: "P88YZZMV",
    modalInfo: "Use this Coupon to get $4 Discount For Order Over $5 For New Customer",
    buttonId: "10",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "k",
    uses: "528 uses today"
  },
  {
    id: "Aliexpress012",
    discount: "$12 OFF",
    title: "Extra $12 Off Orders over $110 Sitewide",
    expiry: "Expires on 31-12-2021",
    code: "ALIEXPRESSBF12",
    modalInfo: "Use this Coupon to get Extra $12 Off Orders over $110 Sitewide",
    buttonId: "11",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "l",
    uses: "768 uses today"
  },
  

  {
    id: "Aliexpress013",
    discount: "$5 OFF",
    title: "$5 Off over $10+ with Paypal",
    expiry: "Expires on 31-12-2021",
    code: "PAYPAL5",
    modalInfo: "Use this Coupon to get $5 Off over $10+ with Paypal",
    buttonId: "12",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    btnId: "m",
    uses: "693 uses today"
  },
    
]
const allDls = [
  {
    discount: "$50 Off",
    expiry: "31-12-2021",
    title: "Up to $50 Off Select Products",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    uses: "452 uses today"
  },
  {
    discount: "85% Off",
    expiry: "31-12-2021",
    title: "Up to 85% Off",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    uses: "522 uses today"
  },
  {
    discount: "$4 Off",
    expiry: "31-12-2021",
    title: "New Customers - Up To $4 In Coupons When You Join AliExpress",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    uses: "656 uses today"
  },
  {
    discount: "50% OFF",
    expiry: "31-12-2021",
    title: "Up To 50% Off Outdoor Apparel and Gear",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    uses: "523 uses today"
  },
  {
    discount: "50% OFF",
    expiry: "31-12-2021",
    title: "Up To 50% Off Home Improvement and Tools",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    uses: "493 uses today"
  },
  {
    discount: "50% OFF",
    expiry: "31-12-2021",
    title: "Up To 50% Off Home Decor",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    uses: "586 uses today"
  },
  {
    discount: "50% OFF",
    expiry: "31-12-2021",
    title: "Up To 50% Off Sale Items",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    uses: "586 uses today"
  },
  {
    discount: "60% OFF",
    expiry: "31-12-2021",
    title: "Up To 60% Off Dolls",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    uses: "752 uses today"
  },
  {
    discount: "HOT DEAL",
    expiry: "31-12-2021",
    title: "Latest Discounts From Aliexpress",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    uses: "693 uses today"
  },
  {
    discount: "HOT DEAL",
    expiry: "31-12-2021",
    title: "Exclusive Savings",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress",
    uses: "463 uses today"
  },

]


for(let i=0; i<allCpns.length; i++){
  document.querySelector('.allCoupons').innerHTML += `
  <div class="coupon-card">
  <div class="img-card-img">
      <h4>${allCpns[i].discount}</h4>
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
              <a>
                  <button class="get-code" id="${allCpns[i].id}" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick=gtag_report_conversion(\"${allCpns[i].actionUrl}\")>Get Code</button>
              </a>
          </div>
      </div>
      

      
  </div>
  <div class="button-code store-code-btn-desk">
      <h6 class="couponCode">${allCpns[i].code}</h6>

      <div class="peel-btn">
          <a>
              <button class="get-code" id="${allCpns[i].btnId}" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick=gtag_report_conversion(\"${allCpns[i].actionUrl}\")>Get Code</button>
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
    <h4>${allDls[i].discount}</h4>
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
      <a class="get-deal-res">
          <button class="get-deal" onclick=gtag_report_conversion(\"${allDls[i].actionUrl}\")>Get Deal</button>
      </a>

      
  </div>
  <a class="get-deal-desk">
      <button class="get-deal" onclick=gtag_report_conversion(\"${allDls[i].actionUrl}\")>Get Deal</button>
  </a>
</div>
  `;

};


var idArr = allCpns.map(a => a.btnId);
var btnIdArr = allCpns.map(a => a.id);
console.log(btnIdArr);
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
  for(let i=0; i<btnIdArr.length; i++){
    document.getElementById(btnIdArr[i]).addEventListener('click', function(){
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
