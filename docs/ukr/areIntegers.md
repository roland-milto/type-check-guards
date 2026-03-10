# areIntegers

## Опис

`areIntegers` визначає, чи всі елементи в заданому масиві є цілими числами, повертаючи `true`, якщо так, і `false` в
іншому разі.

### Випадок використання

Використовуйте `areIntegers` для валідації даних, наданих користувачем або отриманих із зовнішніх джерел (наприклад,
параметри запиту, JSON-пейлоади, рядки CSV), коли ваша логіка потребує заповненого списку цілих значень, таких як ID,
лічильники, зсуви пагінації або індекси масиву.

> **Примітка для користувачів TypeScript:**
>
> Використовуйте `areIntegers` як runtime-захист для вхідних даних типу `unknown[]` перед тим, як трактувати їх як
`number[]`, що містить лише цілі числа. Якщо функція повертає `false`, вхідні дані або не є заповненим масивом, або
> містять принаймні одне неціле значення.

### Переваги

- Повертає `true` лише тоді, коли кожен елемент є цілим числом; інакше повертає `false`.
- Допомагає перевіряти невідомі вхідні дані перед виконанням операцій, що допускають лише цілі числа (наприклад,
  індексація, лічильники, ID).
- Швидко завершує перевірку: припиняє перевіряти, щойно знаходить елемент, що не є цілим числом.

## Використання

### Синтаксис

Функція:

- `areIntegers(array)`

Параметри:

- `array`: Масив, який потрібно перевірити на наявність цілих чисел.

### Локальний імпорт функції

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // істина
console.log(areIntegers(b)); // істина
console.log(areIntegers(c)); // хибність

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));
```

### Глобальний імпорт об’єкта

Щоб імпортувати функції як глобальні методи об’єкта, використовуйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступний метод буде доступний глобально:

- `Type.areIntegers(array)`

## Аналіз функцій

Тут задокументовано табличний аналіз виводу, що виникає під час підстановки різних параметрів у
функції: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>Файл було згенеровано 31 January 2026 at 01:00:58 (UTC) із використанням *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** від *
*[Roland Milto](https://roland-milto.de/)**.</small>