//компоненты начального блока
const StartHeader = {
	render: () => {
		return `
	<header class="header">
	    <div class="logo">
	        <img src="./images/content/logo.png" alt="logo">
	    </div>
	</header>
	`;
	}
}

const StartMainTitle = {
	render: () => {
		return `
	<h1 class="animate__animated animate__bounceInLeft"><span>Добро пожаловать!</span></h1>
	`;
	}
}

const ButtonStart = {
	render: () => {
		return `
	<div class="button-start">
	    <button class="btn-start animate__animated animate__bounceInLeft">
	        <span>Начать</span>
	        <span>
	            <svg width="66px" height="43px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	                <g id="arrow" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
	                    <path class="one" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF"></path>
	                    <path class="two" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF"></path>
	                    <path class="three" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF"></path>
	                </g>
	            </svg>
	        </span>
	    </button>
	</div>
	`;
	}
}

const StartModal = {
	render: () => {
		return `
	<div class="modal-container">
	    <div class="modal animate__animated animate__slideInDown modal_closed" id="modal">
	        <div class="modal__header">
	            <img src="./images/content/logo.png" alt="logo">
	            <a href="#" class="modal__close" id="modal-close" title="Закрыть модальное окно">
	                <img src="./images/icons/x.svg" alt="x-icon">
	            </a>
	        </div>
	        <h2 class="modal-header login">Авторизация</h2>
	        <h2 class="modal-header register hide">Регистрация</h2>
	        <form class="modal__form">
	            <label class="input-label" for="email">Введите e-mail: <abbr title="Это поле обязательно для заполнения" aria-label="required">*</abbr>
	            </label>
	            <input type="email" id="email" autocomplete="on" class="modal__email" placeholder="E-mail" title="Введите корректный e-mail" required>
	            <label class="input-label" for="password">Введите пароль: <abbr title="Это поле обязательно для заполнения" aria-label="required">*</abbr>
	            </label>
	            <input type="password" id="password" autocomplete="off" class="modal__password" title="Пароль должен содержать как минимум 6 символов" placeholder="Пароль" required>
	            <input type="button" id="submit-login" class="form-submit-login" value="Войти">
	            <input type="button" id="submit-register" class="form-submit-register hide" value="Зарегистрироваться">
	            <div class="form-error"></div>
	        </form>
	        <div class="modal__footer">
	            <div class="form-register__block">
	                <p>Отсутствует аккаунт?
	                    <span id="form-register">Зарегистрируйся</span>
	                </p>
	            </div>
	            <div class="form-login__block hide">
	                <p>Уже есть аккаунт?
	                    <span id="form-login">Заходи</span>
	                </p>
	            </div>
	        </div>
	        <div class="successful-registration-block hidden">
	            <p>Поздравляем! Регистрация прошла успешно</p>
	            <button id="successful-registration-btn">Войти в личный кабинет</button>
	        </div>
	    </div>
	</div>
	`;
	}
};

const StartModalOverlay = {
	render: () => {
		return `
	<div class="modal__overlay modal_closed"></div>
	`;
	}
};

const ParallaxImages = {
	render: () => {
		return `
	<div class="parallax-images">
	    <div class="fog-image">
	        <img src="./images/backgrounds/fog.png" alt="fog">
	    </div>
	    <div class="man-image">
	        <img src="./images/content/man.png" alt="man">
	    </div>
	    <div class="woman-image">
	        <img src="./images/content/woman.png" alt="woman">
	    </div>
	</div>
	`;
	}
};

const LoginBtn = {
	render: () => {
		return `
	<a href="#mainpage" id="submit-login" class="form-submit-login">Войти</a>
	`;
	}

}

//компоненты основного блока

