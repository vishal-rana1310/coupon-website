new ClipboardJS('.copy');
const allCoupons = [
        {   
            type: "coupon",
            discount: "20% OFF",
            title: "20% ooff on order above $200",
            id: "001",
            code: "YhhhI89O",
            modalInfo: "Use this Coupon to get $4 Off on any Order at AliExpress",
            actionUrl: "https://www.google.com/"
        },
        {   
            type: "coupon",
            discount: "10% OFF",
            title: "10% ooff on order above $200",
            id: "002",
            code: "YADSH9O",
            modalInfo: "Use this Coupon to get $4 Off on any Order at AliExpress",
            actionUrl: "https://www.google.com/"
        },
        {   
            type: "coupon",
            discount: "23% OFF",
            title: "23% ooff on order above $200",
            id: "003",
            code: "SHUBG",
            modalInfo: "Use this Coupon to get $4 Off on any Order at AliExpress",
            actionUrl: "https://www.google.com/"
        },
        {   
            type: "coupon",
            discount: "40% OFF",
            title: "40% ooff on order above $200",
            id: "004",
            code: "HVYSJHJIJ",
            modalInfo: "Use this Coupon to get $4 Off on any Order at AliExpress",
            actionUrl: "https://www.google.com/"
        }
        
]
const allDeals = [
    {   
        type: "deal",
        discount: "10% OFF",
        title: "10% ooff on order above $100",
        actionUrl: "https://www.google.com/"
    },
    {   
        type: "deal",
        discount: "20% OFF",
        title: "20% ooff on order above $100",
        actionUrl: "https://www.google.com/"
    },
    {   
        type: "deal",
        discount: "30% OFF",
        title: "30% ooff on order above $100",
        actionUrl: "https://www.google.com/"
    },
    {   
        type: "deal",
        discount: "40% OFF",
        title: "40% ooff on order above $100",
        actionUrl: "https://www.google.com/"
    }
]


var buttonId = allCoupons.map(a => a.id);

    for(let i=0; i < 4; i++) {
        document.querySelector('.home-coupons').innerHTML += `
        <div class="col-md-3">
        <div class="img-div">
          <img src="images/store-2.jpg" alt="store">
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



for(let i=0; i<4; i++){
    document.querySelector('.home-deals').innerHTML += `
    <div class="col-md-3">
    <div class="img-div">
        <img src="images/store-img.jpg" alt="store">
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
      <img src="images/amazon.jpg" alt="store-logo">
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









    
