# isValidDate

## Опис

`isValidDate` проверува дали дадена вредност е валиден `Date` објект и враќа `true` само за вистински, не-невалидни
датуми.

### Случај на употреба

Валидирајте кориснички внес или API податоци што може да содржат датуми, осигурувајќи дека вредноста е вистинска `Date`
инстанца и не е невалиден датум пред да извршувате пресметки со датуми, форматирање или споредби.

> **Белешка за корисници на TypeScript:**
>
> Користете `isValidDate` пред да повикувате `Date` методи (на пр., `toISOString`, `getTime`) на вредности типизирани
> како `unknown` за да се осигурате дека се валидни `Date` објекти.

### Предности

- Осигурува дека вредноста е инстанца на `Date`, а не само стринг или број што личи на датум.
- Ги отфрла невалидните датуми (на пр., `new Date("invalid")`) со проверка за `NaN` временски вредности.
- Едноставен булов заштитник што е лесен за користење во услови и валидациски цевководи.
- Помага да се спречат грешки при извршување при повикување методи за датум, со тоа што прво го проверува влезот.

## Употреба

### Синтакса

Функција:

- `isValidDate(value)`

Параметри:

- `value`: Вредноста што треба да се провери.

### Локален импорт на функција

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input е валидна инстанца на Date
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // false
console.log(isValidDate("2025-12-22")); // false

```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.isValidDate(value)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>Датотеката беше генерирана на 30 January 2026 at 16:51:52 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>