//<MAIN>====================================================
const SidebarMain = {
	render: () => {
		return `
    <aside class="sidebar">
        <div class="sidebar__logo">
            <img src="./images/content/logo-white.png" alt="logo-white">
        </div>
        <nav>
            <ul>
                <li class="account-section-btn">
                    <a href="#mainpage" class="sidebar__link active">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.06 5.32771V5.33V7.23C10.06 8.23613 9.79557 8.92232 9.35895 9.35895C8.92232 9.79557 8.23613 10.06 7.23 10.06H5.33C4.32387 10.06 3.63768 9.79557 3.20105 9.35895C2.76443 8.92232 2.5 8.23613 2.5 7.23V5.33C2.5 4.32387 2.76441 3.63797 3.20191 3.20145C3.63959 2.76474 4.32828 2.5 5.34 2.5H7.24C8.24631 2.5 8.93213 2.76451 9.3673 3.20066C9.80228 3.63661 10.0646 4.322 10.06 5.32771ZM10.06 16.7677V16.77V18.67C10.06 19.6761 9.79557 20.3623 9.35895 20.7989C8.92232 21.2356 8.23613 21.5 7.23 21.5H5.33C4.32387 21.5 3.63797 21.2356 3.20145 20.7981C2.76474 20.3604 2.5 19.6717 2.5 18.66V16.76C2.5 15.7539 2.76441 15.068 3.20191 14.6314C3.63959 14.1947 4.32828 13.93 5.34 13.93H7.24C8.24631 13.93 8.93184 14.1945 9.36691 14.6315C9.80196 15.0685 10.0646 15.7564 10.06 16.7677ZM16.77 2.5H18.67C19.6761 2.5 20.3623 2.76443 20.7989 3.20105C21.2356 3.63768 21.5 4.32387 21.5 5.33V7.23C21.5 8.23613 21.2356 8.92232 20.7989 9.35895C20.3623 9.79557 19.6761 10.06 18.67 10.06H16.77C15.7639 10.06 15.0777 9.79557 14.6411 9.35895C14.2044 8.92232 13.94 8.23613 13.94 7.23V5.33C13.94 4.32387 14.2044 3.63768 14.6411 3.20105C15.0777 2.76443 15.7639 2.5 16.77 2.5ZM16.77 13.93H18.67C19.6761 13.93 20.3623 14.1944 20.7989 14.6311C21.2356 15.0677 21.5 15.7539 21.5 16.76V18.66C21.5 19.6661 21.2356 20.3523 20.7989 20.7889C20.3623 21.2256 19.6761 21.49 18.67 21.49H16.77C15.7639 21.49 15.0777 21.2256 14.6411 20.7889C14.2044 20.3523 13.94 19.6661 13.94 18.66V16.76C13.94 15.7539 14.2044 15.0677 14.6411 14.6311C15.0777 14.1944 15.7639 13.93 16.77 13.93Z" fill="#475569" stroke="#475569" />
                        </svg><span>Аккаунт</span>
                    </a>
                </li>
                <li class="training-section-btn">
                    <a href="#trainingpage" class="sidebar__link">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.82 12H14.18M22.5 14.5V9.5M1.5 14.5V9.5M17.18 18C19.58 18 20.18 16.65 20.18 15V9C20.18 7.35 19.58 6 17.18 6C14.78 6 14.18 7.35 14.18 9V15C14.18 16.65 14.78 18 17.18 18ZM6.82 18C4.42 18 3.82 16.65 3.82 15V9C3.82 7.35 4.42 6 6.82 6C9.22 6 9.82 7.35 9.82 9V15C9.82 16.65 9.22 18 6.82 18Z" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg><span>Тренировка</span>
                    </a>
                </li>
                <li class="dietplan-section-btn">
                    <a href="#dietpage" class="sidebar__link">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.93 6.76L18.56 20.29C18.4431 20.7793 18.164 21.2146 17.7681 21.5251C17.3723 21.8356 16.8831 22.0029 16.38 22H3.24001C1.73001 22 0.650007 20.52 1.10001 19.07L5.31001 5.55C5.45068 5.0915 5.73419 4.68994 6.11915 4.40391C6.50412 4.11789 6.97042 3.96235 7.45001 3.96H19.75C20.7 3.96 21.49 4.54 21.82 5.34C22.01 5.77 22.05 6.26 21.93 6.76Z" stroke="#475569" stroke-width="1.5" stroke-miterlimit="10" />
                            <path d="M16 22H20.78C22.07 22 23.08 20.91 22.99 19.62L22 6M9.68 6.38L10.72 2.06M16.38 6.39L17.32 2.05M7.7 12H15.7M6.7 16H14.7" stroke="#475569" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg><span>База продуктов</span></a>
                </li>
                <li class="excersises-database">
                    <a href="#excersisesdatabase" class="sidebar__link">
						  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
											  width="24px" height="24px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">
										 <g id="data">
											 <path fill="#475569" d="M16,0C9.256,0,2,2.033,2,6.5v19C2,29.965,9.256,32,16,32c6.743,0,14-2.035,14-6.5v-19
												 C30,2.033,22.742,0,16,0z M28,25.5c0,2.484-5.373,4.5-12,4.5c-6.628,0-12-2.016-12-4.5v-3.736C6.066,23.893,11.05,25,16,25
												 c4.95,0,9.934-1.107,12-3.236V25.5z M28,19.5h-0.004c0,0.01,0.004,0.021,0.004,0.031C28,22,22.627,24,16,24c-6.627,0-12-2-12-4.469
												 c0-0.01,0.004-0.021,0.004-0.031H4v-3.736C6.066,17.893,11.05,19,16,19c4.95,0,9.934-1.107,12-3.236V19.5z M28,13.5h-0.004
												 c0,0.01,0.004,0.021,0.004,0.031C28,16,22.627,18,16,18c-6.627,0-12-2-12-4.469c0-0.01,0.004-0.021,0.004-0.031H4v-3.436
												 C6.621,12.061,11.425,13,16,13c4.575,0,9.379-0.939,12-2.936V13.5z M16,11C9.372,11,4,8.984,4,6.5C4,4.014,9.372,2,16,2
												 c6.627,0,12,2.014,12,4.5C28,8.984,22.627,11,16,11z"/>
											 <circle fill="#475569" cx="25" cy="26" r="1"/>
											 <circle fill="#475569" cx="25" cy="20" r="1"/>
											 <circle fill="#475569" cx="25" cy="14" r="1"/>
										 </g>
										 </svg>
                        <span>База упражнений</span></a>
                </li>
                <li class="progress-section-btn">
                    <a href="#progresspage" class="sidebar__link">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 22H22" stroke="#475569" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.75 4V22H14.25V4C14.25 2.9 13.8 2 12.45 2H11.55C10.2 2 9.75 2.9 9.75 4ZM3 10V22H7V10C7 8.9 6.6 8 5.4 8H4.6C3.4 8 3 8.9 3 10ZM17 15V22H21V15C21 13.9 20.6 13 19.4 13H18.6C17.4 13 17 13.9 17 15Z" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg><span>Прогресс</span></a>
                </li>
            </ul>
        </nav>
        <a href="#startpage" class="btn-logout" id="btn-logout">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <g id="_109_log-out-02" data-name="109 log-out-02">
                    <path d="M8.88,22.71l-5.29-5.3a2,2,0,0,1,0-2.82l5.29-5.3,1.41,1.42L5,16l5.29,5.29Z" />
                    <rect x="4.59" y="15" width="14" height="2" />
                    <path d="M26,29H18V27h8a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1H18V3h8a3,3,0,0,1,3,3V26A3,3,0,0,1,26,29Z" />
                </g>
            </svg><span>Выйти</span>
        </a>
    </aside>
    `;
	}
}

const ContentMain = {
	render: () => {
		return `
	    <div class="mainblock__body">
	        <header class="mainblock__header">
	            <h1 class="animate__animated animate__pulse">"Если тяжело, значит развиваешься!"</h1>
	        </header>
	        <div class="mainblock__content" id="main-content">
	            <h2 class="animate__animated animate__backInLeft">Информация о пользователе</h2>
	            <button class="edit-info-btn animate__animated animate__slideInDown">Изменить данные</button>
	            <div class="user-modal-container">
	                <div class="user-modal animate__animated animate__slideInDown modal_closed" id="user-modal">
	                    <div class="user-modal__header">
	                        <button class="user-modal__close" id="user-modal-close" title="Закрыть модальное окно">
	                            <img src="./images/icons/x_training.svg" alt="x-icon">
	                        </button>
	                    </div>
	                    <form class="user-modal__form">
	                        <div class="user-modal__common-info">
	                            <label class="input-label" for="user-modal__fullName">ФИО:</label>
	                            <input type="text" id="user-modal__fullName" autocomplete="off" class="user-modal__name" required value="">
	
	                            <label class="input-label" for="user-modal__birthday">День рождения:</label>
	                            <input type="text" id="user-modal__birthday" autocomplete="off" class="user-modal__birthday" value="" required>
	
	                            <label class="input-label" for="user-modal__gender">Пол:</label>
	                            <input type="text" id="user-modal__gender" autocomplete="off" class="user-modal__gender" value="" required>
	                        </div>
	                        <div class="user-modal__physical-info">
	                            <label class="input-label" for="user-modal__weight">Вес (кг):</label>
	                            <input type="text" id="user-modal__weight" autocomplete="off" class="user-modal__weight" value="" required>
	
	                            <label class="input-label" for="user-modal__height">Рост (см):</label>
	                            <input type="text" id="user-modal__height" autocomplete="off" class="user-modal__height" value="" required>
	                        </div>
	                        <div class="user-modal__medical-info">
	                            <label class="input-label" for="user-modal__medicalInfo">Медицинские противопоказания:</label>
	                            <input type="text" id="user-modal__medicalInfo" autocomplete="off" class="user-modal__medicalInfo" value="" required>
	                        </div>
	                        <div class="user-modal__training-info">
	                            <label class="input-label" for="user-modal__goal">Цель тренировок:</label>
	                            <input type="text" id="user-modal__goal" autocomplete="off" class="user-modal__goal" value="" required>
	                        </div>
	                        <div class="user-modal__contacts-info">
	                            <label class="input-label" for="user-modal__phone">Телефон:</label>
	                            <input type="tel" id="user-modal__phone" autocomplete="off" class="user-modal__phone" value="" required>
	                            <label class="input-label" for="user-modal__email">Почта:</label>
	                            <input type="email" id="user-modal__email" autocomplete="off" class="user-modal__email" value="" required>
	                        </div>
	                        <div class="user-modal__achievements-info">
	                            <label class="input-label" for="user-modal__achievements">Достижения:</label>
	                            <input type="text" id="user-modal__achievements" autocomplete="off" class="user-modal__achievements" value="" required>
	                        </div>
	                        <input type="button" id="user-modal__save" class="user-modal__save" value="Сохранить">
	                    </form>
	                </div>
	            </div>
	            <div class="user-info">
	            </div>
	        </div>
	    </div>
	    `;
	}
}

