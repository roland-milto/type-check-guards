# isBigInt

## Опис

`isBigInt` проверува дали дадена вредност е од тип `bigint`, враќајќи `true` за BigInt примитиви и `false` во спротивно.

### Случај на употреба

Валидирајте и стеснете вредности што доаѓаат од нетипизирани извори (на пр., парсирање JSON, кориснички внес, надворешни
API-и) пред да извршувате пресметки специфични за BigInt или да ги зачувувате во полиња што прифаќаат само BigInt.

> **Белешка за корисници на TypeScript:**
>
> Користете `isBigInt` за да го стесните `unknown` на `bigint` пред да правите BigInt аритметика (на пр., `+`, `*`) која
> бара BigInt операнди.

### Предности

- Обезбедува едноставна, сигурна проверка во runtime за примитивниот тип `bigint`.
- Помага да се стеснат `unknown` вредностите пред извршување операции што се дозволени само за BigInt.
- Избегнува лажни позитиви: обични броеви, стрингови и други типови враќаат `false`.

## Употреба

### Синтакса

Функција:

- `isBigInt(value)`

Параметри:

- `value`: Вредноста што треба да се провери.

### Локален импорт на функција

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // точно
console.log(isBigInt(10));  // неточно
console.log(isBigInt("10")); // неточно

```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.isBigInt(value)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>Датотеката беше генерирана на 31 January 2026 at 23:32:33 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>