# isUndefined

## Опис

Перевіряє, чи є задане значення `undefined`.

### Випадок використання

Використовуйте `isUndefined`, щоб захищати необов’язкові вхідні дані, виявляти відсутні властивості або розрізняти між
«не надано» (`undefined`) та «явно порожньо» (`null`).

> **Примітка для користувачів TypeScript:**
>
> Використовуйте `isUndefined`, коли вам потрібно саме виявити `undefined` (а не `null`). Це безпечно, оскільки
> спирається на `typeof value === "undefined"`.

### Переваги

- Забезпечує чітку, явну перевірку на `undefined` за допомогою `typeof`, уникаючи крайових випадків із неоголошеними
  змінними.
- Повертає простий булевий результат (`true`/`false`), придатний для гардiв, розгалуження та логіки валідації.
- Допомагає відрізняти `undefined` від інших «порожніх» значень, як-от `null`, `0`, `""` або `NaN`.

## Використання

### Синтаксис

Функція:

- `isUndefined(value)`

Параметри:

- `value`: Значення, яке потрібно перевірити.

### Локальний імпорт функції

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x тут є undefined
} else {
  // x тут не є undefined
}

const a = isUndefined(undefined); // true
const b = isUndefined(null);      // false

```

### Глобальний імпорт об’єкта

Щоб імпортувати функції як глобальні методи об’єкта, використовуйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступний метод буде доступний глобально:

- `Type.isUndefined(value)`

## Аналіз функцій

Тут задокументовано табличний аналіз виводу, що виникає під час підстановки різних параметрів у
функції: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>Файл було згенеровано 30 January 2026 at 14:04:49 (UTC) із використанням *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** від *
*[Roland Milto](https://roland-milto.de/)**.</small>