history.scrollRestoration = "manual"

// 스크롤 부드럽게
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  // console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)


// 메뉴
const menuTxt = new SplitType('.header .gnb-item a .menu-text', { types: 'words, chars', });


//메뉴스크롤
const  munuTl = gsap.timeline({
  scrollTrigger:{
    trigger:".wrap",
    start:"4% 10%",
    end:"4% 10%",
    // markers:true,
    scrub:0
  }
})

munuTl.to('.header .gnb',{
  y:-11.4,
  scale:0.8
})


// 마우스 커서
const mouseMotion = document.querySelector(".cursor-wrap");

document.addEventListener("mousemove", (e) => { // mousemove이벤트를 이용해 움

// 마우스의 좌표는 clientX와 clientY를 이용해 알수 있다. -> 브라우저 window의 좌표값 위치를 전달한다.
// pageX, pageY와는 다름.

const mouseX = e.clientX;
const mouseY = e.clientY;

mouseMotion.style.left = mouseX + 'px';
mouseMotion.style.top = mouseY + 'px';

});


$('.wrap').on('mousemove', function () {
  if ($(".cursor-wrap").hasClass('cursor-init')) {
  } else {
      $(".cursor-wrap").addClass('cursor-init');
  }
});

$(document).mouseleave(function () {
  $(".cursor-wrap").removeClass('cursor-init');
});



// 메인에서 프로젝트 마우스 on
// $('.project-content .group-project .project-item .thumb').on('mouseover', function () {
//   let titleText = $(this).closest('.project-item').find('.title').text();
  
//   $(".cursor-text").text(titleText);
//   $('.cursor-wrap').find('.cursor-text').css("--cursor-speed", " " + titleText.length + "s");

  
//   if ($(".cursor-wrap").hasClass('cursor-hover')) {
//     // hover한 자신의 형제의 자식에 title을 찾아야해. 
//   } else {
//       $(".cursor-wrap").addClass('cursor-hover');
//   }
// });

// $('.project-content .group-project .project-item .thumb').mouseleave(function () {
//   $(".cursor-wrap").removeClass('cursor-hover');
// });



// 메인에서 프로젝트 마우스 on
$('.sect-project .project-area .project-item .project-img').on('mouseover', function () {
  let titleText = $(this).closest('.project-item').find('.name').text();
  
  $(".cursor-text").text(titleText);
  $('.cursor-wrap').find('.cursor-text').css("--cursor-speed", " " + titleText.length/4 + "s");

  
  if ($(".cursor-wrap").hasClass('cursor-hover')) {
    // hover한 자신의 형제의 자식에 title을 찾아야해. 
  } else {
      $(".cursor-wrap").addClass('cursor-hover');
  }
});

$('.sect-project .project-area .project-item .project-img').mouseleave(function () {
  $(".cursor-wrap").removeClass('cursor-hover');
});