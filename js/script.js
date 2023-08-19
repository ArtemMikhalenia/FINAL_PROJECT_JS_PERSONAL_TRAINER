//parallax
const parallaxBlock = document.querySelector('.wrapper');

if (parallaxBlock) {
	const woman = document.querySelector('.woman-image');
	const man = document.querySelector('.man-image');
	const fog = document.querySelector('.fog-image');

	//коэффициенты
	const forMan = 30;
	const forWoman = 20;
	const forFog = 40;

	//Скорость анимации
	const speed = 0.05;

	//Объявление переменных
	let posX = 0;
	let posY = 0;
	let coordXPercent = 0;
	let coordYPercent = 0;

	function parallaxFunction() {
		const distX = coordXPercent - posX;
		const distY = coordYPercent - posY;

		posX = posX + (distX * speed);
		posY = posY + (distY * speed);

		man.style.cssText = `transform: translate(${posX / forMan}%,${posY / forMan}%);`;
		woman.style.cssText = `transform: translate(${posX / forWoman}%,${posY / forWoman}%);`;
		fog.style.cssText = `transform: translate(${posX / forFog}%,${posY / forFog}%);`;

		requestAnimationFrame(parallaxFunction);
	}

	parallaxFunction();

	parallaxBlock.addEventListener("mousemove", function (e) {

		//Получение ширины и высоты блока
		const parallaxBlockWidth = parallaxBlock.offsetWidth;
		const parallaxBlockHeigth = parallaxBlock.offsetHeight;
		//Ноль на середине
		const coordX = e.pageX - parallaxBlockWidth / 2;
		const coordY = e.pageY - parallaxBlockHeigth / 2;

		//Получаем проценты
		coordXPercent = coordX / parallaxBlockWidth * 100;
		coordYPercent = coordY / parallaxBlockHeigth * 100;
	});
}

