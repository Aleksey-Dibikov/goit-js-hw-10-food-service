import menu from './menu.json';
import menuCardTpl from '../templates/restaurantMenu.hbs';

const menuRef = document.querySelector('.js-menu');

// const markup = menuCardTpl(menu);
menuRef.insertAdjacentHTML('beforeend', menuCardTpl(menu));