const navbar: HTMLDivElement = document.querySelector('.navbar')!;
const bars: HTMLDivElement = document.querySelector('.bars-menu')!;
const navigation: HTMLDivElement = document.querySelector('.navigation')!;

export const handleNavbarScroll = () =>
 window.scrollY >= 350 ? navbar.classList.add('to-fixed') : navbar.classList.remove('to-fixed');

export const handleBars = () => {
 if (bars.classList.contains('bars-menu_open')) {
  closeNavigation();
 } else {
  bars.classList.add('bars-menu_open');
  navigation.classList.add('show-navigation');
 }
};

export const closeNavigation = () => {
 bars.classList.remove('bars-menu_open');
 navigation.classList.remove('show-navigation');
};
