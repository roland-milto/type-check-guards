# areBigInts

## Опис

`areBigInts` утврђује да ли је вредност непразан низ који садржи само `bigint` вредности.

### Случај употребе

Валидирајте непознат улаз (нпр. парсиране JSON-сличне податке, API payload-ове или параметре функције типизиране као
`unknown`) како бисте осигурали да је то непразан низ `bigint` вредности пре обраде; враћа `true` само када су сви
елементи `bigint`, у супротном `false`.

> **Напомена за TypeScript кориснике:**
>
> Користите `areBigInts` као заштиту у време извршавања пре извођења операција које су дозвољене само над `bigint` (нпр.
> аритметика, поређења) над непознатим улазом.

### Предности

- Обезбеђује да је сваки елемент `bigint`, враћајући `true` само када се цео низ поклапа.
- По дизајну одбацује вредности које нису низови и празне низове (путем `isFilledArray`), спречавајући случајно
  прихватање неважећих улаза.
- Брзи прекид: враћа `false` чим се пронађе елемент који није `bigint`.

## Употреба

### Синтакса

Функција:

- `areBigInts(array)`

Параметри:

- `array`: Вредност коју треба проверити.

### Локални увоз функције

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // tačno
console.log(areBigInts(b)); // netačno
console.log(areBigInts(c)); // netačno
```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.areBigInts(array)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>Датотека је генерисана 31 January 2026 at 23:27:24 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>