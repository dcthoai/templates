
function validateLogin(){
    Validator({
        form: 'form-login',
        formInput: '.input-box',
        errorMessage: '.label-error',
        rules: [
            Validator.isRequired('#username', 'Vui lòng nhập username hoặc email!'),
            Validator.isRequired('#password', 'Vui lòng nhập mật khẩu của bạn!'),
            Validator.minLength('#password', 4, 'Vui lòng nhập tối thiểu 8 kí tự!'),
        ]
    });
}

validateLogin();