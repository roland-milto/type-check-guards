# isOfType

## Опис

Визначає, чи відповідає задане `value` вказаному рядку типу, використовуючи `typeof` для примітивів і резервний механізм
для складних типів.

### Випадок використання

Валідуйте та звужуйте `unknown` вхідні дані (наприклад, відповіді API, введення користувача, розпарсений JSON),
перевіряючи, чи є значення очікуваним рядком типу, перш ніж виконувати операції, специфічні для типу.

> **Примітка для користувачів TypeScript:**
>
> Використовуйте `isOfType`, щоб розгалужуватися за типами під час виконання при роботі зі значеннями `unknown`; вона
> повертає `true`/`false` і явно обробляє `null` та `undefined`.

### Переваги

- Перевіряє примітиви через прямий `typeof` для швидкості та зрозумілості.
- Коректно обробляє `null` і `undefined`, які сам по собі `typeof` не може розрізнити належним чином.
- Підтримує складні або користувацькі рядки типів через резервне порівняння з використанням `getTypeOf`.
- Повертає простий булевий результат (`true`/`false`), придатний для гардiв і розгалуження.

## Використання

### Синтаксис

Функція:

- `isOfType(value, type)`

Параметри:

- `value`: Значення, яке потрібно перевірити відносно `type`.
- `type`: Рядкове представлення типу, з яким потрібно звірити.

### Локальний імпорт функції

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // тут input є числом
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // тут input є рядком
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### Глобальний імпорт об’єкта

Щоб імпортувати функції як глобальні методи об’єкта, використовуйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступний метод буде доступний глобально:

- `Type.isOfType(value, type)`

## Аналіз функцій

Тут задокументовано табличний аналіз виводу, що виникає під час підстановки різних параметрів у
функції: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>Файл було згенеровано 30 January 2026 at 17:07:03 (UTC) із використанням *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** від *
*[Roland Milto](https://roland-milto.de/)**.</small>