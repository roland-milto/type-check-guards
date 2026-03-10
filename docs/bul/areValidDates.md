# areValidDates

## Описание

Определя дали даден масив е непразен и се състои изцяло от валидни обекти `Date`.

### Случай на употреба

Използвайте `areValidDates`, за да валидирате масиви, предоставени от потребител или API, преди да извършвате операции,
базирани на дати (сортиране, проверки на диапазон, форматиране), като гарантирате, че всички записи са реални, валидни
обекти `Date` и че списъкът не е празен.

> **Бележка за потребителите на TypeScript:**
>
> `areValidDates` връща `false` за празен масив; уверете се, че масивът е предназначен да бъде непразен, преди да
> разчитате на него като стъпка за валидация.

### Предимства

- Връща `true` само когато всеки елемент е валидна инстанция на `Date` (без невалидни дати като `new Date('invalid')`).
- Отхвърля празен вход, като връща `false`, гарантирайки, че приемате само смислени, непразни списъци с дати.
- Предоставя проста булева проверка в стил guard, която е лесна за комбиниране с други валидации.

## Използване

### Синтаксис

Функция:

- `areValidDates(array)`

Параметри:

- `array`: Масивът за проверка, който потенциално съдържа обекти `Date`.

### Локален импорт на функция

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // вярно
console.log(areValidDates(b)); // невярно
console.log(areValidDates(c)); // невярно
console.log(areValidDates(d)); // невярно

```

### Глобален импорт на обект

За импорт на функциите като глобални методи на обект използвайте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следният метод ще бъде наличен глобално:

- `Type.areValidDates(array)`

## Анализ на функции

Тук е документиран табличен анализ на резултата при подаване на различни параметри към
функциите: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>Файлът беше генериран на 30 January 2026 at 14:30:58 (UTC) с използването на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>