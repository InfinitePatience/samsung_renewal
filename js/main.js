// main.js

window.addEventListener('load',()=> {
/* 주메뉴 */
//각 li에 마우스를 올리면 높이값 가져와서 풀다운 메뉴 내려오고 보여야 됨,
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


// /* 오토배너 */
// const btnNext = document.querySelector('a.btn_next');
// const btnPrev = document.querySelector('a.btn_prev');
// const slide = document.querySelectorAll('li.slide'); //0,1,2
// const slideRoll = document.querySelectorAll('.slide_roll li'); //0,1,2
// let bnnNum = 0;
// let lastNum = document.querySelectorAll('.slide_wrap > li').length - 1;



// //next 버튼
// //li.slide.active  *배너가 바뀐다.
// //.slide_roll>ul>li.on>a  *롤링이 바뀐다.
// btnNext.addEventListener('click', e => {
//   e.preventDefault();
//   bnnNum++;
//   if(bnnNum>lastNum) bnnNum = 0;
//  activation(bnnNum,slide);
//  activation(bnnNum,slideRoll);

//   // slide.forEach(item => {
//   //   item.classList.remove('active');
//   // });
//   // slide[bnnNum].classList.add('active');

//   // slideRoll.forEach(idx => {
//   //   idx.classList.remove('on');
//   // });
//   // slideRoll[bnnNum].classList.add('on');
// });

// //양념장
// function activation(index,list){
//   for(let el of list){
//     el.classList.remove("on","active")
//   }
//   list[index].classList.add("on","active")
// }

// //0->1->2->0->1->2...
// //prev버튼
// btnPrev.addEventListener('click', e =>{
//   e.preventDefault();
//   bnnNum--;
//   if(bnnNum<0) bnnNum=lastNum;
//   activation(bnnNum,slide);
//   activation(bnnNum,slideRoll);

// })

// //오토배너 5초마다
// function autoBanner(){
//   //next 버튼 눌렀을 때
//   bnnNum++;
//   if(bnnNum>lastNum) bnnNum=0;
//   activation(bnnNum,slide);
//   activation(bnnNum,slideRoll);
//   autoBnn = setTimeout(autoBanner,5000); //재귀함수
// }

// let autoBnn = setTimeout(autoBanner,5000); //최초호출

// // 배너 재생 멈춤 버튼
// // 배너 멈추고 이미지 바뀌고
// // 배너 재생 이미지 바뀌고
// let flag = true;

// const btnPlay = document.querySelector("a.btn_play")

// btnPlay.addEventListener('click', e => {
// e.preventDefault();
// // btnPlay.classList.toggle('on');
// if(flag){//멈춤
// btnPlay.classList.add('on');
// clearTimeout(autoBnn);  //clearTimeout 은 setTimeout을 취소하겠다는 메서드
// flag = false;
// }else{//재생
// btnPlay.classList.remove('on');
// autoBnn = setTimeout(autoBanner,5000);
// flag = true;
// }
// });

// // 롤링버튼 클릭
// // 해당 배너로 이동
// for(let i=0; i<slideRoll.length; i++){
//   slideRoll[i].addEventListener('click', e => {
//     e.preventDefault();
//     activation(i,slide);
//     activation(i,slideRoll);
//   })
// }

//top 버튼
//클릭하면 스크롤이 맨 위로 올라감
const topbtn = document.querySelector("a.btn_top")
const topbtn1 = document.querySelector("a.btn_top1")

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
    topbtn1.classList.remove("on","ab");
  }else if(scroll > 4340){
    topbtn.classList.add("on")
    topbtn.classList.add("ab")
    topbtn1.classList.add("on")
    topbtn1.classList.add("ab")
  }else{
    topbtn.classList.remove("ab")
    topbtn.classList.add("on")
    topbtn1.classList.remove("ab")
    topbtn1.classList.add("on")
  }
});

});