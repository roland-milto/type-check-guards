# areWeakSets

## Опис

Перевіряє, чи є вхідні дані непорожнім масивом, у якому кожен елемент є `WeakSet`, і повертає `true` лише в цьому
випадку.

### Випадок використання

Валідуйте вхідні дані під час виконання (наприклад, з API, конфігурації або даних, наданих користувачем), щоб
переконатися, що у вас є непорожній список екземплярів `WeakSet` перед продовженням логіки, яка залежить від поведінки
`WeakSet`.

> **Примітка для користувачів TypeScript:**
>
> Використовуйте `areWeakSets`, щоб перевіряти невідомі вхідні дані перед тим, як трактувати їх як `WeakSet[]`. Вона
> повертає `false` для порожніх масивів і не-масивів.

### Переваги

- Гарантує, що кожен елемент у вхідному масиві є `WeakSet`.
- Повертає `false` для порожніх масивів, запобігаючи випадковим результатам «усе валідне» за відсутності даних.
- Безпечно завершується, повертаючи `false`, коли вхідні дані не є заповненим масивом (включно з `null`).
- Корисно як перевірка перед виконанням операцій, що вимагають екземплярів `WeakSet`.

## Використання

### Синтаксис

Функція:

- `areWeakSets(array)`

Параметри:

- `array`: Масив, який потрібно перевірити на наявність об’єктів `WeakSet`.

### Локальний імпорт функції

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a — це непорожній масив екземплярів WeakSet
}

console.log(areWeakSets(a)); // true
console.log(areWeakSets(b)); // false
console.log(areWeakSets(c)); // false
console.log(areWeakSets(null as unknown)); // false
```

### Глобальний імпорт об’єкта

Щоб імпортувати функції як глобальні методи об’єкта, використовуйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступний метод буде доступний глобально:

- `Type.areWeakSets(array)`

## Аналіз функцій

Тут задокументовано табличний аналіз виводу, що виникає під час підстановки різних параметрів у
функції: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>Файл було згенеровано 30 January 2026 at 14:11:32 (UTC) із використанням *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** від *
*[Roland Milto](https://roland-milto.de/)**.</small>