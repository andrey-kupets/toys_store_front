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

  // AUTH - FORBIDDEN

  4031: {
    en: 'Access token is not verified',
    ua: 'Не варифіковано токен доступу',
    ru: 'Неварифицирован токен доступа',
  },

  4032: {
    en: 'Refresh token is not verified',
    ua: 'Не варифіковано токен оновлення',
    ru: 'Неварифицирован токен обновления',
  },

  // NOT FOUND

  4041: {
    en: 'Record not found',
    ua: 'Запис не знайдено',
    ru: 'Запись не найдена',
  },

  5000: {
    en: 'Internal Server Error',
    ua: 'Помилка серверу',
    ru: 'Ошибка сервера',
  }
};
