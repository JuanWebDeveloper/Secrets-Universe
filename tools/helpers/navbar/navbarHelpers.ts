export const handleNavbarScroll = () => {
 const navbar: HTMLDivElement = document.querySelector('.navbar')!;

 if (window.scrollY >= 350) {
  navbar.classList.add('to-fixed');
 } else {
  navbar.classList.remove('to-fixed');
 }
};

export const handleBars = () => {
 const bars: HTMLDivElement = document.querySelector('.bars')!;
 const navigation: HTMLDivElement = document.querySelector('.navigation')!;

 if (bars.classList.contains('active')) {
  bars.classList.remove('active');
  navigation.classList.remove('active');
 } else {
  bars.classList.add('active');
  navigation.classList.add('active');
 }
};
