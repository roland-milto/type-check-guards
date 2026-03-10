# areDates

## Опис

`areDates` визначає, чи заданий масив заповнений і містить лише об’єкти `Date`, повертаючи `true` лише тоді, коли всі
елементи є коректними датами.

### Випадок використання

Використовуйте `areDates`, щоб перевіряти невідомі вхідні дані (наприклад, розібраний JSON, дані форми, payload API)
перед запуском логіки, специфічної для дат, як-от сортування за часом, форматування або обчислення діапазонів.

> **Примітка для користувачів TypeScript:**
>
> Повертає `true` лише для непорожніх масивів, де кожен елемент є `Date`; порожні масиви дають `false`.

### Переваги

- Гарантує, що масив не порожній перед перевіркою його вмісту, запобігаючи поверненню `true` для порожніх вхідних даних.
- Перевіряє, що кожен елемент є екземпляром `Date`, і негайно повертає `false` при першій невідповідності.
- Корисно як перевірка у стилі guard перед виконанням операцій, специфічних для дат, над елементами масиву.

## Використання

### Синтаксис

Функція:

- `areDates(array)`

Параметри:

- `array`: Масив, який потрібно перевірити на наявність об’єктів `Date`.

### Локальний імпорт функції

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // true
console.log(areDates(b)); // false
console.log(areDates(c)); // false

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}
```

### Глобальний імпорт об’єкта

Щоб імпортувати функції як глобальні методи об’єкта, використовуйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступний метод буде доступний глобально:

- `Type.areDates(array)`

## Аналіз функцій

Тут задокументовано табличний аналіз виводу, що виникає під час підстановки різних параметрів у
функції: [areDates](../_analysis/areDates.md)

<br>

---

<small>Файл було згенеровано 31 January 2026 at 15:32:48 (UTC) із використанням *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** від *
*[Roland Milto](https://roland-milto.de/)**.</small>