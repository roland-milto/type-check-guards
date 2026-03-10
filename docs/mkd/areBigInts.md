# areBigInts

## Опис

`areBigInts` утврдува дали некоја вредност е непразна низа што содржи само `bigint` вредности.

### Случај на употреба

Валидирајте непознат влез (на пр., парсирани JSON-слични податоци, API payloads или параметри на функции типизирани како
`unknown`) за да се осигурате дека е непразна низа од `bigint` вредности пред обработка; враќа `true` само кога сите
елементи се `bigint`, во спротивно `false`.

> **Белешка за корисници на TypeScript:**
>
> Користете `areBigInts` како runtime guard пред да извршувате операции само со `bigint` (на пр., аритметика, споредби)
> врз непознат влез.

### Предности

- Осигурува дека секој елемент е `bigint`, враќајќи `true` само кога целата низа се совпаѓа.
- По дизајн отфрла вредности што не се низи и празни низи (преку `isFilledArray`), спречувајќи случајно прифаќање на
  невалидни влезови.
- Брз прекин: враќа `false` веднаш штом ќе се пронајде елемент што не е `bigint`.

## Употреба

### Синтакса

Функција:

- `areBigInts(array)`

Параметри:

- `array`: Вредноста што треба да се провери.

### Локален импорт на функција

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // точно
console.log(areBigInts(b)); // неточно
console.log(areBigInts(c)); // неточно
```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.areBigInts(array)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>Датотеката беше генерирана на 31 January 2026 at 23:26:40 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>