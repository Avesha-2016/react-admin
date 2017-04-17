import Validator from 'validator'
import isEmpty from 'lodash/isEmpty';

export default function(data) {
    let errors = {};

    if(data.login.length < 3 || data.login.length > 50) {
        errors.login = 'Имя должно содержать от 3 до 50 символов';
    }
    if(data.password.length < 5 || data.password.length > 20) {
        errors.password = 'Пароль должно содержать от 5 до 20 символов';
    }

    if(Validator.isNull(data.login)) {
        errors.login = 'Заполните это поле';
    }

    if(Validator.isNull(data.password)) {
        errors.password = 'Заполните это поле';
    }
    if(Validator.isNull(data.passwordConfirmation)) {
        errors.passwordConfirmation = 'Заполните это поле';
    }
    if(!Validator.equals(data.password,data.passwordConfirmation)) {
        errors.passwordConfirmation = 'Пароли не совпадают';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}