const UserInfo = {
	render: (fullName, birthday, gender, weight, height, medicalInfo, goal, phone, email, achievements) => {
		return `
	    <div class="animate__animated animate__zoomIn">
	        <div class="user-info__block common-info">
	            <div class="user-info__header">
	                <h3>Общая информация</h3>
	            </div>
	            <div class="user-info__content">
	                <div class="name-block">ФИО: <span id="name-block__name">${fullName}</span></div>
	                <div class="birthday-block">Дата рождения: <span id="name-block__birthday">${birthday}</span>
	                </div>
	                <div class="gender-block">Пол: <span>${gender}</span></div>
	            </div>
	            <img src="./images/backgrounds/bg1.svg" alt="bg1">
	        </div>
	    </div>
	    <div class="animate__animated animate__zoomIn">
	        <div class="user-info__block physical-info">
	            <div class="user-info__header">
	                <h3>Физические показатели</h3>
	            </div>
	            <div class="user-info__content">
	                <div class="weight-block">Вес (кг): <span>${weight}</span></div>
	                <div class="height-block">Рост (см): <span>${height}</span></div>
	            </div>
	            <img src="./images/backgrounds/bg2.svg" alt="bg2">
	        </div>
	    </div>
	    <div class="animate__animated animate__zoomIn">
	        <div class="user-info__block medical-info">
	            <div class="user-info__header">
	                <h3>Медицинские противопоказания</h3>
	            </div>
	            <div class="user-info__content">
	                <div class="medical-block">Болезни: <span>${medicalInfo}</span></div>
	            </div>
	            <img src="./images/backgrounds/bg3.svg" alt="bg3">
	        </div>
	    </div>
	    <div class="animate__animated animate__zoomIn">
	        <div class="user-info__block training-info">
	            <div class="user-info__header">
	                <h3>Цель тренировок</h3>
	            </div>
	            <div class="user-info__content">
	                <div class="goal-block">Цель: <span>${goal}</span></div>
	            </div>
	            <img src="./images/backgrounds/bg4.svg" alt="bg4">
	        </div>
	    </div>
	    <div class="animate__animated animate__zoomIn">
	        <div class="user-info__block contacts-info">
	            <div class="user-info__header">
	                <h3>Контактные данные</h3>
	            </div>
	            <div class="user-info__content">
	                <div class="contact-block phone">Телефон: <span>${phone}</span></div>
	                <div class="contact-block email">E-mail: <span>${email}</span></div>
	            </div>
	            <img src="./images/backgrounds/bg5.svg" alt="bg5">
	        </div>
	    </div>
	    <div class="animate__animated animate__zoomIn">
	        <div class="user-info__block achievements-info">
	            <div class="user-info__header">
	                <h3>Личные достижения</h3>
	            </div>
	            <div class="user-info__content">
	                <div class="achievements-block">Достижения: <span>${achievements}</span>
	                </div>
	            </div>
	            <img src="./images/backgrounds/bg6.svg" alt="bg6">
	        </div>
	    </div>`;
	}
}

