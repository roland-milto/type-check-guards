# areValidDates

## Опис

Одређује да ли је низ непразан и да ли се у потпуности састоји од важећих `Date` објеката.

### Случај употребе

Користите `areValidDates` за валидацију низова које је обезбедио корисник или API пре извршавања операција заснованих на
датумима (сортирање, провере опсега, форматирање), обезбеђујући да су сви уноси стварни, важећи `Date` објекти и да
листа није празна.

> **Напомена за TypeScript кориснике:**
>
> `areValidDates` враћа `false` за празан низ; уверите се да је низ намењен да буде непразан пре него што се ослоните на
> то као на корак валидације.

### Предности

- Враћа `true` само када је сваки елемент важећа инстанца `Date` (без неважећих датума као што је
  `new Date('invalid')`).
- Одбацује празан унос враћањем `false`, обезбеђујући да прихватате само смислене, непразне листе датума.
- Пружа једноставну буловску проверу у стилу guard-а коју је лако комбиновати са другим валидацијама.

## Употреба

### Синтакса

Функција:

- `areValidDates(array)`

Параметри:

- `array`: Низ који треба проверити, који потенцијално садржи `Date` објекте.

### Локални увоз функције

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // tačno
console.log(areValidDates(b)); // netačno
console.log(areValidDates(c)); // netačno
console.log(areValidDates(d)); // netačno

```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.areValidDates(array)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>Датотека је генерисана 30 January 2026 at 14:33:58 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>