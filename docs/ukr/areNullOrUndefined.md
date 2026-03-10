# areNullOrUndefined

## Опис

Перевіряє, чи всі елементи в заданому масиві є `null` або `undefined`.

### Випадок використання

Перевірити, що список необов’язкових полів не містить жодних фактичних значень (лише `null`/`undefined`), перш ніж
вирішити пропустити обробку або показати стан «значення не надано».

> **Примітка для користувачів TypeScript:**
>
> Використовуйте `areNullOrUndefined`, коли потрібно перевірити, що масив містить лише відсутні значення (`null`/
`undefined`). Зверніть увагу, що для порожнього масиву він повертає `false`.

### Переваги

- Повертає `true` лише тоді, коли кожен елемент є `null` або `undefined`.
- Повертає `false` для порожніх масивів, допомагаючи відрізнити «немає даних» від «усі значення відсутні».
- Працює з `unknown[]`, що робить його безпечним для використання перед звуженням типів.

## Використання

### Синтаксис

Функція:

- `areNullOrUndefined(array)`

Параметри:

- `array`: Масив для перевірки.

### Локальний імпорт функції

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false
```

### Глобальний імпорт об’єкта

Щоб імпортувати функції як глобальні методи об’єкта, використовуйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступний метод буде доступний глобально:

- `Type.areNullOrUndefined(array)`

## Аналіз функцій

Тут задокументовано табличний аналіз виводу, що виникає під час підстановки різних параметрів у
функції: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>Файл було згенеровано 31 January 2026 at 00:31:48 (UTC) із використанням *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** від *
*[Roland Milto](https://roland-milto.de/)**.</small>