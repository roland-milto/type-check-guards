# isNull

## Опис

Визначає, чи є надане `value` значенням `null`.

### Випадок використання

Використовуйте `isNull` для валідації вхідних даних або полів корисного навантаження API, де `null` є значущим
сигнальним значенням і має оброблятися інакше, ніж `undefined` або інші значення.

> **Примітка для користувачів TypeScript:**
>
> Використовуйте `isNull`, коли потрібно відрізняти `null` від `undefined` та інших хибних (falsy) значень; він повертає
`true` лише для `null`.

### Переваги

- Забезпечує точну перевірку на `null`, не змішуючи його з `undefined`.
- Надійно працює для будь-якого типу вхідних даних, оскільки приймає `unknown`.
- Простий, швидкий і без побічних ефектів; повертає лише `true` або `false`.

## Використання

### Синтаксис

Функція:

- `isNull(value)`

Параметри:

- `value`: Значення, яке потрібно перевірити на `null`.

### Локальний імпорт функції

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // true
console.log(isNull(b)); // false

if (isNull(a)) {
  // a тут є null
}
```

### Глобальний імпорт об’єкта

Щоб імпортувати функції як глобальні методи об’єкта, використовуйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступний метод буде доступний глобально:

- `Type.isNull(value)`

## Аналіз функцій

Тут задокументовано табличний аналіз виводу, що виникає під час підстановки різних параметрів у
функції: [isNull](../_analysis/isNull.md)

<br>

---

<small>Файл було згенеровано 31 January 2026 at 15:41:14 (UTC) із використанням *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** від *
*[Roland Milto](https://roland-milto.de/)**.</small>