//<TRAINING>================================================
const SidebarTraining = {
	render: () => {
		return `
	        <aside class="sidebar">
	            <div class="sidebar__logo">
	                <img src="./images/content/logo-white.png" alt="logo-white">
	            </div>
	            <nav>
	                <ul>
	                    <li class="account-section-btn">
	                        <a href="#mainpage" class="sidebar__link">
	                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	                                <path d="M10.06 5.32771V5.33V7.23C10.06 8.23613 9.79557 8.92232 9.35895 9.35895C8.92232 9.79557 8.23613 10.06 7.23 10.06H5.33C4.32387 10.06 3.63768 9.79557 3.20105 9.35895C2.76443 8.92232 2.5 8.23613 2.5 7.23V5.33C2.5 4.32387 2.76441 3.63797 3.20191 3.20145C3.63959 2.76474 4.32828 2.5 5.34 2.5H7.24C8.24631 2.5 8.93213 2.76451 9.3673 3.20066C9.80228 3.63661 10.0646 4.322 10.06 5.32771ZM10.06 16.7677V16.77V18.67C10.06 19.6761 9.79557 20.3623 9.35895 20.7989C8.92232 21.2356 8.23613 21.5 7.23 21.5H5.33C4.32387 21.5 3.63797 21.2356 3.20145 20.7981C2.76474 20.3604 2.5 19.6717 2.5 18.66V16.76C2.5 15.7539 2.76441 15.068 3.20191 14.6314C3.63959 14.1947 4.32828 13.93 5.34 13.93H7.24C8.24631 13.93 8.93184 14.1945 9.36691 14.6315C9.80196 15.0685 10.0646 15.7564 10.06 16.7677ZM16.77 2.5H18.67C19.6761 2.5 20.3623 2.76443 20.7989 3.20105C21.2356 3.63768 21.5 4.32387 21.5 5.33V7.23C21.5 8.23613 21.2356 8.92232 20.7989 9.35895C20.3623 9.79557 19.6761 10.06 18.67 10.06H16.77C15.7639 10.06 15.0777 9.79557 14.6411 9.35895C14.2044 8.92232 13.94 8.23613 13.94 7.23V5.33C13.94 4.32387 14.2044 3.63768 14.6411 3.20105C15.0777 2.76443 15.7639 2.5 16.77 2.5ZM16.77 13.93H18.67C19.6761 13.93 20.3623 14.1944 20.7989 14.6311C21.2356 15.0677 21.5 15.7539 21.5 16.76V18.66C21.5 19.6661 21.2356 20.3523 20.7989 20.7889C20.3623 21.2256 19.6761 21.49 18.67 21.49H16.77C15.7639 21.49 15.0777 21.2256 14.6411 20.7889C14.2044 20.3523 13.94 19.6661 13.94 18.66V16.76C13.94 15.7539 14.2044 15.0677 14.6411 14.6311C15.0777 14.1944 15.7639 13.93 16.77 13.93Z" fill="#475569" stroke="#475569" />
	                            </svg><span>Аккаунт</span>
	                        </a>
	                    </li>
	                    <li class="training-section-btn">
	                        <a href="#trainingpage" class="sidebar__link active">
	                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	                                <path d="M9.82 12H14.18M22.5 14.5V9.5M1.5 14.5V9.5M17.18 18C19.58 18 20.18 16.65 20.18 15V9C20.18 7.35 19.58 6 17.18 6C14.78 6 14.18 7.35 14.18 9V15C14.18 16.65 14.78 18 17.18 18ZM6.82 18C4.42 18 3.82 16.65 3.82 15V9C3.82 7.35 4.42 6 6.82 6C9.22 6 9.82 7.35 9.82 9V15C9.82 16.65 9.22 18 6.82 18Z" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	                            </svg><span>Тренировка</span>
	                        </a>
	                    </li>
	                    <li class="dietplan-section-btn">
	                        <a href="#dietpage" class="sidebar__link">
	                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	                                <path d="M21.93 6.76L18.56 20.29C18.4431 20.7793 18.164 21.2146 17.7681 21.5251C17.3723 21.8356 16.8831 22.0029 16.38 22H3.24001C1.73001 22 0.650007 20.52 1.10001 19.07L5.31001 5.55C5.45068 5.0915 5.73419 4.68994 6.11915 4.40391C6.50412 4.11789 6.97042 3.96235 7.45001 3.96H19.75C20.7 3.96 21.49 4.54 21.82 5.34C22.01 5.77 22.05 6.26 21.93 6.76Z" stroke="#475569" stroke-width="1.5" stroke-miterlimit="10" />
	                                <path d="M16 22H20.78C22.07 22 23.08 20.91 22.99 19.62L22 6M9.68 6.38L10.72 2.06M16.38 6.39L17.32 2.05M7.7 12H15.7M6.7 16H14.7" stroke="#475569" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	                            </svg><span>База продуктов</span></a>
	                    </li>
	                    <li class="excersises-database">
	                        <a href="#excersisesdatabase" class="sidebar__link">
									<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
									width="24px" height="24px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">
							  <g id="data">
								  <path fill="#475569" d="M16,0C9.256,0,2,2.033,2,6.5v19C2,29.965,9.256,32,16,32c6.743,0,14-2.035,14-6.5v-19
									  C30,2.033,22.742,0,16,0z M28,25.5c0,2.484-5.373,4.5-12,4.5c-6.628,0-12-2.016-12-4.5v-3.736C6.066,23.893,11.05,25,16,25
									  c4.95,0,9.934-1.107,12-3.236V25.5z M28,19.5h-0.004c0,0.01,0.004,0.021,0.004,0.031C28,22,22.627,24,16,24c-6.627,0-12-2-12-4.469
									  c0-0.01,0.004-0.021,0.004-0.031H4v-3.736C6.066,17.893,11.05,19,16,19c4.95,0,9.934-1.107,12-3.236V19.5z M28,13.5h-0.004
									  c0,0.01,0.004,0.021,0.004,0.031C28,16,22.627,18,16,18c-6.627,0-12-2-12-4.469c0-0.01,0.004-0.021,0.004-0.031H4v-3.436
									  C6.621,12.061,11.425,13,16,13c4.575,0,9.379-0.939,12-2.936V13.5z M16,11C9.372,11,4,8.984,4,6.5C4,4.014,9.372,2,16,2
									  c6.627,0,12,2.014,12,4.5C28,8.984,22.627,11,16,11z"/>
								  <circle fill="#475569" cx="25" cy="26" r="1"/>
								  <circle fill="#475569" cx="25" cy="20" r="1"/>
								  <circle fill="#475569" cx="25" cy="14" r="1"/>
							  </g>
							  </svg>
	                            <span>База упражнений</span></a>
	                    </li>
	                    <li class="progress-section-btn">
	                        <a href="#progresspage" class="sidebar__link">
	                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	                                <path d="M2 22H22" stroke="#475569" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	                                <path d="M9.75 4V22H14.25V4C14.25 2.9 13.8 2 12.45 2H11.55C10.2 2 9.75 2.9 9.75 4ZM3 10V22H7V10C7 8.9 6.6 8 5.4 8H4.6C3.4 8 3 8.9 3 10ZM17 15V22H21V15C21 13.9 20.6 13 19.4 13H18.6C17.4 13 17 13.9 17 15Z" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	                            </svg><span>Прогресс</span></a>
	                    </li>
	                </ul>
	            </nav>
	            <a href="#startpage" class="btn-logout" id="btn-logout">
	                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
	                    <g id="_109_log-out-02" data-name="109 log-out-02">
	                        <path d="M8.88,22.71l-5.29-5.3a2,2,0,0,1,0-2.82l5.29-5.3,1.41,1.42L5,16l5.29,5.29Z" />
	                        <rect x="4.59" y="15" width="14" height="2" />
	                        <path d="M26,29H18V27h8a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1H18V3h8a3,3,0,0,1,3,3V26A3,3,0,0,1,26,29Z" />
	                    </g>
	                </svg><span>Выйти</span>
	            </a>
	        </aside>
	        `;
	}
}

const ContentTraining = {
	render: () => {
		return `
	        <div class="mainblock__body">
	            <header class="mainblock__header">
	                <h1 class=" animate__animated animate__pulse">"Плохая тренировка – это та, которой не было!"</h1>
	            </header>
	            <div class="mainblock__content" id="main-content">
	                <div class="training-content">
	                    <h2 class="animate__animated animate__backInLeft">Тренировка</h2>
	
	                    <div class="stopwatch-block animate__animated animate__zoomIn">
	                        <div class="stopwatch">
	                            <div class="time">00:00:00</div>
	                            <button class="start">Старт</button>
	                            <button class="pause">Пауза</button>
	                            <button class="reset">Сброс</button>
	                        </div>
	                    </div>
							  <div class="training-buttons animate__animated animate__slideInDown">
							  		<button class="add-exercise">Добавить упражнение</button>
									<button class="btn-finish-training">Завершить тренировку</button>
							  </div>
	                    <div class="training-block">
							  	<div class="rock hidden">
								  <img src="./images/content/finish.jpg" alt="finish">
								</div>
							  </div>
	                    <div class="training-modal-container">
	                        <div class="training-modal animate__animated animate__slideInDown modal_closed" id="training-modal">
	                            <div class="training-modal__header">
	                                <button class="training-modal__close" id="training-modal-close" title="Закрыть модальное окно">
	                                    <img src="./images/icons/x_training.svg" alt="x-icon">
	                                </button>
	                            </div>
	                            <form class="training-modal__form">
	                                <label class="input-label" for="exercisename">Введите название упражнения: <abbr title="Это поле обязательно для заполнения" aria-label="required">*</abbr></label>
	                                <select id="exercisename" class="training-modal__exercisename"></select>
	                                <label class="input-label" for="exerciseset">Подход: <abbr title="Это поле обязательно для заполнения" aria-label="required">*</abbr></label>
	                                <input type="number" id="exerciseset" autocomplete="off" class="training-modal__exerciseset" required>
	
	                                <label class="input-label" for="exerciseweight">Вес (кг): <abbr title="Это поле обязательно для заполнения" aria-label="required">*</abbr></label>
	                                <input type="number" id="exerciseweight" autocomplete="off" class="training-modal__exerciseweight" required>
	
	                                <label class="input-label" for="exercisetime">Количество повторений: <abbr title="Это поле обязательно для заполнения" aria-label="required">*</abbr></label>
	                                <input type="number" id="exercisetime" autocomplete="off" class="training-modal__exercisetime" required>

	                                <input type="button" id="training-modal__add" class="training-modal__add" value="Добавить">
	                            </form>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
	        </div>
	        `;
	}
}

const Options = {
	render: (exerciseTitle) => {
		return `<option>${exerciseTitle}</option>`;
	}
}

const Exercise = {
	render: (exerciseName, exerciseSet, exerciseWeight, exerciseTime, key) => {
		return `
		<div class="exercise" data-key="${key}">
			<div class="exercise-name">
				<p>Упражнение:</p>
				<p>${exerciseName}</p>
			</div>
			<div class="exercise-set">
				<p>Подход:</p>
				<p>${exerciseSet}</p>
			</div>
			<div class="exercise-weight">
				<p>Вес:</p>
				<p>${exerciseWeight}</p>
			</div>
			<div class="exercise-time">
				<p>Повторения:</p>
				<p>${exerciseTime}</p>
			</div>
			<div class="exercise-status">
				
			</div>
			<button class="exercise__ready-btn">Готово</button>
			<button class="exercise__delete-btn">Удалить</button>
		</div>`;
	}
}

