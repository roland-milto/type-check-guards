# isFilledArray

## Опис

Перевіряє, чи є `value` масивом із принаймні одним елементом, повертаючи `true` або `false`.

### Випадок використання

Використовуйте `isFilledArray`, щоб валідувати вхідні дані (наприклад, API payloads, значення форм, конфігурацію) перед
ітерацією, доступом до першого елемента або застосуванням логіки, яка вимагає принаймні одного елемента.

> **Примітка для користувачів TypeScript:**
>
> `isFilledArray` — це runtime-guard, який повертає boolean; він не звужує типи елементів, окрім підтвердження, що масив
> непорожній.

### Переваги

- Проста й швидка перевірка непорожнього масиву за допомогою `Array.isArray` і перевірки довжини.
- Допомагає уникати помилок під час виконання, коли код припускає, що масив має принаймні один елемент.
- Чіткий булевий результат: повертає `true` для непорожніх масивів і `false` в інших випадках.

## Використання

### Синтаксис

Функція:

- `isFilledArray(value)`

Параметри:

- `value`: Значення, яке потрібно перевірити, чи є воно непорожнім масивом.

### Локальний імпорт функції

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input є непорожнім масивом під час виконання
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Глобальний імпорт об’єкта

Щоб імпортувати функції як глобальні методи об’єкта, використовуйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступний метод буде доступний глобально:

- `Type.isFilledArray(value)`

## Аналіз функцій

Тут задокументовано табличний аналіз виводу, що виникає під час підстановки різних параметрів у
функції: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>Файл було згенеровано 6 February 2026 at 11:49:16 (UTC) із використанням *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** від *
*[Roland Milto](https://roland-milto.de/)**.</small>