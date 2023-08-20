class Parallax {
   constructor() {
      this.myContainer = null;
      this.woman = null;
      this.man = null;
      this.fog = null;
   }


   init(container, img1, img2, img3) {
      this.myContainer = container;
      this.woman = img1;
      this.man = img2;
      this.fog = img3;
      this.parallax();
   }

   parallax() {
      if (this.myContainer) {
         const containerWidth = this.myContainer.offsetWidth;
         const containerHeight = this.myContainer.offsetHeight;

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

         const parallaxFunction = () => {
            const distX = coordXPercent - posX;
            const distY = coordYPercent - posY;

            posX = posX + (distX * speed);
            posY = posY + (distY * speed);

            this.man.style.cssText = `transform: translate(${posX / forMan}%,${posY / forMan}%);`;
            this.woman.style.cssText = `transform: translate(${posX / forWoman}%,${posY / forWoman}%);`;
            this.fog.style.cssText = `transform: translate(${posX / forFog}%,${posY / forFog}%);`;

            requestAnimationFrame(parallaxFunction);
         }

         this.myContainer.addEventListener("mousemove", function (el) {
            // Ноль на середине
            const coordX = el.pageX - containerWidth / 2;
            const coordY = el.pageY - containerHeight / 2;

            //Получаем проценты
            coordXPercent = coordX / containerWidth * 100;
            coordYPercent = coordY / containerHeight * 100;
         });

         parallaxFunction();
      }
   }
}

export default Parallax;
