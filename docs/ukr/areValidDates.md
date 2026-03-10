# areValidDates

## Опис

Визначає, чи є масив непорожнім і чи складається він повністю з валідних об’єктів `Date`.

### Випадок використання

Використовуйте `areValidDates` для валідації масивів, наданих користувачем або API, перед виконанням операцій,
пов’язаних із датами (сортування, перевірки діапазону, форматування), щоб гарантувати, що всі записи є реальними,
валідними об’єктами `Date`, а список не порожній.

> **Примітка для користувачів TypeScript:**
>
> `areValidDates` повертає `false` для порожнього масиву; переконайтеся, що масив має бути непорожнім, перш ніж
> покладатися на нього як на крок валідації.

### Переваги

- Повертає `true` лише тоді, коли кожен елемент є коректним екземпляром `Date` (без невалідних дат на кшталт
  `new Date('invalid')`).
- Відхиляє порожнє введення, повертаючи `false`, гарантуючи, що ви приймаєте лише змістовні, непорожні списки дат.
- Надає просту булеву перевірку в стилі guard, яку легко поєднувати з іншими валідаціями.

## Використання

### Синтаксис

Функція:

- `areValidDates(array)`

Параметри:

- `array`: Масив для перевірки, який потенційно містить об’єкти `Date`.

### Локальний імпорт функції

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // істина
console.log(areValidDates(b)); // хибність
console.log(areValidDates(c)); // хибність
console.log(areValidDates(d)); // хибність

```

### Глобальний імпорт об’єкта

Щоб імпортувати функції як глобальні методи об’єкта, використовуйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступний метод буде доступний глобально:

- `Type.areValidDates(array)`

## Аналіз функцій

Тут задокументовано табличний аналіз виводу, що виникає під час підстановки різних параметрів у
функції: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>Файл було згенеровано 30 January 2026 at 14:34:30 (UTC) із використанням *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** від *
*[Roland Milto](https://roland-milto.de/)**.</small>