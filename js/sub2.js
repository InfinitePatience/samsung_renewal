/* 주메뉴 */

window.addEventListener('load',()=> {
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


//top 버튼
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
  }else if(scroll > 600){
    topbtn.classList.add("on")
    topbtn.classList.add("ab")
  }else{
    topbtn.classList.remove("ab")
    topbtn.classList.add("on")
  }
})

});