# getTypeOf

## Опис

`getTypeOf` повертає детальну, людиночитну мітку типу для заданого значення, включно з уточненими числовими типами та
конкретними видами об’єктів.

### Випадок використання

Використовуйте `getTypeOf`, щоб уніфікувати визначення типів під час валідації введення та діагностики — наприклад, щоб
відхиляти `nan`, приймати лише `integer`-ідентифікатори, обробляти числові рядки на кшталт `decimal` інакше, ніж
звичайний `string`, або логувати точні різновиди об’єктів, такі як `date` і `regexp`.

> **Примітка для користувачів TypeScript:**
>
> Тип, що повертається: `DataTypeAsString | string`. Сприймайте його як описову мітку; під час розгалуження порівнюйте з
> відомими літералами на кшталт `integer`, `float`, `nan`, `array`, `null` та `undefined`.

### Переваги

- Повертає більш деталізований рядок типу, ніж JavaScript-овий `typeof`, включно з числовими підтипами на кшталт
  `integer`, `float` і `nan`.
- Явно розрізняє `null` і `undefined` як `null` та `undefined`.
- Виявляє поширені формати числових рядків і повідомляє їх як `binary`, `octal`, `decimal` або `hexadecimal` замість
  звичайного `string`.
- Також ідентифікує масиви як `array` і використовує `Object.prototype.toString`, щоб надавати конкретні назви типів
  об’єктів (наприклад, `date`, `regexp`, `map`, `set`).
- Дуже корисно для валідації, логування та налагодження, коли потрібні узгоджені, людиночитні мітки типів.

## Використання

### Синтаксис

Функція:

- `getTypeOf(value)`

Параметри:

- `value`: Значення, для якого потрібно визначити тип даних.

### Локальний імпорт функції

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// Приклад перевірок
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}

```

### Глобальний імпорт об’єкта

Щоб імпортувати функції як глобальні методи об’єкта, використовуйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступний метод буде доступний глобально:

- `Type.getTypeOf(value)`

## Аналіз функцій

Тут задокументовано табличний аналіз виводу, що виникає під час підстановки різних параметрів у
функції: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>Файл було згенеровано 6 February 2026 at 13:15:27 (UTC) із використанням *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** від *
*[Roland Milto](https://roland-milto.de/)**.</small>