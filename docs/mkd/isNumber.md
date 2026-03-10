# isNumber

## Опис

`isNumber` проверува дали вредноста е конечен број што не е `NaN`.

### Случај на употреба

Валидирајте нумерички внес од недоверливи извори (форми, query params, JSON payloads) пред пресметки, складирање или
проверки на опсег, осигурувајќи дека поминуваат (`true`) само конечни броеви, а сè друго враќа `false`.

> **Белешка за корисници на TypeScript:**
>
> Користете `isNumber` за да валидирате `unknown` вредности пред да правите аритметика; ги отфрла `NaN`, `Infinity` и
`-Infinity`.

### Предности

- Враќа `true` само за вистински JavaScript броеви (проверка на тип плус отфрлање на `NaN` и бесконечност).
- Спречува вообичаени багови при валидација каде `NaN`, `Infinity` или `-Infinity` по грешка поминуваат како броеви.
- Работи одлично како runtime guard за непознат влез (на пр., JSON, кориснички внес, надворешни API-и).
- Едноставно, брзо и без несакани ефекти.

## Употреба

### Синтакса

Функција:

- `isNumber(value)`

Параметри:

- `value`: Вредноста што треба да се провери.

### Локален импорт на функција

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input е валиден конечен број
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.isNumber(value)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>Датотеката беше генерирана на 30 January 2026 at 13:10:04 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>