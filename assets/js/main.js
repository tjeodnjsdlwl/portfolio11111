
// 메인 Visual
gsap.set('.main-visual .gorup-videowrap .video-wrap .video-inner',{
  xPercent:15,
  yPercent:-10,
  scale:0.7,
  opacity:0.8
})

gsap.set('body', {overflow:'hidden'})

const typed = new Typed('#intro-text', {
  strings: ['Hello, World!', 'Welcome to Typed.js!'],
  typeSpeed: 50,
  backSpeed: 30,
  startDelay: 1000,
  loop: false,
  showCursor: true,
  cursorChar: '|',
  onComplete: function() {
    console.log('Typing animation complete!');
    // Typed.js 애니메이션이 완료되면 GSAP 애니메이션 시작
    const visualTl = gsap.timeline();
    visualTl.to('.intro-wrap .inner', {
      opacity:0,
      ease: "none"
    });
    visualTl.to('.intro-wrap', {
      yPercent: -100,
      opacity:0,
      duration:0.7,
      ease: "none"
    });
    visualTl.to('body', {
      overflow:'visible'
    });
    visualTl.from('.main-visual .gorup-textwrap .visual-text-unit .text', {
      yPercent: 210,
      ease: "none"
    }, 'a');
    visualTl.from('.main-visual .gorup-videowrap .video-wrap .video-inner', {
      width: 0,
      ease: "none"
    }, 'a');
    visualTl.from('.main-visual .gorup-videowrap .video-text p', {
      yPercent: 70,
      ease: "none"
    }, 'a');
    visualTl.to('.main-visual .gorup-videowrap .video-wrap .black-bg',{
        xPercent:100,
        ease:"none",
    },'a+=0.3');
  }
});
// const typed = new Typed('#intro-text', {
//   strings: ['Hello, World!', 'Welcome to Typed.js!'],
//   typeSpeed: 50,
//   backSpeed: 30,
//   startDelay: 1000,
//   loop: false,
//   showCursor: true,
//   cursorChar: '|',
//   onComplete: function() {
//     console.log('Typing animation complete!');
//   }
// });


// // 메인 Visual
// gsap.set('.main-visual .gorup-videowrap .video-wrap .video-inner',{
//   xPercent:15,
//   yPercent:-10,
//   scale:0.7,
//   opacity:0.8
// })

// const visualTl = gsap.timeline()
// visualTl.from('.main-visual .gorup-textwrap .visual-text-unit .text',{
//   yPercent:210,
//   ease:"none",
// },'a')
// visualTl.from('.main-visual .gorup-videowrap .video-wrap .video-inner',{
//   width:0,
//   ease:"none",
// },'a')
// visualTl.from('.main-visual .gorup-videowrap .video-text p',{
//   yPercent:70,
//   ease:"none",
// },'a')

// visualTl.to('.main-visual .gorup-videowrap .video-wrap .black-bg',{
//   xPercent:100,
//   ease:"none",
// },'a+=0.3')


const visualTl2 = gsap.timeline({
  scrollTrigger:{
    trigger:".main-visual",
    start:"5% 0%",
    end:"77% 100%",
    // markers:true,
    scrub:0
  }
})

visualTl2.to('.main-visual .gorup-videowrap .video-wrap .video-inner',{
  xPercent:0,
  yPercent:18,
  opacity:1,
  scale:1
},'a')

visualTl2.to('.main-visual .gorup-textwrap .visual-text-unit:nth-child(2)',{
  xPercent:8,
},'a')



// project
const projectTxt = new SplitType('.sect-project .project-area .project-title h2', { types: 'words, chars', });


const projectTl = gsap.timeline({
  scrollTrigger:{
    trigger:".project-title",
    start:"30% 50%",
    end:"80% 50%",
    // markers:true,
    scrub:0,
  }
})
projectTl.to('.sect-project .project-area .project-title h2 .char',{
  y:0,
  stagger:0.1,
})



const projectBg = gsap.timeline({
  scrollTrigger:{
    trigger:".project-list-wrap",
    start:"0% 0%",
    end:"100% 100%",
    // markers:true,
    scrub:0,    
  }
})


// projectBg.to('.sect-project',{ backgroundColor: '#03c75a'})
// projectBg.to('.sect-project',{ backgroundColor: '#3e362e'})
// projectBg.to('.sect-project',{ backgroundColor: '#000'})
// projectBg.to('.sect-project',{ backgroundColor: '#E43C13'})
// projectBg.to('.sect-project',{ backgroundColor: '#141414'})
// projectBg.to('.sect-project',{ backgroundColor: '#100f20'})
// projectBg.to('.sect-project',{ backgroundColor: '#dc2f34'})
// projectBg.to('.sect-project',{ backgroundColor: '#FFFC29'})



const wrapBg = gsap.timeline({
  scrollTrigger:{
    trigger:".project-more",
    start:"-20% 50%",
    end:"-15% 50%",
    // markers:true,
    scrub:0,    
  }
})

// wrapBg.to('.sect-project',{ backgroundColor: '#000'})



const promoreTxt = new SplitType('.sect-project .project-more a .project-more-motion .split', { types: 'chars', });



const aboutTxt = new SplitType('.sect-about .group-top .about-top-area .right .about-top-text-unit', { types: 'chars', });
const aboutTl = gsap.timeline({
  scrollTrigger:{
    trigger:".sect-about",
    start:"10% 50%",
    end:"70% 100%",
    // markers:true,
    scrub:0,    
  }
})

aboutTl.from('.sect-about .group-top .about-top-area .left h2',{ opacity:0},'a')
aboutTl.from('.sect-about .group-top .about-top-area .left .about-top-img',{ paddingBottom:0},'a+=0.1')
aboutTl.to ('.sect-about .group-top .about-top-area .center .line',{ 
  height:"100%",
},'a+=0.2')
aboutTl.from('.sect-about .group-top .about-top-area .right .about-top-text-unit .char',{
  yPercent:100,
  stagger:0.1,
})




const aboutTl2 = gsap.timeline({
  scrollTrigger:{
    trigger:".sect-about",
    start:"80% 60%",
    end:"100% 40%",
    // markers:true,
    scrub:0,    
  }
})
aboutTl2.to('.sect-about .group-top .about-top-area .left .about-top-img',{
  y:69,
},'a')
aboutTl2.from('.sect-about .group-bottom .about-bottom-text-in',{
  yPercent:70,
},'a')



