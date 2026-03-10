# areDates

## Опис

`areDates` утврдува дали дадена низа е пополнета и содржи само `Date` објекти, враќајќи `true` само кога сите елементи
се валидни датуми.

### Случај на употреба

Користете `areDates` за да валидирате непознат влез (на пр., парсиран JSON, податоци од формулар, API payload-и) пред да
извршите логика специфична за датуми како сортирање по време, форматирање или пресметување опсези.

> **Белешка за корисници на TypeScript:**
>
> Враќа `true` само за непразни низи каде што секој елемент е `Date`; празните низи даваат `false`.

### Предности

- Осигурува дека низата не е празна пред да се валидира нејзината содржина, спречувајќи `true` за празни влезови.
- Потврдува дека секој елемент е инстанца на `Date`, враќајќи `false` веднаш при првото несовпаѓање.
- Корисно како проверка во стил на guard пред извршување операции специфични за датуми врз елементите на низата.

## Употреба

### Синтакса

Функција:

- `areDates(array)`

Параметри:

- `array`: Низата што треба да се провери за `Date` објекти.

### Локален импорт на функција

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // точно
console.log(areDates(b)); // неточно
console.log(areDates(c)); // неточно

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}

```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.areDates(array)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [areDates](../_analysis/areDates.md)

<br>

---

<small>Датотеката беше генерирана на 31 January 2026 at 15:31:19 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>