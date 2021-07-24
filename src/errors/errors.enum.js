export const errorsEnum = {
  // BAD_REQUEST

  4000: {
    en: 'BAD_REQUEST',
    ua: 'Запит невірний',
    ru: 'Запрос неверный',
  },

  // JOI

  4001: {
    en: 'Wrong fields',
    ua: 'Невірно заповнено поля',
    ru: 'Неверно заполнены поля',
  },

  // AUTH - BAD REQUEST

  4002: {
    en: 'WRONG_EMAIL_OR_PASSWORD',
    ua: 'Невірно вказано пошту або пароль',
    ru: 'Неверно указаны почта или пароль',
  },

  4003: {
    en: 'ACCESS_TOKEN_IS_REQUIRED',
    ua: 'Необхідний токен доступу',
    ru: 'Необходим токен доступа',
  },

  4004: {
    en: 'REFRESH_TOKEN_IS_REQUIRED',
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

  // AUTH -UNAUTHORIZED

  4010: {
    en: 'UNAUTHORIZED',
    ua: 'Вас неавторизовано',
    ru: 'Вы - неавторизованы',
  },


  4011: {
    en: 'ACCESS_TOKEN_IS_NOT_VALID',
    ua: 'Невалідний токен доступу',
    ru: 'Невалидный токен доступа',
  },

  4012: {
    en: 'REFRESH_TOKEN_IS_NOT_VALID',
    ua: 'Невалідний токен оновлення',
    ru: 'Невалидный токен обновления',
  },

  // AUTH - FORBIDDEN

  4031: {
    en: 'ACCESS_TOKEN_IS_NOT_VERIFIED',
    ua: 'Не варифіковано токен доступу',
    ru: 'Неварифицирован токен доступа',
  },

  4032: {
    en: 'REFRESH_TOKEN_IS_NOT_VERIFIED',
    ua: 'Не варифіковано токен оновлення',
    ru: 'Неварифицирован токен обновления',
  },

  // MUTUAL

  40018: {
    en: 'Some fields are empty',
    ua: 'Деякі поля незаповнені',
    ru: 'Некоторые поля незаполнены',
  },

  40019: {
    en: 'INVALID_ID',
    ua: 'Невірно вказано ID',
    ru: 'Неверно указан ID',
  },

  // USER todo
  TOO_WEAK_PASSWORD: {
    customCode: 4007
  },

  TOO_STRONG_PASSWORD: {
    customCode: 4008
  },

  INVALID_MAIL: {
    customCode: 4009
  },

  NO_USER: {
    customCode: 40010
  },

  NO_USERS: {
    customCode: 40011
  },

  USER_ALREADY_EXISTS: {
    customCode: 40012
  },

  DOC_IS_TOO_LARGE: {
    customCode: 40013,
    en: 'This doc is too large',
    ua: 'Даний документ занадто великий',
  },

  PHOTO_IS_TOO_LARGE: {
    customCode: 40014,
    en: 'This photo is too large',
    ua: 'Дане фото занадто велике',
  },

  VIDEO_IS_TOO_LARGE: {
    customCode: 40015,
    en: 'This video is too large',
    ua: 'Дане відео занадто велике',
  },

  NOT_VALID_FILE: {
    customCode: 40016,
    en: 'This file is unknown',
    ua: 'Даний вид файлів є неприпустимим',
  },

  NOT_VALID_PHOTO_TYPE: {
    customCode: 40017,
    en: 'Not valid photo type',
    ua: 'Неприпустиме фото',
  },
};
