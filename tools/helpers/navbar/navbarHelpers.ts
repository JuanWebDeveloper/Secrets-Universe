export const handleNavbarScroll = (initialPosition: number) => {
 const navbar: HTMLDivElement = document.querySelector('.navbar')!;

 const applyFixedClass = () => {
  if (window.scrollY > initialPosition) {
   navbar.classList.add('to-fixed');
  } else {
   navbar.classList.remove('to-fixed');
  }
 };

 applyFixedClass();

 window.addEventListener('scroll', applyFixedClass);
};

export const handleBars = () => {
 const bars: HTMLDivElement = document.querySelector('.bars-menu')!;
 const navigation: HTMLDivElement = document.querySelector('.navigation')!;

 if (bars.classList.contains('bars-menu_open')) {
  closeNavigation();
 } else {
  bars.classList.add('bars-menu_open');
  navigation.classList.add('show-navigation');
 }
};

export const closeNavigation = () => {
 const bars: HTMLDivElement = document.querySelector('.bars-menu')!;
 const navigation: HTMLDivElement = document.querySelector('.navigation')!;

 bars.classList.remove('bars-menu_open');
 navigation.classList.remove('show-navigation');
};
