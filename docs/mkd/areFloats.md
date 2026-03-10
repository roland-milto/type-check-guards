# areFloats

## Опис

`areFloats` проверува дали дадена низа е пополнета и дали сите нејзини елементи се децимални броеви (float).

### Случај на употреба

Користете `areFloats` кога добивате `unknown[]` (на пр., од JSON, параметри на барање или надворешни API-и) и треба да
се осигурате дека е пополнета низа каде што секоја ставка е децимален број (float) пред да извршите нумеричка логика
како просек, интерполација или статистички пресметки.

> **Белешка за корисници на TypeScript:**
>
> Користете `areFloats` за да го заштитите `unknown[]` пред да го третирате како `number[]` што содржи само децимални
> броеви (float); враќа `false` за празни низи и за секој елемент што не е децимален број (float).

### Предности

- Враќа `true` само кога влезот е непразна низа и секој елемент е децимален број (float).
- Брзо прекинува: враќа `false` веднаш штом ќе се пронајде елемент што не е децимален број (float).
- Помага да се валидира непознат влез пред да се извршат пресметки специфични за децимални броеви (float).

## Употреба

### Синтакса

Функција:

- `areFloats(array)`

Параметри:

- `array`: Низата што треба да се провери за елементи што се децимални броеви (float).

### Локален импорт на функција

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // точно
console.log(areFloats(b)); // неточно
console.log(areFloats(c)); // неточно

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null
```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.areFloats(array)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>Датотеката беше генерирана на 30 January 2026 at 15:58:28 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>