//<DIET>====================================================

const SidebarDiet = {
	render: () => {
		return `
	            <aside class="sidebar">
	                <div class="sidebar__logo">
	                    <img src="./images/content/logo-white.png" alt="logo-white">
	                </div>
	                <nav>
	                    <ul>
	                        <li class="account-section-btn">
	                            <a href="#mainpage" class="sidebar__link">
	                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	                                    <path d="M10.06 5.32771V5.33V7.23C10.06 8.23613 9.79557 8.92232 9.35895 9.35895C8.92232 9.79557 8.23613 10.06 7.23 10.06H5.33C4.32387 10.06 3.63768 9.79557 3.20105 9.35895C2.76443 8.92232 2.5 8.23613 2.5 7.23V5.33C2.5 4.32387 2.76441 3.63797 3.20191 3.20145C3.63959 2.76474 4.32828 2.5 5.34 2.5H7.24C8.24631 2.5 8.93213 2.76451 9.3673 3.20066C9.80228 3.63661 10.0646 4.322 10.06 5.32771ZM10.06 16.7677V16.77V18.67C10.06 19.6761 9.79557 20.3623 9.35895 20.7989C8.92232 21.2356 8.23613 21.5 7.23 21.5H5.33C4.32387 21.5 3.63797 21.2356 3.20145 20.7981C2.76474 20.3604 2.5 19.6717 2.5 18.66V16.76C2.5 15.7539 2.76441 15.068 3.20191 14.6314C3.63959 14.1947 4.32828 13.93 5.34 13.93H7.24C8.24631 13.93 8.93184 14.1945 9.36691 14.6315C9.80196 15.0685 10.0646 15.7564 10.06 16.7677ZM16.77 2.5H18.67C19.6761 2.5 20.3623 2.76443 20.7989 3.20105C21.2356 3.63768 21.5 4.32387 21.5 5.33V7.23C21.5 8.23613 21.2356 8.92232 20.7989 9.35895C20.3623 9.79557 19.6761 10.06 18.67 10.06H16.77C15.7639 10.06 15.0777 9.79557 14.6411 9.35895C14.2044 8.92232 13.94 8.23613 13.94 7.23V5.33C13.94 4.32387 14.2044 3.63768 14.6411 3.20105C15.0777 2.76443 15.7639 2.5 16.77 2.5ZM16.77 13.93H18.67C19.6761 13.93 20.3623 14.1944 20.7989 14.6311C21.2356 15.0677 21.5 15.7539 21.5 16.76V18.66C21.5 19.6661 21.2356 20.3523 20.7989 20.7889C20.3623 21.2256 19.6761 21.49 18.67 21.49H16.77C15.7639 21.49 15.0777 21.2256 14.6411 20.7889C14.2044 20.3523 13.94 19.6661 13.94 18.66V16.76C13.94 15.7539 14.2044 15.0677 14.6411 14.6311C15.0777 14.1944 15.7639 13.93 16.77 13.93Z" fill="#475569" stroke="#475569" />
	                                </svg><span>Аккаунт</span>
	                            </a>
	                        </li>
	                        <li class="training-section-btn">
	                            <a href="#trainingpage" class="sidebar__link">
	                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	                                    <path d="M9.82 12H14.18M22.5 14.5V9.5M1.5 14.5V9.5M17.18 18C19.58 18 20.18 16.65 20.18 15V9C20.18 7.35 19.58 6 17.18 6C14.78 6 14.18 7.35 14.18 9V15C14.18 16.65 14.78 18 17.18 18ZM6.82 18C4.42 18 3.82 16.65 3.82 15V9C3.82 7.35 4.42 6 6.82 6C9.22 6 9.82 7.35 9.82 9V15C9.82 16.65 9.22 18 6.82 18Z" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	                                </svg><span>Тренировка</span>
	                            </a>
	                        </li>
	                        <li class="dietplan-section-btn">
	                            <a href="#dietpage" class="sidebar__link active">
	                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	                                    <path d="M21.93 6.76L18.56 20.29C18.4431 20.7793 18.164 21.2146 17.7681 21.5251C17.3723 21.8356 16.8831 22.0029 16.38 22H3.24001C1.73001 22 0.650007 20.52 1.10001 19.07L5.31001 5.55C5.45068 5.0915 5.73419 4.68994 6.11915 4.40391C6.50412 4.11789 6.97042 3.96235 7.45001 3.96H19.75C20.7 3.96 21.49 4.54 21.82 5.34C22.01 5.77 22.05 6.26 21.93 6.76Z" stroke="#475569" stroke-width="1.5" stroke-miterlimit="10" />
	                                    <path d="M16 22H20.78C22.07 22 23.08 20.91 22.99 19.62L22 6M9.68 6.38L10.72 2.06M16.38 6.39L17.32 2.05M7.7 12H15.7M6.7 16H14.7" stroke="#475569" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	                                </svg><span>База продуктов</span></a>
	                        </li>
	                        <li class="excersises-database">
	                            <a href="#excersisesdatabase" class="sidebar__link">
										 <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
										 width="24px" height="24px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">
									<g id="data">
										<path fill="#475569" d="M16,0C9.256,0,2,2.033,2,6.5v19C2,29.965,9.256,32,16,32c6.743,0,14-2.035,14-6.5v-19
											C30,2.033,22.742,0,16,0z M28,25.5c0,2.484-5.373,4.5-12,4.5c-6.628,0-12-2.016-12-4.5v-3.736C6.066,23.893,11.05,25,16,25
											c4.95,0,9.934-1.107,12-3.236V25.5z M28,19.5h-0.004c0,0.01,0.004,0.021,0.004,0.031C28,22,22.627,24,16,24c-6.627,0-12-2-12-4.469
											c0-0.01,0.004-0.021,0.004-0.031H4v-3.736C6.066,17.893,11.05,19,16,19c4.95,0,9.934-1.107,12-3.236V19.5z M28,13.5h-0.004
											c0,0.01,0.004,0.021,0.004,0.031C28,16,22.627,18,16,18c-6.627,0-12-2-12-4.469c0-0.01,0.004-0.021,0.004-0.031H4v-3.436
											C6.621,12.061,11.425,13,16,13c4.575,0,9.379-0.939,12-2.936V13.5z M16,11C9.372,11,4,8.984,4,6.5C4,4.014,9.372,2,16,2
											c6.627,0,12,2.014,12,4.5C28,8.984,22.627,11,16,11z"/>
										<circle fill="#475569" cx="25" cy="26" r="1"/>
										<circle fill="#475569" cx="25" cy="20" r="1"/>
										<circle fill="#475569" cx="25" cy="14" r="1"/>
									</g>
									</svg><span>
	                                База упражнений</span></a>
	                        </li>
	                        <li class="progress-section-btn">
	                            <a href="#progresspage" class="sidebar__link">
	                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	                                    <path d="M2 22H22" stroke="#475569" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	                                    <path d="M9.75 4V22H14.25V4C14.25 2.9 13.8 2 12.45 2H11.55C10.2 2 9.75 2.9 9.75 4ZM3 10V22H7V10C7 8.9 6.6 8 5.4 8H4.6C3.4 8 3 8.9 3 10ZM17 15V22H21V15C21 13.9 20.6 13 19.4 13H18.6C17.4 13 17 13.9 17 15Z" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	                                </svg><span>Прогресс</span></a>
	                        </li>
	                    </ul>
	                </nav>
	                <a href="#startpage" class="btn-logout" id="btn-logout">
	                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
	                        <g id="_109_log-out-02" data-name="109 log-out-02">
	                            <path d="M8.88,22.71l-5.29-5.3a2,2,0,0,1,0-2.82l5.29-5.3,1.41,1.42L5,16l5.29,5.29Z" />
	                            <rect x="4.59" y="15" width="14" height="2" />
	                            <path d="M26,29H18V27h8a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1H18V3h8a3,3,0,0,1,3,3V26A3,3,0,0,1,26,29Z" />
	                        </g>
	                    </svg><span>Выйти</span>
	                </a>
	            </aside>
	            `;
	}
}

