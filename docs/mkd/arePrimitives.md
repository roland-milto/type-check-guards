# arePrimitives

## Опис

`arePrimitives` оценува дали сите елементи во дадена, непразна низа се примитивни типови.

### Случај на употреба

Потврдете дека влезните податоци (на пр., параметри од query, вредности од CSV ред или листа од IDs/tags) содржат само
примитивни вредности пред серијализација, хеширање, логирање или пред да ги проследите до API-и што не смеат да примаат
објекти.

> **Белешка за корисници на TypeScript:**
>
> Користете `arePrimitives` кога треба да се осигурате дека `unknown[]` содржи само примитивни вредности (string,
> number, bigint, boolean, symbol, undefined или null) пред понатамошна обработка.

### Предности

- Враќа `true` само кога секој елемент е примитивна вредност, што го прави строг чувар за низи „без објекти/функции“.
- Брзо прекинува: враќа `false` веднаш штом ќе се пронајде непримитивен елемент.
- Исто така враќа `false` за не-низи и празни низи (преку проверката за пополнета низа), спречувајќи случајно прифаќање
  на невалиден влез.

## Употреба

### Синтакса

Функција:

- `arePrimitives(array)`

Параметри:

- `array`: Низата што треба да се провери дали содржи елементи од примитивен тип.

### Локален импорт на функција

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // точно
const r2 = arePrimitives(b); // точно
const r3 = arePrimitives(c); // неточно
```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.arePrimitives(array)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>Датотеката беше генерирана на 31 January 2026 at 00:05:32 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>