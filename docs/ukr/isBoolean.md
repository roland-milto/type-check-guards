# isBoolean

## Опис

Визначає, чи є задане значення типу `boolean`.

### Випадок використання

Валідувати зовнішні або нетипізовані дані (наприклад, змінні середовища, JSON-пейлоади, параметри запиту), щоб
переконатися, що значення має тип `boolean`, перед використанням у умовній логіці.

> **Примітка для користувачів TypeScript:**
>
> Використовуйте `isBoolean`, щоб звузити тип `unknown` до `boolean` перед застосуванням булевих операцій.

### Переваги

- Проста й швидка перевірка під час виконання за допомогою `typeof`.
- Допомагає валідувати невідомі вхідні дані перед логікою, специфічною для булевих значень.
- Повертає передбачуваний результат `boolean` (`true`/`false`).

## Використання

### Синтаксис

Функція:

- `isBoolean(value)`

Параметри:

- `value`: Значення, яке потрібно перевірити.

### Локальний імпорт функції

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // тут input є булевим значенням
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Глобальний імпорт об’єкта

Щоб імпортувати функції як глобальні методи об’єкта, використовуйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступний метод буде доступний глобально:

- `Type.isBoolean(value)`

## Аналіз функцій

Тут задокументовано табличний аналіз виводу, що виникає під час підстановки різних параметрів у
функції: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>Файл було згенеровано 30 January 2026 at 14:38:19 (UTC) із використанням *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** від *
*[Roland Milto](https://roland-milto.de/)**.</small>