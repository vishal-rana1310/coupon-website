const time = new Date();
const month = time.toLocaleString('default', { month: 'long'});
const year = time.getFullYear();
new ClipboardJS('.copy');
const allCoupons = [
  
  {
    id: "Aliexpress001",
    discount: "$4 OFF",
    title: "All User Offer – $4 Off On All Orders Above $5 | Limited Period Offer",
    expiry: "Expires on 31-12-2021",
    code: "EXP38",
    modalInfo: "Use this Coupon to get $4 Off on All Orders Above $5 | Limited Period Offer",
    buttonId: "0",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress"
  },
  {
    id: "Aliexpress002",
    discount: "$4 OFF",
    title: "$4 Off Your First Order",
    expiry: "Expires on 31-12-2021",
    code: "SUB4AE607",
    modalInfo: "Use this Coupon to get $4 Off Your First Order",
    buttonId: "1",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress"
  },
  {
    id: "Aliexpress003",
    discount: "$4 OFF",
    title: "$4 Off Any Order",
    expiry: "Expires on 31-12-2021",
    code: "SUB4AE609",
    modalInfo: "Use this Coupon to get $4 Off on Any Order",
    buttonId: "2",
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
    id: "Aliexpress005",
    discount: "$4 OFF",
    title: "$4 Off $5+ Orders",
    expiry: "Expires on 31-12-2021",
    code: "SUB4AE888",
    modalInfo: "Use this Coupon to get $4 Off $5+ Orders",
    buttonId: "4",
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
  {
    discount: "$3 OFF",
    expiry: "31-12-2021",
    title: "$3 Off Coupon With Aliexpress Email Sign Up",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress"
  },
  {
    discount: "60% OFF",
    expiry: "31-12-2021",
    title: "Upto 60% Off on Hot Products | No Minimum Order Value Required",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress"
  },
  {
    discount: "60% OFF",
    expiry: "31-12-2021",
    title: "Consumer Electronics – Get upto 60% Off + Free Shipping",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress"
  },
  {
    discount: "70% OFF",
    expiry: "31-12-2021",
    title: "Footwear Store – Get upto 70% Off On Men & Women Footwear",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress"
  },
  {
    discount: "60% OFF",
    expiry: "31-12-2021",
    title: "Latest Mobile Phone Offers – Get Upto 60% Off On Top Mobile Brands",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress"
  },
  {
    discount: "40% OFF",
    expiry: "31-12-2021",
    title: "Laptop Offer- Get Upto 40% Off On Top Laptop Brands | Limited Stock Available",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress"
  },
  {
    discount: "50% OFF",
    expiry: "31-12-2021",
    title: "Fashion Deal On Aliexpress – Upto 50% Off On Watches & Jewelry",
    success: "100% Success",
    actionUrl: "https://s.click.aliexpress.com/e/_Ammq3f",
    store: "aliexpress"
  },
  {
    discount: "70% OFF",
    expiry: "31-12-2021",
    title: "Upto 70% Off Deals on Home & Garden Products",
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









    
