# areValidDates

## Опис

Утврдува дали една низа е непразна и се состои целосно од валидни `Date` објекти.

### Случај на употреба

Користете `areValidDates` за да валидирате низи обезбедени од корисник или од API пред да извршувате операции базирани
на датуми (сортирање, проверки на опсег, форматирање), осигурувајќи дека сите записи се реални, валидни `Date` објекти и
дека листата не е празна.

> **Белешка за корисници на TypeScript:**
>
> `areValidDates` враќа `false` за празна низа; осигурете се дека низата е наменета да биде непразна пред да се потпрете
> на неа како чекор за валидација.

### Предности

- Враќа `true` само кога секој елемент е валидна инстанца на `Date` (без невалидни датуми како `new Date('invalid')`).
- Одбива празен влез со враќање `false`, осигурувајќи дека прифаќате само значајни, непразни листи со датуми.
- Обезбедува едноставна булова проверка во стил на guard што лесно се комбинира со други валидации.

## Употреба

### Синтакса

Функција:

- `areValidDates(array)`

Параметри:

- `array`: Низата за проверка, која потенцијално содржи `Date` објекти.

### Локален импорт на функција

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // точно
console.log(areValidDates(b)); // неточно
console.log(areValidDates(c)); // неточно
console.log(areValidDates(d)); // неточно

```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.areValidDates(array)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>Датотеката беше генерирана на 30 January 2026 at 14:32:50 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>