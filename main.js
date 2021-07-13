const time = new Date();
const month = time.toLocaleString('default', { month: 'long'});
const year = time.getFullYear();
new ClipboardJS('.copy');
const allCoupons = [
  {
    id: "Aliexpress017",
    discount: "$4 OFF",
    title: "$4 Off Any Order",
    expiry: "Expires on 31-12-2021",
    code: "WA22",
    modalInfo: "Use this Coupon to get $4 Off Any Order",
    buttonId: "1522",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_A08RtR",
    store: "aliexpress"
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
    actionUrl: "https://s.click.aliexpress.com/e/_A08RtR",
    store: "aliexpress"
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
    actionUrl: "https://s.click.aliexpress.com/e/_A08RtR",
    store: "aliexpress"
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
    store: "aliexpress"
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
    store: "aliexpress"
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
    store: "aliexpress"
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
    store: "aliexpress"
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
    store: "aliexpress"
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
    store: "aliexpress"
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
    store: "aliexpress"
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
    store: "aliexpress"
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
    store: "aliexpress"
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
    store: "aliexpress"
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
    store: "aliexpress"
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
    store: "aliexpress"
  },
        
        
]
const allDeals = [
  {
    discount: "$50 Off",
    expiry: "31-12-2021",
    title: "Up to $50 Off Select Products",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress"
  },
  {
    discount: "85% Off",
    expiry: "31-12-2021",
    title: "Up to 85% Off",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress"
  },
  {
    discount: "$4 Off",
    expiry: "31-12-2021",
    title: "New Customers - Up To $4 In Coupons When You Join AliExpress",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress"
  },
  {
    discount: "50% OFF",
    expiry: "31-12-2021",
    title: "Up To 50% Off Outdoor Apparel and Gear",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress"
  },
  {
    discount: "50% OFF",
    expiry: "31-12-2021",
    title: "Up To 50% Off Home Improvement and Tools",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress"
  },
  {
    discount: "50% OFF",
    expiry: "31-12-2021",
    title: "Up To 50% Off Home Decor",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress"
  },
  {
    discount: "50% OFF",
    expiry: "31-12-2021",
    title: "Up To 50% Off Sale Items",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress"
  },
  {
    discount: "60% OFF",
    expiry: "31-12-2021",
    title: "Up To 60% Off Dolls",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress"
  },
  {
    discount: "HOT DEAL",
    expiry: "31-12-2021",
    title: "Latest Discounts From Aliexpress",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress"
  },
  {
    discount: "HOT DEAL",
    expiry: "31-12-2021",
    title: "Exclusive Savings",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress"
  },
      
]


var buttonId = allCoupons.map(a => a.id);

    for(let i=0; i < 8; i++) {
        document.querySelector('.home-coupons').innerHTML += `
        <div class="col-md-3">
        <div class="img-div">
          <img src="images/aliexpress.webp" alt="store">
          <i class="fa fa-heart-o" aria-hidden="true"></i>
        </div>
        <div class="coupon-content">
         <div class="star-rating mt-1 mb-1">
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star-half-o" aria-hidden="true"></i>
         </div>
         <p class="coupon-info">${allCoupons[i].title}</p>
          <div class="button-code">
            <h6 class="couponCode">${allCoupons[i].code}</h6>
    
              <div class="peel-btn">
                <a>
                  <button class="get-code" id="${allCoupons[i].id}" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick=gtag_report_conversion(\"${allCoupons[i].actionUrl}\")>Get Code</button>
                </a>
              </div>
          </div>
        </div>
    
    
      </div>
        `;
    
    };



for(let i=0; i<8; i++){
    document.querySelector('.home-deals').innerHTML += `
    <div class="col-md-3">
    <div class="img-div deal-img-div">
        <img src="images/aliexpress.webp" alt="store">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </div>
    <div class="coupon-content">
        <div class="star-rating mt-1 mb-1">
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star-half-o" aria-hidden="true"></i>
        </div>
        <p class="coupon-info">${allDeals[i].title}</p>
        <a>
        <button class="get-deal" onclick=gtag_report_conversion(\"${allDeals[i].actionUrl}\")>Get Deal</button>
        </a>
    </div>


    </div>
    `;
};


for(let i=0; i<buttonId.length; i++){
    document.getElementById(buttonId[i]).addEventListener('click', showModal);
    function showModal(){
      document.querySelector('.modal-body').innerHTML = `
      <img src="images/aliexpress.webp" alt="store-logo">
      <h6 class="mt-3 mb-3">${allCoupons[i].title}</h6>
      <div class="copy-code">
          <span class="modal-code" id="modalCode">${allCoupons[i].code}</span>
          <button class="copy" data-clipboard-target="#modalCode">Copy</button>
      </div>
      <p class="mt-2 mb-2">${allCoupons[i].modalInfo}</p>
  
      <a href="#">
          <button class="store">Visit Store</button>
      </a>
      `;


    };

    
  }









    
