# areFalse

## Опис

`areFalse` перевіряє, чи всі елементи в наданому масиві є строго булевим значенням `false`.

### Випадок використання

Перевірити, що список feature flags, перевірок або результатів guard-ів усі є `false` перед продовженням (наприклад,
підтвердити, що немає блокувальних умов).

> **Примітка для користувачів TypeScript:**
>
> Використовуйте `areFalse`, коли потрібна сувора валідація, що масив не порожній і містить лише булеве значення
`false`.

### Переваги

- Гарантує, що кожен елемент є строго `false` (без приведення truthy/falsey).
- Повертає `false` для не-масивів або порожніх масивів, вимагаючи заповнений масив через `isFilledArray`.
- Зупиняється раніше на першому елементі, що не є `false`, для ефективності.

## Використання

### Синтаксис

Функція:

- `areFalse(array)`

Параметри:

- `array`: Масив для перевірки, що містить елементи будь-якого типу.

### Локальний імпорт функції

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // істина
const b = areFalse([false, true, false]);  // хибність
const c = areFalse([false, "false", false]); // хибність
const d = areFalse([]); // хибність
```

### Глобальний імпорт об’єкта

Щоб імпортувати функції як глобальні методи об’єкта, використовуйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступний метод буде доступний глобально:

- `Type.areFalse(array)`

## Аналіз функцій

Тут задокументовано табличний аналіз виводу, що виникає під час підстановки різних параметрів у
функції: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>Файл було згенеровано 31 January 2026 at 16:18:56 (UTC) із використанням *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** від *
*[Roland Milto](https://roland-milto.de/)**.</small>