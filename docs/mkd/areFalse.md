# areFalse

## Опис

`areFalse` проверува дали сите елементи во дадена низа се строго буловата вредност `false`.

### Случај на употреба

Потврдете дека список од feature flags, проверки или резултати од guard се сите `false` пред да продолжите (на пр.,
потврдете дека нема присутни блокирачки услови).

> **Белешка за корисници на TypeScript:**
>
> Користете `areFalse` кога ви треба строга валидација дека низата не е празна и содржи само буловата вредност `false`.

### Предности

- Осигурува дека секој елемент е строго `false` (без принудна конверзија на truthy/falsey вредности).
- Враќа `false` за не-низи или празни низи со тоа што бара пополнета низа преку `isFilledArray`.
- Запира рано на првиот елемент што не е `false` за поголема ефикасност.

## Употреба

### Синтакса

Функција:

- `areFalse(array)`

Параметри:

- `array`: Низата што се проверува, која содржи елементи од било кој тип.

### Локален импорт на функција

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // точно
const b = areFalse([false, true, false]);  // неточно
const c = areFalse([false, "false", false]); // неточно
const d = areFalse([]); // неточно
```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.areFalse(array)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>Датотеката беше генерирана на 31 January 2026 at 16:17:51 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>