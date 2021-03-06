export const errorsEnum = {
  // BAD_REQUEST

  4000: {
    en: 'BAD REQUEST',
    ua: 'Запит невірний',
    ru: 'Запрос неверный',
  },

  // BAD_REQUEST - JOI

  4001: {
    en: 'Wrong fields',
    ua: 'Невірно заповнено поля',
    ru: 'Неверно заполнены поля',
  },

  // BAD REQUEST - AUTH

  4002: {
    en: 'Wrong email or password',
    ua: 'Невірно вказано пошту та/або пароль',
    ru: 'Неверно указаны почта и/или пароль',
  },

  4003: {
    en: 'Access token is required',
    ua: 'Необхідний токен доступу',
    ru: 'Необходим токен доступа',
  },

  4004: {
    en: 'Refresh token is required',
    ua: 'Необхідний токен оновлення',
    ru: 'Необходим токен обновления',
  },

  40019: {
    en: 'Action token is required',
    ua: 'Необхідний токен дії',
    ru: 'Необходим токен действия',
  },

  4005: {
    en: 'Incorrect action',
    ua: 'Невірна дія',
    ru: 'Недопустимое действие',
  },

  4006: {
    en: 'Incorrect user',
    ua: 'Деякі поля користувача заповнені невірно',
    ru: 'Некоторые поля пользователя заполнены неверно',
  },

  // USER

  4007: {
    en: 'No user',
    ua: 'Користувача не знайдено',
    ru: 'Пользователь не найден',
  },

  4008: {
    en: 'No users',
    ua: 'Користувачів не знайдено',
    ru: 'Пользователи не найдены',
  },

  4009: {
    en: 'User with such email is already registered',
    ua: 'Користувача з такою поштою вже зареєстровано',
    ru: 'Пользователь с такой почтой уже зарегистрирован',
  },

  // BAD_REQUEST - DOCS

  40010: {
    en: 'This doc is too large',
    ua: 'Даний документ занадто великий',
    ru: 'Данный документ слишком большой',
  },

  40011: {
    en: 'This photo is too large',
    ua: 'Дане фото занадто велике',
    ru: 'Данное фото слишком большое',
  },

  40012: {
    en: 'This video is too large',
    ua: 'Дане відео занадто велике',
    ru: 'Данное видео слишком большое',
  },

  40013: {
    en: 'This file is unknown',
    ua: 'Неприпустимий тип файлів',
    ru: 'Недопустимый тип файлов',
  },

  40014: {
    en: 'Not valid photo type',
    ua: 'Неприпустимий тип фото',
    ru: 'Недопустимый тип фото',
  },

  // BAD REQUEST - MUTUAL

  40015: {
    en: 'Some fields are empty',
    ua: 'Деякі поля незаповнені',
    ru: 'Некоторые поля незаполнены',
  },

  40016: {
    en: 'Invalid ID',
    ua: 'Невірно вказано ID',
    ru: 'Неверно указан ID',
  },

  // AUTH -UNAUTHORIZED

  4010: {
    en: 'Unauthorized',
    ua: 'Вас неавторизовано',
    ru: 'Вы - неавторизованы',
  },


  4011: {
    en: 'Access token is not valid',
    ua: 'Невалідний токен доступу',
    ru: 'Невалидный токен доступа',
  },

  4012: {
    en: 'Refresh token is not valid',
    ua: 'Невалідний токен оновлення',
    ru: 'Невалидный токен обновления',
  },

  4013: {
    en: 'Action token is not valid',
    ua: 'Невалідний токен дії',
    ru: 'Невалидный токен действия',
  },

  // PRODUCT

  40017: {
    en: 'Incorrect product',
    ua: 'Деякі поля продукту заповнені невірно',
    ru: 'Некоторые поля продукта заполнены неверно',
  },

  40018: {
    en: 'Product with such name is already created',
    ua: 'Продукт з такою назвою вже створено',
    ru: 'Продукт с таким названием уже создан',
  },

  // AUTH - FORBIDDEN

  4031: {
    en: 'Access token is not verified',
    ua: 'Не варифіковано токен доступу',
    ru: 'Неварифицирован токен доступа',
  },

  4032: {
    en: 'Refresh token is not verified',
    ua: 'Неварифіковано токен оновлення',
    ru: 'Неварифицирован токен обновления',
  },

  4034: {
    en: 'Action token is not verified',
    ua: 'Неварифіковано токен дії',
    ru: 'Неварифицирован токен действия',
  },

  4033: {
    en: 'No access rights' ,
    ua: 'Немає прав доступу',
    ru: 'Нет прав доступа',
  },

  4035: {
    en: 'Your profile is not activated yet' ,
    ua: 'Ваш профіль ще неактивовано',
    ru: 'Ваш профиль еще неактивирован',
  },

  // NOT FOUND

  4041: {
    en: 'Record not found',
    ua: 'Запис не знайдено',
    ru: 'Запись не найдена',
  },

  // SERVER ERROR

  5000: {
    en: 'Internal Server Error',
    ua: 'Помилка серверу',
    ru: 'Ошибка сервера',
  }
};
