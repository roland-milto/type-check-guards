# areRegExes

## Опис

`areRegExes` перевіряє, чи є значення заповненим масивом, що містить лише об’єкти `RegExp`.

### Випадок використання

Перевірити, що параметр конфігурації (наприклад, список шаблонів allow/deny) є непорожнім масивом регулярних виразів
перед використанням для зіставлення.

> **Примітка для користувачів TypeScript:**
>
> Використовуйте `areRegExes`, щоб звузити `unknown` до `RegExp[]` перед ітерацією або компонуванням шаблонів.

### Переваги

- Гарантує, що значення є непорожнім масивом, у якому кожен елемент є екземпляром `RegExp`.
- Надає просту булеву перевірку (`true`/`false`) для валідації введення користувача або конфігурації.
- Допомагає запобігти помилкам під час виконання, коли подальший код припускає, що всі елементи підтримують операції з
  регулярними виразами.

## Використання

### Синтаксис

Функція:

- `areRegExes(array)`

Параметри:

- `array`: Значення, яке потрібно перевірити.

### Локальний імпорт функції

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // patterns тут є масивом RegExp
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Глобальний імпорт об’єкта

Щоб імпортувати функції як глобальні методи об’єкта, використовуйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступний метод буде доступний глобально:

- `Type.areRegExes(array)`

## Аналіз функцій

Тут задокументовано табличний аналіз виводу, що виникає під час підстановки різних параметрів у
функції: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>Файл було згенеровано 30 January 2026 at 23:22:27 (UTC) із використанням *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** від *
*[Roland Milto](https://roland-milto.de/)**.</small>