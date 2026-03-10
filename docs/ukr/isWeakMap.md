# isWeakMap

## Опис

Визначає, чи є задане `value` екземпляром `WeakMap`.

### Випадок використання

Використовуйте `isWeakMap`, коли ви приймаєте значення типу `unknown` (наприклад, із публічного API, системи плагінів
або динамічної конфігурації) і потрібно перевірити, що це `WeakMap`, перш ніж використовувати поведінку, специфічну для
`WeakMap`.

> **Примітка для користувачів TypeScript:**
>
> `isWeakMap` виконує перевірку `instanceof WeakMap`; це рантайм-ґард, який повертає `true` лише для справжніх
> екземплярів `WeakMap`.

### Переваги

- Проста перевірка під час виконання, чи є значення `WeakMap`.
- Допомагає запобігти неправильному використанню API, які вимагають `WeakMap`, повертаючи `true`/`false` замість
  викидання помилки.
- Працює з вхідними значеннями типу `unknown`, що робить це зручним на межах модулів (наприклад, під час парсингу,
  роботи із зовнішніми даними або нетипізованим кодом).

## Використання

### Синтаксис

Функція:

- `isWeakMap(value)`

Параметри:

- `value`: Значення для перевірки.

### Локальний імпорт функції

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a є WeakMap під час виконання
}

console.log(isWeakMap(a)); // true
console.log(isWeakMap(b)); // false
```

### Глобальний імпорт об’єкта

Щоб імпортувати функції як глобальні методи об’єкта, використовуйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступний метод буде доступний глобально:

- `Type.isWeakMap(value)`

## Аналіз функцій

Тут задокументовано табличний аналіз виводу, що виникає під час підстановки різних параметрів у
функції: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>Файл було згенеровано 30 January 2026 at 13:27:28 (UTC) із використанням *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** від *
*[Roland Milto](https://roland-milto.de/)**.</small>