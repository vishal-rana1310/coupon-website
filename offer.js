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
          el.style.display = "block";
        });
        dealCards.forEach(elem => {
          elem.style.display = "block";
        });
      }
    }else if(element === "deals-tab"){
      document.getElementById('deals-tab').addEventListener('click', showDeals);
      function showDeals(){
        couponCards.forEach(ele => {
          ele.style.display = "none";
        });
        dealCards.forEach(ele => {
          ele.style.display = "block";
        });
      }
    }else if(element === "coupons-tab"){
      document.getElementById('coupons-tab').addEventListener('click', showDeals);
      function showDeals(){
        dealCards.forEach(ele => {
          ele.style.display = "none";
        });
        couponCards.forEach(ele => {
          ele.style.display = "block";
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
        btnId: 'a',
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
        btnId: 'b',
        code: "YADSH9O",
        modalInfo: "Use this Coupon to get $4 Off on any Order at AliExpress",
        actionUrl: "https://www.google.com/"
    },
    {   
        type: "coupon",
        discount: "23% OFF",
        title: "23% ooff on order above $200",
        id: "003",
        btnId: 'c',
        code: "SHUBG",
        modalInfo: "Use this Coupon to get $4 Off on any Order at AliExpress",
        actionUrl: "https://www.google.com/"
    },
    {   
        type: "coupon",
        discount: "40% OFF",
        title: "40% ooff on order above $200",
        id: "004",
        btnId: 'd',
        code: "HVYSJHJIJ",
        modalInfo: "Use this Coupon to get $4 Off on any Order at AliExpress",
        actionUrl: "https://www.google.com/"
    }
    
]
const allDls = [
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
console.log(allCpns);
for(let i=0; i<allCpns.length; i++){
    document.querySelector('.allCoupons').innerHTML += `
    <div class="coupon-card">
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
        <p class="coupon-info">${allCpns[i].title}</p>
        <div class="button-code">
            <h6 class="couponCode">${allCpns[i].code}</h6>

            <div class="peel-btn">
                <a href="${allCpns[i].actionUrl}" target="_blank">
                    <button class="get-code" id="${allCpns[i].btnId}" data-bs-toggle="modal" data-bs-target="#exampleModal">Get Code</button>
                </a>
            </div>
        </div>
    </div>
    </div>
    `;
}


for(let i=0; i<allDls.length; i++){
    document.querySelector('.allCoupons').innerHTML += `
    <div class="deal-card">
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
                                <p class="coupon-info">${allDls[i].title}</p>
                                <a href="${allDls[i].actionUrl}">
                                    <button class="get-deal">Get Deal</button>
                                </a>
                            </div>
                        </div>
    `;
}

var idArr = allCpns.map(a => a.btnId);
console.log(idArr);
for(let i=0; i<idArr.length; i++){
    document.getElementById(idArr[i]).addEventListener('click', showMyModal);
    function showMyModal(){
        console.log("hello");
      document.querySelector('.modal-body').innerHTML = `
      <img src="images/amazon.jpg" alt="store-logo">
      <h6 class="mt-3 mb-3">${allCpns[i].title}</h6>
      <div class="copy-code">
          <span class="modal-code" id="modalCode">${allCpns[i].code}</span>
          <button class="copy" data-clipboard-target="#modalCode">Copy</button>
      </div>
      <p class="mt-2 mb-2">${allCpns[i].modalInfo}</p>
  
      <a href="#">
          <button class="store">Visit Store</button>
      </a>
      `;


    };
}

