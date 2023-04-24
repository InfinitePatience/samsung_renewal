// main.js

window.addEventListener('load',()=> {
/* 주메뉴 */
//각 li에 마우스르 올리면 높이값 가져와서 풀다운 메뉴 내려오고 보여야 됨,
//키보드 탭으로 움직여야 됨.

const gnbMenu = document.querySelectorAll(".gnb>ul>li");
const headerWrap = document.querySelector(".header_wrap");


for(var i=0; i<gnbMenu.length; i++){
  gnbMenu[i].addEventListener('mouseover', e => {
    e.currentTarget.classList.add('on');
    var ht = e.currentTarget.children[1].offsetHeight;
    headerWrap.style.height = `${70+ht}px`;
  })
  gnbMenu[i].addEventListener('mouseout', e => {
    e.currentTarget.classList.remove('on');
    headerWrap.style.height = '70px';
  })

  gnbMenu[i].children[0].addEventListener('focus', e => {
    e.currentTarget.parentElement.classList.add('on');
    var ht = e.currentTarget.children[1].offsetHeight;
    headerWrap.style.height = `${70+ht}px`;
  })

  gnbMenu[i].children[0].addEventListener('blur', e => {
    e.currentTarget.parentElement.classList.remove('on');
    headerWrap.style.height = '70px';
  })
}


/* 검색박스 */
//검색버튼 누르면 검색박스 보이고
//닫기 버튼 누르면 검색박스 안보이고
const btnsrch = document.querySelector(".btn_srch");
const srchwrap = document.querySelector(".srch_wrap");
const btnsrchclose = document.querySelector(".btn_srch_close");

btnsrch.addEventListener('click', e => {
  e.preventDefault();
  srchwrap.classList.add("on");
})

btnsrchclose.addEventListener('click', e => {
  e.preventDefault();
  srchwrap.classList.remove("on");
})


/* 오토배너 */
const btnNext = document.querySelector('a.btn_next');
const btnPrev = document.querySelector('a.btn_prev');
const slide = document.querySelectorAll('li.slide'); //0,1,2
const slideRoll = document.querySelectorAll('.slide_roll li'); //0,1,2
let bnnNum = 0;
let lastNum = document.querySelectorAll('.slide_wrap > li').length - 1;



//top 버튼
//클릭하면 스크롤이 맨 위로 올라감
const topbtn = document.querySelector("a.btn_top")

topbtn.addEventListener("click", e => {
  e.preventDefault();
window.scroll({
  top:0,
  left:0,
  behavior:'smooth'
});
});
//스크롤을 움직이면 스크롤 위치에 따라서 탑버튼이 바뀜
window.addEventListener('scroll', () => {
  let scroll = document.querySelector('html').scrollTop;
  //let scroll = window.pageYOffset;
  console.log(scroll);
  if(scroll <= 0){
    topbtn.classList.remove("on","ab");
  }else if(scroll > 3200){
    topbtn.classList.add("on")
    topbtn.classList.add("ab")
  }else{
    topbtn.classList.remove("ab")
    topbtn.classList.add("on")
  }
})


//sub1
//문의유형 클릭 했을시 이미지, 배경 색상 변환
const step1_btn = document.querySelectorAll(".step1>ul>li>a")
// console.log(lis)

// step1_btn.addEventListener("click", e => {
//   e.preventDefault();
// for(let i=0; i<step1_btn.length; i++){
//   activation2(step1_btn,i)
// }  
// });

// function activation2(list,index){
//   for(let el of list){
//   el.classList.remove("on")
//   }
//   list[index].classList.add("on")
// }

step1_btn.forEach((all,i) =>{
  all.addEventListener("click", e => {
    e.preventDefault();
    for(let i=0; i<step1_btn.length; i++){
      step1_btn[i].style.backgroundColor = `transparent`;
      step1_btn[i].style.backgroundImage = `url(images/ico_inquiry_0${i+1}.png)`;
      step1_btn[i].style.color =`#333`;
    }
    all.style.backgroundColor = `#043285`;
    all.style.backgroundImage = `url(images/ico_inquiry_on_0${i+1}.png)`;
    all.style.color = `#fff`;
  })
})
});