const ContentDiet = {
	render: () => {
		return `
	            <div class="mainblock__body">
	                <header class="mainblock__header">
	                    <h1 class=" animate__animated animate__pulse">"Придумывая оправдания, вы сжигаете ноль калорий в час!"</h1>
	                </header>
	                <div class="mainblock__content" id="main-content">
	                    <div class="diet-content">
	                        <h2 class="animate__animated animate__backInLeft">База продуктов</h2>
	                        <input type="text" name="text" class="products-search animate__animated animate__backInLeft" placeholder="Поиск продуктов">
	
	                        <table class="products-table">
	                            <thead>
	                                <tr>
	                                    <th>Наименование продуктов
	                                    </th>
	                                    <th>Белки, г на 100 г продукта
	                                    </th>
	                                    <th>Жиры, г на 100 г продукта
	                                    </th>
	                                    <th>Углеводы, г на 100 г продукта
	                                    </th>
	                                    <th>Калорийность, ккал.
	                                    </th>
	                                </tr>
	                            </thead>
	                            <tbody class="products-table__body">
											
	                            </tbody>
	                        </table>
	                    </div>
	                </div>
	            </div>
	            `;
	}
}

const ProductBlock = {
	render: (product, protein, fat, carbohydrates, calories) => {
		return `
	            <tr class="products-table__row">
	                <td class="products-table__name">${product}</td>
	                <td>${protein}</td>
	                <td>${fat}</td>
	                <td>${carbohydrates}</td>
	                <td>${calories}</td>
	            </tr>
	            `;
	}
}

//<EXERCISES DATABASE>======================================
const SidebarExercisesDatabase = {
	render: () => {
		return `
	                <aside class="sidebar">
	                    <div class="sidebar__logo">
	                        <img src="./images/content/logo-white.png" alt="logo-white">
	                    </div>
	                    <nav>
	                        <ul>
	                            <li class="account-section-btn">
	                                <a href="#mainpage" class="sidebar__link">
	                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	                                        <path d="M10.06 5.32771V5.33V7.23C10.06 8.23613 9.79557 8.92232 9.35895 9.35895C8.92232 9.79557 8.23613 10.06 7.23 10.06H5.33C4.32387 10.06 3.63768 9.79557 3.20105 9.35895C2.76443 8.92232 2.5 8.23613 2.5 7.23V5.33C2.5 4.32387 2.76441 3.63797 3.20191 3.20145C3.63959 2.76474 4.32828 2.5 5.34 2.5H7.24C8.24631 2.5 8.93213 2.76451 9.3673 3.20066C9.80228 3.63661 10.0646 4.322 10.06 5.32771ZM10.06 16.7677V16.77V18.67C10.06 19.6761 9.79557 20.3623 9.35895 20.7989C8.92232 21.2356 8.23613 21.5 7.23 21.5H5.33C4.32387 21.5 3.63797 21.2356 3.20145 20.7981C2.76474 20.3604 2.5 19.6717 2.5 18.66V16.76C2.5 15.7539 2.76441 15.068 3.20191 14.6314C3.63959 14.1947 4.32828 13.93 5.34 13.93H7.24C8.24631 13.93 8.93184 14.1945 9.36691 14.6315C9.80196 15.0685 10.0646 15.7564 10.06 16.7677ZM16.77 2.5H18.67C19.6761 2.5 20.3623 2.76443 20.7989 3.20105C21.2356 3.63768 21.5 4.32387 21.5 5.33V7.23C21.5 8.23613 21.2356 8.92232 20.7989 9.35895C20.3623 9.79557 19.6761 10.06 18.67 10.06H16.77C15.7639 10.06 15.0777 9.79557 14.6411 9.35895C14.2044 8.92232 13.94 8.23613 13.94 7.23V5.33C13.94 4.32387 14.2044 3.63768 14.6411 3.20105C15.0777 2.76443 15.7639 2.5 16.77 2.5ZM16.77 13.93H18.67C19.6761 13.93 20.3623 14.1944 20.7989 14.6311C21.2356 15.0677 21.5 15.7539 21.5 16.76V18.66C21.5 19.6661 21.2356 20.3523 20.7989 20.7889C20.3623 21.2256 19.6761 21.49 18.67 21.49H16.77C15.7639 21.49 15.0777 21.2256 14.6411 20.7889C14.2044 20.3523 13.94 19.6661 13.94 18.66V16.76C13.94 15.7539 14.2044 15.0677 14.6411 14.6311C15.0777 14.1944 15.7639 13.93 16.77 13.93Z" fill="#475569" stroke="#475569" />
	                                    </svg><span>Аккаунт</span>
	                                </a>
	                            </li>
	                            <li class="training-section-btn">
	                                <a href="#trainingpage" class="sidebar__link">
	                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	                                        <path d="M9.82 12H14.18M22.5 14.5V9.5M1.5 14.5V9.5M17.18 18C19.58 18 20.18 16.65 20.18 15V9C20.18 7.35 19.58 6 17.18 6C14.78 6 14.18 7.35 14.18 9V15C14.18 16.65 14.78 18 17.18 18ZM6.82 18C4.42 18 3.82 16.65 3.82 15V9C3.82 7.35 4.42 6 6.82 6C9.22 6 9.82 7.35 9.82 9V15C9.82 16.65 9.22 18 6.82 18Z" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	                                    </svg><span>Тренировка</span>
	                                </a>
	                            </li>
	                            <li class="dietplan-section-btn">
	                                <a href="#dietpage" class="sidebar__link">
	                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	                                        <path d="M21.93 6.76L18.56 20.29C18.4431 20.7793 18.164 21.2146 17.7681 21.5251C17.3723 21.8356 16.8831 22.0029 16.38 22H3.24001C1.73001 22 0.650007 20.52 1.10001 19.07L5.31001 5.55C5.45068 5.0915 5.73419 4.68994 6.11915 4.40391C6.50412 4.11789 6.97042 3.96235 7.45001 3.96H19.75C20.7 3.96 21.49 4.54 21.82 5.34C22.01 5.77 22.05 6.26 21.93 6.76Z" stroke="#475569" stroke-width="1.5" stroke-miterlimit="10" />
	                                        <path d="M16 22H20.78C22.07 22 23.08 20.91 22.99 19.62L22 6M9.68 6.38L10.72 2.06M16.38 6.39L17.32 2.05M7.7 12H15.7M6.7 16H14.7" stroke="#475569" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	                                    </svg><span>База продуктов</span></a>
	                            </li>
	                            <li class="excersises-database">
	                                <a href="#excersisesdatabase" class="sidebar__link active">
											  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
											  width="24px" height="24px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">
										 <g id="data">
											 <path fill="#475569" d="M16,0C9.256,0,2,2.033,2,6.5v19C2,29.965,9.256,32,16,32c6.743,0,14-2.035,14-6.5v-19
												 C30,2.033,22.742,0,16,0z M28,25.5c0,2.484-5.373,4.5-12,4.5c-6.628,0-12-2.016-12-4.5v-3.736C6.066,23.893,11.05,25,16,25
												 c4.95,0,9.934-1.107,12-3.236V25.5z M28,19.5h-0.004c0,0.01,0.004,0.021,0.004,0.031C28,22,22.627,24,16,24c-6.627,0-12-2-12-4.469
												 c0-0.01,0.004-0.021,0.004-0.031H4v-3.736C6.066,17.893,11.05,19,16,19c4.95,0,9.934-1.107,12-3.236V19.5z M28,13.5h-0.004
												 c0,0.01,0.004,0.021,0.004,0.031C28,16,22.627,18,16,18c-6.627,0-12-2-12-4.469c0-0.01,0.004-0.021,0.004-0.031H4v-3.436
												 C6.621,12.061,11.425,13,16,13c4.575,0,9.379-0.939,12-2.936V13.5z M16,11C9.372,11,4,8.984,4,6.5C4,4.014,9.372,2,16,2
												 c6.627,0,12,2.014,12,4.5C28,8.984,22.627,11,16,11z"/>
											 <circle fill="#475569" cx="25" cy="26" r="1"/>
											 <circle fill="#475569" cx="25" cy="20" r="1"/>
											 <circle fill="#475569" cx="25" cy="14" r="1"/>
										 </g>
										 </svg><span>База упражнений</span></a>
	                            </li>
	                            <li class="progress-section-btn">
	                                <a href="#progresspage" class="sidebar__link">
	                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	                                        <path d="M2 22H22" stroke="#475569" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	                                        <path d="M9.75 4V22H14.25V4C14.25 2.9 13.8 2 12.45 2H11.55C10.2 2 9.75 2.9 9.75 4ZM3 10V22H7V10C7 8.9 6.6 8 5.4 8H4.6C3.4 8 3 8.9 3 10ZM17 15V22H21V15C21 13.9 20.6 13 19.4 13H18.6C17.4 13 17 13.9 17 15Z" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	                                    </svg><span>Прогресс</span></a>
	                            </li>
	                        </ul>
	                    </nav>
	                    <a href="#startpage" class="btn-logout" id="btn-logout">
	                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
	                            <g id="_109_log-out-02" data-name="109 log-out-02">
	                                <path d="M8.88,22.71l-5.29-5.3a2,2,0,0,1,0-2.82l5.29-5.3,1.41,1.42L5,16l5.29,5.29Z" />
	                                <rect x="4.59" y="15" width="14" height="2" />
	                                <path d="M26,29H18V27h8a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1H18V3h8a3,3,0,0,1,3,3V26A3,3,0,0,1,26,29Z" />
	                            </g>
	                        </svg><span>Выйти</span>
	                    </a>
	                </aside>
	                `;
	}
}

