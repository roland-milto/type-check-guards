# areNumerics

## Опис

`areNumerics` проверува дали вредноста е непразна низа во која сите елементи се нумерички.

### Случај на употреба

Користете `areNumerics` за да валидирате надворешни или нетипизирани податоци (на пр., JSON payloads, query parameters,
form input) пред пресметување суми, просеци или други нумерички операции, осигурувајќи дека влезот е непразна нумеричка
низа и во спротивно враќајќи `false`.

> **Белешка за корисници на TypeScript:**
>
> Користете `areNumerics` за да го заштитите влезот од тип `unknown` пред да го третирате како нумеричка низа; враќа
`false` за вредности што не се низи и за празни низи.

### Предности

- Враќа `true` само кога влезот е непразна низа и секој елемент е нумерички.
- Брзо прекинува: престанува со проверка штом ќе се пронајде ненумерички елемент, враќајќи `false`.
- Помага безбедно да се валидира непознат влез пред извршување нумерички операции.

## Употреба

### Синтакса

Функција:

- `areNumerics(array)`

Параметри:

- `array`: Низата што треба да се провери за нумерички елементи.

### Локален импорт на функција

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // точно
console.log(areNumerics(b)); // точно
console.log(areNumerics(c)); // неточно
console.log(areNumerics(d)); // неточно
console.log(areNumerics(e)); // неточно

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null
```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.areNumerics(array)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>Датотеката беше генерирана на 6 February 2026 at 16:06:15 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>