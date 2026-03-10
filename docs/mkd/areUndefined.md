# areUndefined

## Опис

`areUndefined` проверува дали секој елемент во дадена низа е `undefined`.

### Случај на употреба

Потврдете дека листа од опционални резултати не содржи вистински вредности (само `undefined`), на пр., по мапирање на
пребарувања каде што недостасувачките записи се претставени како `undefined`, и сакате да потврдите дека сите
пребарувања не успеале.

> **Белешка за корисници на TypeScript:**
>
> Користете `areUndefined` кога треба да потврдите дека `unknown[]` содржи само `undefined` вредности; враќа `false` за
> празни низи и за не-низа/невалидни влезови поради внатрешната проверка `isFilledArray`.

### Предности

- Враќа `false` за не-низи и празни низи со тоа што бара пополнета низа преку `isFilledArray`.
- Осигурува дека секој елемент е `undefined`, не само некои, со што намерaта е експлицитна.
- Корисно како предикат во стил на guard при валидација на непознати влезни колекции.

## Употреба

### Синтакса

Функција:

- `areUndefined(array)`

Параметри:

- `array`: Низата што треба да се провери за `undefined` елементи.

### Локален импорт на функција

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // точно
const r2 = areUndefined(b); // неточно
const r3 = areUndefined(c); // неточно

// Забелешка: враќа неточно за празни низи
const r4 = areUndefined([]); // неточно
```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.areUndefined(array)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>Датотеката беше генерирана на 30 January 2026 at 13:56:50 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>