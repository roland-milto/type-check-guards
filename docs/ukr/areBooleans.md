# areBooleans

## Опис

`areBooleans` перевіряє, чи містить заданий непорожній масив лише булеві значення, повертаючи `true`, якщо так, і
`false` в іншому випадку.

### Випадок використання

Перевіряйте дані, надані користувачем або отримані ззовні (наприклад, JSON payloads, query params, config arrays), щоб
упевнитися, що непорожній список містить лише булеві значення, перш ніж застосовувати булеву логіку або передавати його
в API, які очікують `boolean[]`.

> **Примітка для користувачів TypeScript:**
>
> Використовуйте `areBooleans`, щоб перевірити `unknown[]` перед тим, як трактувати його як `boolean[]`; він повертає
`false` для порожніх масивів, тож обробляйте цей випадок явно, якщо порожній список має бути дозволений.

### Переваги

- Повертає `true` лише тоді, коли кожен елемент є булевим значенням, а вхідні дані — непорожній масив.
- Запобігає хибнопозитивним результатам, відхиляючи порожні масиви (повертає `false`).
- Добре працює як перевірка під час виконання перед операціями лише з булевими значеннями (наприклад, `every`, `some`,
  логічні згортання).

## Використання

### Синтаксис

Функція:

- `areBooleans(array)`

Параметри:

- `array`: Масив, який потрібно перевірити на наявність булевих елементів.

### Локальний імпорт функції

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### Глобальний імпорт об’єкта

Щоб імпортувати функції як глобальні методи об’єкта, використовуйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступний метод буде доступний глобально:

- `Type.areBooleans(array)`

## Аналіз функцій

Тут задокументовано табличний аналіз виводу, що виникає під час підстановки різних параметрів у
функції: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>Файл було згенеровано 30 January 2026 at 14:42:59 (UTC) із використанням *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** від *
*[Roland Milto](https://roland-milto.de/)**.</small>