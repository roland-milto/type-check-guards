# isValidDate

## Опис

`isValidDate` перевіряє, чи є задане значення валідним об’єктом `Date`, і повертає `true` лише для справжніх, не
невалідних дат.

### Випадок використання

Валідуйте введення користувача або дані API, які можуть містити дати, переконавшись, що значення є справжнім екземпляром
`Date`, а не невалідною датою, перш ніж виконувати обчислення дат, форматування або порівняння.

> **Примітка для користувачів TypeScript:**
>
> Використовуйте `isValidDate` перед викликом методів `Date` (наприклад, `toISOString`, `getTime`) для значень із типом
`unknown`, щоб переконатися, що це валідні об’єкти `Date`.

### Переваги

- Гарантує, що значення є екземпляром `Date`, а не просто рядком або числом, схожим на дату.
- Відхиляє невалідні дати (наприклад, `new Date("invalid")`), перевіряючи значення часу на `NaN`.
- Простий булевий guard, який легко використовувати в умовних операторах і конвеєрах валідації.
- Допомагає запобігати помилкам під час виконання під час виклику методів дати, попередньо перевіряючи вхідні дані.

## Використання

### Синтаксис

Функція:

- `isValidDate(value)`

Параметри:

- `value`: Значення, яке потрібно перевірити.

### Локальний імпорт функції

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input є дійсним екземпляром Date
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // false
console.log(isValidDate("2025-12-22")); // false

```

### Глобальний імпорт об’єкта

Щоб імпортувати функції як глобальні методи об’єкта, використовуйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступний метод буде доступний глобально:

- `Type.isValidDate(value)`

## Аналіз функцій

Тут задокументовано табличний аналіз виводу, що виникає під час підстановки різних параметрів у
функції: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>Файл було згенеровано 30 January 2026 at 16:53:28 (UTC) із використанням *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** від *
*[Roland Milto](https://roland-milto.de/)**.</small>