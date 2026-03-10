# areFilledArrays

## Опис

`areFilledArrays` проверува дали дводимензионална низа не е празна и дали сите нејзини поднизи не се празни.

### Случај на употреба

Користете `areFilledArrays` за да валидирате табеларен или матричен влез (на пр., CSV редови, податоци за мрежа,
групирани резултати) за да можете безбедно да претпоставите дека има барем една подниза и дека ниту една од поднизите не
е празна.

> **Белешка за корисници на TypeScript:**
>
> Користете `areFilledArrays` кога треба да се осигурате дека 2D низа има барем еден ред и дека секој ред има барем еден
> елемент пред да итерирате или да пристапувате по индекс.

### Предности

- Потврдува дека надворешната низа не е празна и дека секоја внатрешна низа исто така не е празна, враќајќи `true` само
  кога се исполнети двете услови.
- Работи со било кои типови елементи во поднизите (на пр., броеви, низи, објекти, вгнездени низи) бидејќи проверува само
  дали низите се „пополнети“, а не содржината на елементите.
- Обезбедува едноставен булов резултат (`true`/`false`) погоден за проверки (guards) пред обработка на дводимензионални
  податоци.

## Употреба

### Синтакса

Функција:

- `areFilledArrays(array)`

Параметри:

- `array`: Дводимензионалната низа што треба да се провери.

### Локален импорт на функција

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // точно
console.log(areFilledArrays(b)); // точно
console.log(areFilledArrays(c)); // точно
console.log(areFilledArrays(d)); // неточно
console.log(areFilledArrays(e)); // неточно
console.log(areFilledArrays(f)); // неточно

```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.areFilledArrays(array)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>Датотеката беше генерирана на 6 February 2026 at 11:57:48 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>