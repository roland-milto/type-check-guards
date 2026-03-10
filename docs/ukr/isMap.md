# isMap

## Опис

Перевіряє, чи є задане `value` об’єктом `Map`, повертаючи `true`, якщо так, і `false` в іншому разі.

### Випадок використання

Використовуйте `isMap`, коли отримуєте значення типу `unknown` (наприклад, із парсингу JSON, зовнішніх API або введення
користувача) і потрібно переконатися, що це `Map`, перш ніж виконувати операції `Map`.

> **Примітка для користувачів TypeScript:**
>
> `isMap` — це runtime-guard, який повертає `true`, коли значення є `Map`, і `false` в іншому разі; використовуйте його,
> щоб звузити `unknown` перед викликом API `Map`.

### Переваги

- Забезпечує швидку перевірку під час виконання, чи є значення `Map`.
- Допомагає запобігати помилкам типів, захищаючи гілки коду, які потребують методів `Map`, таких як `get`, `set` і
  `has`.
- Добре працює як легкий крок валідації під час обробки вхідних даних типу `unknown`.

## Використання

### Синтаксис

Функція:

- `isMap(value)`

Параметри:

- `value`: Значення для перевірки.

### Локальний імпорт функції

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### Глобальний імпорт об’єкта

Щоб імпортувати функції як глобальні методи об’єкта, використовуйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступний метод буде доступний глобально:

- `Type.isMap(value)`

## Аналіз функцій

Тут задокументовано табличний аналіз виводу, що виникає під час підстановки різних параметрів у
функції: [isMap](../_analysis/isMap.md)

<br>

---

<small>Файл було згенеровано 31 January 2026 at 16:42:27 (UTC) із використанням *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** від *
*[Roland Milto](https://roland-milto.de/)**.</small>