const ContentExercisesDatabase = {
	render: () => {
		return `
	                <div class="mainblock__body">
	                    <header class="mainblock__header">
	                        <h1 class=" animate__animated animate__pulse">"Возможно, ты еще не там, но ты ближе, чем был вчера!"</h1>
	                    </header>
	                    <div class="mainblock__content" id="main-content">
	                        <div class="exercises-content">
	                            <h2 class="animate__animated animate__backInLeft">База упражнений</h2>
	                            <input type="text" name="text" class="exercises-search animate__animated animate__backInLeft" placeholder="Поиск упражнения">
	                            <div class="exercises-body">
	                            </div>
	                        </div>
	                    </div>
	                </div>
	                `;
	}
}

const ExerciseBlock = {
	render: (title, image, instruction) => {
		return `
	                <div class="exercise-body animate__animated animate__zoomIn">
	                    <div class="exercise-block">
	                        <h3 class="exercise-block__title">${title}</h3>
									<div class="exercise-content">
										<div class="exercise-block__image">
											<img src="${image}" alt="${title}">
										</div>
										<p class="exercise-block__instructions">${instruction}</p>
									</div>
	                    </div>
	                </div>
	                `;
	}
}

//<PROGRESS>================================================
const SidebarProgress = {
	render: () => {
		return `
	                    <aside class="sidebar">
	                        <div class="sidebar__logo">
	                            <img src="./images/content/logo-white.png" alt="logo-white">
	                        </div>
	                        <nav>
	                            <ul>
	                                <li class="account-section-btn">
	                                    <a href="#mainpage" class="sidebar__link">
	                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	                                            <path d="M10.06 5.32771V5.33V7.23C10.06 8.23613 9.79557 8.92232 9.35895 9.35895C8.92232 9.79557 8.23613 10.06 7.23 10.06H5.33C4.32387 10.06 3.63768 9.79557 3.20105 9.35895C2.76443 8.92232 2.5 8.23613 2.5 7.23V5.33C2.5 4.32387 2.76441 3.63797 3.20191 3.20145C3.63959 2.76474 4.32828 2.5 5.34 2.5H7.24C8.24631 2.5 8.93213 2.76451 9.3673 3.20066C9.80228 3.63661 10.0646 4.322 10.06 5.32771ZM10.06 16.7677V16.77V18.67C10.06 19.6761 9.79557 20.3623 9.35895 20.7989C8.92232 21.2356 8.23613 21.5 7.23 21.5H5.33C4.32387 21.5 3.63797 21.2356 3.20145 20.7981C2.76474 20.3604 2.5 19.6717 2.5 18.66V16.76C2.5 15.7539 2.76441 15.068 3.20191 14.6314C3.63959 14.1947 4.32828 13.93 5.34 13.93H7.24C8.24631 13.93 8.93184 14.1945 9.36691 14.6315C9.80196 15.0685 10.0646 15.7564 10.06 16.7677ZM16.77 2.5H18.67C19.6761 2.5 20.3623 2.76443 20.7989 3.20105C21.2356 3.63768 21.5 4.32387 21.5 5.33V7.23C21.5 8.23613 21.2356 8.92232 20.7989 9.35895C20.3623 9.79557 19.6761 10.06 18.67 10.06H16.77C15.7639 10.06 15.0777 9.79557 14.6411 9.35895C14.2044 8.92232 13.94 8.23613 13.94 7.23V5.33C13.94 4.32387 14.2044 3.63768 14.6411 3.20105C15.0777 2.76443 15.7639 2.5 16.77 2.5ZM16.77 13.93H18.67C19.6761 13.93 20.3623 14.1944 20.7989 14.6311C21.2356 15.0677 21.5 15.7539 21.5 16.76V18.66C21.5 19.6661 21.2356 20.3523 20.7989 20.7889C20.3623 21.2256 19.6761 21.49 18.67 21.49H16.77C15.7639 21.49 15.0777 21.2256 14.6411 20.7889C14.2044 20.3523 13.94 19.6661 13.94 18.66V16.76C13.94 15.7539 14.2044 15.0677 14.6411 14.6311C15.0777 14.1944 15.7639 13.93 16.77 13.93Z" fill="#475569" stroke="#475569" />
	                                        </svg><span>Аккаунт</span>
	                                    </a>
	                                </li>
	                                <li class="training-section-btn">
	                                    <a href="#trainingpage" class="sidebar__link">
	                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	                                            <path d="M9.82 12H14.18M22.5 14.5V9.5M1.5 14.5V9.5M17.18 18C19.58 18 20.18 16.65 20.18 15V9C20.18 7.35 19.58 6 17.18 6C14.78 6 14.18 7.35 14.18 9V15C14.18 16.65 14.78 18 17.18 18ZM6.82 18C4.42 18 3.82 16.65 3.82 15V9C3.82 7.35 4.42 6 6.82 6C9.22 6 9.82 7.35 9.82 9V15C9.82 16.65 9.22 18 6.82 18Z" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	                                        </svg><span>Тренировка</span>
	                                    </a>
	                                </li>
	                                <li class="dietplan-section-btn">
	                                    <a href="#dietpage" class="sidebar__link">
	                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	                                            <path d="M21.93 6.76L18.56 20.29C18.4431 20.7793 18.164 21.2146 17.7681 21.5251C17.3723 21.8356 16.8831 22.0029 16.38 22H3.24001C1.73001 22 0.650007 20.52 1.10001 19.07L5.31001 5.55C5.45068 5.0915 5.73419 4.68994 6.11915 4.40391C6.50412 4.11789 6.97042 3.96235 7.45001 3.96H19.75C20.7 3.96 21.49 4.54 21.82 5.34C22.01 5.77 22.05 6.26 21.93 6.76Z" stroke="#475569" stroke-width="1.5" stroke-miterlimit="10" />
	                                            <path d="M16 22H20.78C22.07 22 23.08 20.91 22.99 19.62L22 6M9.68 6.38L10.72 2.06M16.38 6.39L17.32 2.05M7.7 12H15.7M6.7 16H14.7" stroke="#475569" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	                                        </svg><span>База продуктов</span></a>
	                                </li>
	                                <li class="excersises-database">
	                                    <a href="#excersisesdatabase" class="sidebar__link">
													<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
													width="24px" height="24px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">
											  <g id="data">
												  <path fill="#475569" d="M16,0C9.256,0,2,2.033,2,6.5v19C2,29.965,9.256,32,16,32c6.743,0,14-2.035,14-6.5v-19
													  C30,2.033,22.742,0,16,0z M28,25.5c0,2.484-5.373,4.5-12,4.5c-6.628,0-12-2.016-12-4.5v-3.736C6.066,23.893,11.05,25,16,25
													  c4.95,0,9.934-1.107,12-3.236V25.5z M28,19.5h-0.004c0,0.01,0.004,0.021,0.004,0.031C28,22,22.627,24,16,24c-6.627,0-12-2-12-4.469
													  c0-0.01,0.004-0.021,0.004-0.031H4v-3.736C6.066,17.893,11.05,19,16,19c4.95,0,9.934-1.107,12-3.236V19.5z M28,13.5h-0.004
													  c0,0.01,0.004,0.021,0.004,0.031C28,16,22.627,18,16,18c-6.627,0-12-2-12-4.469c0-0.01,0.004-0.021,0.004-0.031H4v-3.436
													  C6.621,12.061,11.425,13,16,13c4.575,0,9.379-0.939,12-2.936V13.5z M16,11C9.372,11,4,8.984,4,6.5C4,4.014,9.372,2,16,2
													  c6.627,0,12,2.014,12,4.5C28,8.984,22.627,11,16,11z"/>
												  <circle fill="#475569" cx="25" cy="26" r="1"/>
												  <circle fill="#475569" cx="25" cy="20" r="1"/>
												  <circle fill="#475569" cx="25" cy="14" r="1"/>
											  </g>
											  </svg><span>
	                                        База упражнений</span></a>
	                                </li>
	                                <li class="progress-section-btn">
	                                    <a href="#progresspage" class="sidebar__link active">
	                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	                                            <path d="M2 22H22" stroke="#475569" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	                                            <path d="M9.75 4V22H14.25V4C14.25 2.9 13.8 2 12.45 2H11.55C10.2 2 9.75 2.9 9.75 4ZM3 10V22H7V10C7 8.9 6.6 8 5.4 8H4.6C3.4 8 3 8.9 3 10ZM17 15V22H21V15C21 13.9 20.6 13 19.4 13H18.6C17.4 13 17 13.9 17 15Z" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	                                        </svg><span>Прогресс</span></a>
	                                </li>
	                            </ul>
	                        </nav>
	                        <a href="#startpage" class="btn-logout" id="btn-logout">
	                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
	                                <g id="_109_log-out-02" data-name="109 log-out-02">
	                                    <path d="M8.88,22.71l-5.29-5.3a2,2,0,0,1,0-2.82l5.29-5.3,1.41,1.42L5,16l5.29,5.29Z" />
	                                    <rect x="4.59" y="15" width="14" height="2" />
	                                    <path d="M26,29H18V27h8a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1H18V3h8a3,3,0,0,1,3,3V26A3,3,0,0,1,26,29Z" />
	                                </g>
	                            </svg><span>Выйти</span>
	                        </a>
	                    </aside>
	                    `;
	}
}

