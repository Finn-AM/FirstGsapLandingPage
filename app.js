const tl = gsap.timeline({defaults:{ease: 'power1.out'}})

let text = document.querySelector('.text');


  tl.to('.layer-1', {y: '-100vh', delay:.6})
    .to('.layer-2', {y: '-100vh', delay:.2},'<')
    .to('.layer-3', {y: '-100vh', delay:.1},'<')
    .to('.overlay', {y: '-100vh'})
    .from('.navbar a',{opacity: 0, stagger:.2 })
    .from('.pumpkin-wrap', {scale: '0', rotate:'1080' },'<')
    .to(text, {
      text: {
        value: "Halloween Party",
        newClass: "hero-main-text",
        speed:0.4,}
      });

    // << this for anime.js >> 

    // text.innerHTML = text.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    // anime.timeline()
    // .add({
    //     targets: '.text .letter',
    //     translateY: [200,0],
    //     translateZ: 0,
    //     opacity: [0,1],
    //     easing: "easeOutExpo",
    //     duration: 2000,
    //     delay: (el, i) => 4800 + 50 * i
    // });