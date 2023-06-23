	// Modals

	// Запрет прокрутки и устранения дерганья при открытии модалок
	const body = document.querySelector('body');
	const scrollWidth = window.innerWidth - document.documentElement.clientWidth;

	// Закрытие модалок
	const modals = document.querySelectorAll('.modals');
	const closeModals = document.querySelectorAll('.modals__close');

	// Закрытие по .modals__close
	closeModals.forEach(button => {
		button.addEventListener('click', () => {
			modals.forEach(modal => {
				modal.classList.remove('is-active');
				body.style.overflow = '';
				body.style.paddingRight = 0;

			});
		});
	});

	// Закрытие по .modals__overlay
	function closeModal(e) {
		if (e.target.classList.contains('modals__close') || e.target.closest('.modals__close') || e.target.classList.contains('modals__overlay')) {
			const modal = e.target.closest('.modals');
			modal.classList.remove('is-active');
			body.style.overflow = '';
			body.style.paddingRight = 0;

		}
	}
	modals.forEach(modal => {
		modal.addEventListener('click', closeModal);
	});


	// Buttons Modal Open
	const btnOpenModalReg = document.querySelectorAll('.js-open-reg');
	const btnOpenModalLetter = document.querySelector('.js-open-letter');
	const btnOpenModalEmail = document.querySelector('.js-open-email');
	const btnOpenModalEmailInfo = document.querySelector('.js-open-email-info');
	const btnOpenModalSuccess = document.querySelector('.js-open-success');
	const btnCloseModalSuccess = document.querySelector('.modals-success__btn')

	// Modals
	const modalReg = document.querySelector('.modals-reg');
	const modalLetter = document.querySelector('.modals-letter');
	const modalEmail = document.querySelector('.modals-email');
	const modalEmailInfo = document.querySelector('.modals-emailinfo');
	const modalSuccess = document.querySelector('.modals-success');

	// Открытие модалки modals-reg
	btnOpenModalReg.forEach(button => {
		button.addEventListener('click', () => {
			modalReg.classList.add('is-active');
			body.style.overflow = 'hidden';
			body.style.paddingRight = `${scrollWidth}px`;
		});
	});

	// Открытие модалки modals-letter
	btnOpenModalLetter.addEventListener('click', () => {
		modalLetter.classList.add('is-active');
		body.style.overflow = 'hidden';
		body.style.paddingRight = `${scrollWidth}px`;
	});

	// Открытие модалки отправки modals-email
	btnOpenModalEmail.addEventListener('click', () => {
		modalEmail.classList.add('is-active');
		modalLetter.classList.remove('is-active');
		body.style.overflow = 'hidden';
		body.style.paddingRight = `${scrollWidth}px`;
	});

	// Открытие модалки modals-emailinfo
	btnOpenModalEmailInfo.addEventListener('click', () => {
		modalEmailInfo.classList.add('is-active');
		modalEmail.classList.remove('is-active');
		body.style.overflow = 'hidden';
		body.style.paddingRight = `${scrollWidth}px`;
	});

	// Открытие модалки modals-success
	btnOpenModalSuccess.addEventListener('click', () => {
		modalSuccess.classList.add('is-active');
		modalEmailInfo.classList.remove('is-active');
		body.style.overflow = 'hidden';
		body.style.paddingRight = `${scrollWidth}px`;
	});

	// Закрытие модалки modals-success
	btnCloseModalSuccess.addEventListener('click', () => {
		modalSuccess.classList.remove('is-active');
		body.style.overflow = '';
		body.style.paddingRight = 0;
	});

/* ------------------- Появление 2-й группы радиокнопок в регистации -------------------- */
const genderRadios = document.getElementsByName('gender');
const lookingRadios = document.getElementsByName('looking');
const lookingGroups = document.querySelectorAll('.select-gender__group');

// функция для проверки выбранного радио-элемента
function isChecked(radios) {
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      return true;
    }
  }
  return false;
}

// обработчик события изменения состояния радио-кнопок
function handleRadioChange() {
  for (let i = 0; i < lookingGroups.length; i++) {
    if (isChecked(genderRadios)) {
      lookingGroups[i].style.display = 'grid';
    } else {
      lookingGroups[i].style.display = 'none';
    }
  }
}

// добавляем обработчик на каждую группу радио-кнопок
for (let i = 0; i < genderRadios.length; i++) {
  genderRadios[i].addEventListener('change', handleRadioChange);
}

for (let i = 0; i < lookingRadios.length; i++) {
  lookingRadios[i].addEventListener('change', handleRadioChange);
}