const ContentProgress = {
	render: () => {
		return ` <div class="mainblock__body">
	            	<header class="mainblock__header">
	               	<h1 class=" animate__animated animate__pulse">"Хорошие вещи приходят к тем, кто потеет!"</h1>
	               </header>
	               <div class="mainblock__content" id="main-content">
	                  <div class="progress-content">
	                     <h2 class="animate__animated animate__backInLeft">Прогресс</h2>
								<div class="tab-buttons animate__animated animate__backInLeft">
									<button class="tab-button" data-tab="#year-tab">
										Получить данные за год
									</button>
									<button class="tab-button" data-tab="#month-tab">
									Получить данные за месяц
									</button>
								</div>
								<div class="charts">
									<div class="chart year-chart" id="year-tab">
										<canvas id="yearChart"></canvas>
									</div>
									<div class="chart month-chart" id="month-tab">
										<canvas id="monthChart"></canvas>
									</div>
								</div>
							</div>
	               </div>
	            </div>`;
	}
}

export {
	StartHeader,
	StartMainTitle,
	ButtonStart,
	StartModal,
	StartModalOverlay,
	ParallaxImages,
	LoginBtn,
	SidebarMain,
	ContentMain,
	SidebarTraining,
	ContentTraining,
	SidebarDiet,
	ContentDiet,
	SidebarExercisesDatabase,
	ContentExercisesDatabase,
	SidebarProgress,
	ContentProgress,
	ExerciseBlock,
	UserInfo,
	ProductBlock,
	Options,
	Exercise,
};