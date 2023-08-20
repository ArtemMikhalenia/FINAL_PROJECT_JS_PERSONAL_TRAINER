//import
import Parallax from './parallax.js';
import Controller from './controller.js';
import Model from './model.js';
import View from './view.js';

const container = document.querySelector('.wrapper');
const woman = document.querySelector('.woman-image');
const man = document.querySelector('.man-image');
const fog = document.querySelector('.fog-image');

const parallax = new Parallax();
const myController = new Controller();
const myModel = new Model();
const myView = new View();

//init
myController.init(myModel, container);
myModel.init(myView);
myView.init(container);

parallax.init(container, woman, man, fog);
