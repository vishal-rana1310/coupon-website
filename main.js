const time = new Date();
const month = time.toLocaleString('default', { month: 'long'});
const year = time.getFullYear();
new ClipboardJS('.copy');
const allCoupons = [
        {   
            type: "coupon",
            discount: "20% OFF",
            title: "All User Offer – $4 Off On All Orders Above $5 | Limited Period Offer",
            id: "Aliexpress001",
            code: "EXP38",
            modalInfo: "Use this Coupon to get $4 Off on Orders Above $5",
            actionUrl: "https://s.click.aliexpress.com/e/_A08RtR"
        },
        {   
            type: "coupon",
            discount: "10% OFF",
            title: "$3.39 Off Any Order",
            id: "Aliexpress002",
            code: "MISSOU",
            modalInfo: "Use this Coupon to get $3.39 Off on any Order at AliExpress",
            actionUrl: "https://s.click.aliexpress.com/e/_A08RtR"
        },
        {   
            type: "coupon",
            discount: "23% OFF",
            title: "$4 Off Any Order",
            id: "Aliexpress003",
            code: "AEOFF176",
            modalInfo: "Use this Coupon to get $4 Off on any Order at AliExpress",
            actionUrl: "https://s.click.aliexpress.com/e/_A08RtR"
        },
        {   
            type: "coupon",
            discount: "23% OFF",
            title: "$4 Off Sitewide",
            id: "Aliexpress004",
            code: "ALIYOUTUBE1",
            modalInfo: "Use this Coupon to get $4 Off Sitewide",
            actionUrl: "https://s.click.aliexpress.com/e/_A08RtR"
        },
        {   
            type: "coupon",
            discount: "23% OFF",
            title: "$4 Off Your Order",
            id: "Aliexpress005",
            code: "AEOFF154",
            modalInfo: "Use this Coupon to get $4 Off",
            actionUrl: "https://s.click.aliexpress.com/e/_A08RtR"
        },
        {   
            type: "coupon",
            discount: "23% OFF",
            title: "Up to 25% Off Sitewide For First Time User",
            id: "Aliexpress006",
            code: "EXP60",
            modalInfo: "Use this Coupon to get 25% Off Sitewide For First Time User",
            actionUrl: "https://s.click.aliexpress.com/e/_A08RtR"
        },
        {   
            type: "coupon",
            discount: "23% OFF",
            title: "$4 Discount For Order Over $5 For New Customer",
            id: "Aliexpress007",
            code: "SAHL1",
            modalInfo: "Use this Coupon to get $4 Discount For Order Over $5 For New Customer",
            actionUrl: "https://s.click.aliexpress.com/e/_A08RtR"
        },
        {   
            type: "coupon",
            discount: "23% OFF",
            title: "$15 Off Orders Over $100+ at Aliexpress",
            id: "Aliexpress008",
            code: "BONUS10",
            modalInfo: "Use this Coupon to get $15 Off Orders Over $100+ at Aliexpress",
            actionUrl: "https://s.click.aliexpress.com/e/_A08RtR"
        },
        {   
            type: "coupon",
            discount: "23% OFF",
            title: "$4 Off any Order at Aliexpress",
            id: "Aliexpress009",
            code: "ZW55",
            modalInfo: "Use this Coupon to get $4 Off any Order at Aliexpress",
            actionUrl: "https://s.click.aliexpress.com/e/_A08RtR"
        },
        {   
            type: "coupon",
            discount: "23% OFF",
            title: "$7 Discount for order over $50 at Ali Express",
            id: "Aliexpress010",
            code: "ALIEXPRESSBF7",
            modalInfo: "Use this Coupon to get $7 Discount for order over $50 at Ali Express",
            actionUrl: "https://s.click.aliexpress.com/e/_A08RtR"
        },
        {   
            type: "coupon",
            discount: "23% OFF",
            title: "$4 Discount For Order Over $5 For New Customer",
            id: "Aliexpress011",
            code: "P88YZZMV",
            modalInfo: "Use this Coupon to get $4 Discount For Order Over $5 For New Customer",
            actionUrl: "https://s.click.aliexpress.com/e/_A08RtR"
        },
        {   
            type: "coupon",
            discount: "23% OFF",
            title: "Extra $12 Off Orders over $110 Sitewide",
            id: "Aliexpress012",
            code: "ALIEXPRESSBF12",
            modalInfo: "Use this Coupon to get Extra $12 Off Orders over $110 Sitewide",
            actionUrl: "https://s.click.aliexpress.com/e/_A08RtR"
        },
        {   
            type: "coupon",
            discount: "23% OFF",
            title: "$5 Off over $10+ with Paypal",
            id: "Aliexpress013",
            code: "PAYPAL5",
            modalInfo: "Use this Coupon to get $5 Off over $10+ with Paypal",
            actionUrl: "https://s.click.aliexpress.com/e/_A08RtR"
        },
        
        
]
const allDeals = [
      {
        title: "New Customers - Up To $4 In Coupons When You Join AliExpress",
        actionUrl: "https://s.click.aliexpress.com/e/_A08RtR",
      },
      {
        discount: "50% OFF",
        expiry: "31-12-2021",
        title: "Up To 50% Off Outdoor Apparel and Gear",
        success: "100% Success",
        actionUrl: "https://s.click.aliexpress.com/e/_A08RtR",
        store: "aliexpress"
      },
      {
        discount: "50% OFF",
        expiry: "31-12-2021",
        title: "Up To 50% Off Home Improvement and Tools",
        success: "100% Success",
        actionUrl: "https://s.click.aliexpress.com/e/_A08RtR",
        store: "aliexpress"
      },
      {
        discount: "50% OFF",
        expiry: "31-12-2021",
        title: "Up To 50% Off Home Decor",
        success: "100% Success",
        actionUrl: "https://s.click.aliexpress.com/e/_A08RtR",
        store: "aliexpress"
      },
      {
        discount: "50% OFF",
        expiry: "31-12-2021",
        title: "Up To 50% Off Sale Items",
        success: "100% Success",
        actionUrl: "https://s.click.aliexpress.com/e/_A08RtR",
        store: "aliexpress"
      },
      {
        discount: "60% OFF",
        expiry: "31-12-2021",
        title: "Up To 60% Off Sale Items",
        success: "100% Success",
        actionUrl: "https://s.click.aliexpress.com/e/_A08RtR",
        store: "aliexpress"
      },
      {
        discount: "HOT DEAL",
        expiry: "31-12-2021",
        title: "Latest Discounts From Aliexpress",
        success: "100% Success",
        actionUrl: "https://s.click.aliexpress.com/e/_A08RtR",
        store: "aliexpress"
      },
      {
        discount: "HOT DEAL",
        expiry: "31-12-2021",
        title: "Exclusive Savings",
        success: "100% Success",
        actionUrl: "https://s.click.aliexpress.com/e/_A08RtR",
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
                <a href="${allCoupons[i].actionUrl}" target="_blank">
                  <button class="get-code" id="${allCoupons[i].id}" data-bs-toggle="modal" data-bs-target="#exampleModal">Get Code</button>
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
        <a href="${allDeals[i].actionUrl}" target="_blank">
        <button class="get-deal">Get Deal</button>
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









    
