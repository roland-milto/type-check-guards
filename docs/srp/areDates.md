# areDates

## Опис

`areDates` утврђује да ли је дати низ попуњен и да ли садржи само `Date` објекте, враћајући `true` само када су сви
елементи важећи датуми.

### Случај употребе

Користите `areDates` за валидацију непознатог улаза (нпр. парсирани JSON, подаци из формулара, API payload-ови) пре
покретања логике специфичне за датуме, као што су сортирање по времену, форматирање или израчунавање опсега.

> **Напомена за TypeScript кориснике:**
>
> Враћа `true` само за непразне низове у којима је сваки елемент `Date`; празни низови дају `false`.

### Предности

- Обезбеђује да низ није празан пре валидације његовог садржаја, спречавајући `true` за празне улазе.
- Проверава да је сваки елемент инстанца `Date`, враћајући `false` одмах при првом неслагању.
- Корисно као провера у стилу „guard“ пре извршавања операција специфичних за датум над ставкама низа.

## Употреба

### Синтакса

Функција:

- `areDates(array)`

Параметри:

- `array`: Низ који треба проверити на `Date` објекте.

### Локални увоз функције

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // tačno
console.log(areDates(b)); // netačno
console.log(areDates(c)); // netačno

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}

```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.areDates(array)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [areDates](../_analysis/areDates.md)

<br>

---

<small>Датотека је генерисана 31 January 2026 at 15:32:24 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>