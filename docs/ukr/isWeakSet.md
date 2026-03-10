# isWeakSet

## Опис

Визначає, чи є задане `value` об’єктним `WeakSet`.

### Випадок використання

Використовуйте `isWeakSet`, коли приймаєте нетипізований ввід (наприклад, із зовнішніх API, динамічної конфігурації або
значень типу `unknown`) і вам потрібно перевірити, що це `WeakSet`, перш ніж виконувати операції, специфічні для
`WeakSet`.

> **Примітка для користувачів TypeScript:**
>
> Використовуйте `isWeakSet`, щоб звузити значення типу `unknown` до `WeakSet<object>` під час виконання; зауважте, що
`WeakSet` може містити лише посилання на об’єкти.

### Переваги

- Забезпечує просту перевірку під час виконання, чи є значення `WeakSet`.
- Допомагає запобігати помилкам типізації, гарантуючи, що лише екземпляри `WeakSet` обробляються як такі.
- Працює з будь-яким вхідним значенням типу `unknown` і повертає чіткий булевий результат (`true`/`false`).

## Використання

### Синтаксис

Функція:

- `isWeakSet(value)`

Параметри:

- `value`: Значення, яке потрібно перевірити.

### Локальний імпорт функції

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // true
console.log(isWeakSet(b)); // false

if (isWeakSet(a)) {
  // a є WeakSet під час виконання
}
```

### Глобальний імпорт об’єкта

Щоб імпортувати функції як глобальні методи об’єкта, використовуйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступний метод буде доступний глобально:

- `Type.isWeakSet(value)`

## Аналіз функцій

Тут задокументовано табличний аналіз виводу, що виникає під час підстановки різних параметрів у
функції: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>Файл було згенеровано 30 January 2026 at 14:19:43 (UTC) із використанням *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** від *
*[Roland Milto](https://roland-milto.de/)**.</small>