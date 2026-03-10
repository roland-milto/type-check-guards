# areFinite

## Опис

`areFinite` проверува дали вредноста е непразна низа чии елементи се сите конечни броеви, враќајќи `true` ако е така и
`false` во спротивно.

### Случај на употреба

Валидирајте низи со нумерички влез (на пр., серии за графикони, листи со координати, примероци од мерења) пред да
извршувате пресметки, осигурувајќи дека резултатот е `true` само кога сите вредности се конечни броеви.

> **Белешка за корисници на TypeScript:**
>
> Користете `areFinite` кога треба да се осигурате дека низата е непразна и содржи само конечни броеви; враќа `false` за
> празни низи и за низи што содржат `NaN` или бесконечности.

### Предности

- Враќа `true` само кога влезот е непразна низа и секој елемент е конечен број.
- Ги отфрла `Infinity`, `-Infinity` и `NaN` потпирајќи се на проверки со `isFinite` за секој елемент.
- Обезбедува едноставен булов резултат (`true`/`false`) погоден за гардови и текови за валидација.

## Употреба

### Синтакса

Функција:

- `areFinite(array)`

Параметри:

- `array`: Низата што треба да се провери дали сите нејзини елементи се конечни.

### Локален импорт на функција

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // точно
console.log(areFinite(b)); // неточно
console.log(areFinite(c)); // неточно

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.areFinite(array)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>Датотеката беше генерирана на 30 January 2026 at 16:35:53 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>