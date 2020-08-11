
//submit 버튼을 누르면, 입력값들을 확인한다.
//입력값들이 다 올바르게 입력돼있으면 submit 실행
//입력 안돼있으면 안돼있는 항목을 출력시킨다.

// Id , password, 경로
let validatePass = [false, false, false];
let regex = /^[a-z0-9+]*$/;


document.querySelector('#userId').onblur = function (e) {
  validateId(e.target.value);
}

document.querySelector('#userPwd').onblur = function (e) {
  validatePwd(e.target.value);
}

let checkboxLists = document.querySelectorAll('#checkboxLists input');


for (let i = 0; i < checkboxLists.length; i++) {
  document.querySelectorAll('#checkboxLists label')[i].onchange = function (e) {
    let checkedLists = document.querySelectorAll('#checkboxLists input:checked');

    validateCheck(checkedLists);
  }
}

document.querySelector('#joinForm').onsubmit = function (e) {
  e.preventDefault();
  console.log(validatePass);
  setTimeout(() => {
    if (!validatePass.includes(false)) {
      alert('submit 성공');
    } else {
      console.log('실패')
    }
  }, 100);
}



function validateId(value) {
  if (value.length > 4 && value.length < 21 && regex.test(value)) {
    validatePass[0] = true;
    result_validate_id.innerHTML = '';
  } else {
    validatePass[0] = false;
    result_validate_id.innerHTML = '5~20자의 영문 소문자, 숫자만 사용 가능합니다';
  }
}

function validatePwd(value) {
  if (/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/.test(value)) {
    validatePass[1] = true;
    result_validate_pwd.innerHTML = '';
  } else {
    validatePass[1] = false;
    result_validate_pwd.innerHTML = '8 ~ 16자 영문 대 소문자, 숫자, 특수문자를 사용하세요';
  }
}

function validateCheck(value) {
  console.log(value);
  if (value.length > 0) {
    validatePass[2] = true;
    result_validate_check.innerHTML = '';
  } else {
    validatePass[2] = false;
    result_validate_check.innerHTML = '1개 이상 선택해주세요';
  }
  console.log(validatePass)

}