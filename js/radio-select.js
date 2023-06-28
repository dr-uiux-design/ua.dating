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