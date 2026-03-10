# areErrors

## Опис

Перевіряє, чи масив є непорожнім і містить лише об’єкти `Error`, повертаючи `true` або `false`.

### Випадок використання

Перевірити, що наданий під час виконання `unknown[]` (наприклад, агреговані збої, результати валідації або
десеріалізовані дані) є непорожнім списком об’єктів `Error` перед ітерацією, логуванням або повторним викиданням.

> **Примітка для користувачів TypeScript:**
>
> `areErrors` повертає `true` лише для заповненого масиву, де кожен елемент є `Error`; повертає `false` для порожнього
> масиву або якщо будь-який елемент не є `Error`.

### Переваги

- Гарантує, що кожен елемент є екземпляром `Error`, забезпечуючи безпечну обробку помилок і логування.
- Відхиляє порожні масиви, запобігаючи випадковому трактуванню станів «немає помилок» як коректних списків помилок.
- Добре працює як runtime-запобіжник під час роботи з вхідними даними `unknown[]` (наприклад, з API або блоків `catch`).

## Використання

### Синтаксис

Функція:

- `areErrors(array)`

Параметри:

- `array`: Масив, який потрібно перевірити на наявність об’єктів `Error`.

### Локальний імпорт функції

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value — це непорожній масив об’єктів Error
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Глобальний імпорт об’єкта

Щоб імпортувати функції як глобальні методи об’єкта, використовуйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступний метод буде доступний глобально:

- `Type.areErrors(array)`

## Аналіз функцій

Тут задокументовано табличний аналіз виводу, що виникає під час підстановки різних параметрів у
функції: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>Файл було згенеровано 6 February 2026 at 12:36:03 (UTC) із використанням *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** від *
*[Roland Milto](https://roland-milto.de/)**.</small>