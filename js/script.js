//import
import Parallax from './parallax.js';

const container = document.querySelector('.wrapper');
const woman = document.querySelector('.woman-image');
const man = document.querySelector('.man-image');
const fog = document.querySelector('.fog-image');

const parallax = new Parallax();
parallax.init(container, woman, man, fog);

// parallax.parallax();