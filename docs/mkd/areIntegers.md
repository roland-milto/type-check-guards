# areIntegers

## Опис

`areIntegers` утврдува дали сите елементи во дадена низа се цели броеви, враќајќи `true` ако се и `false` во спротивно.

### Случај на употреба

Користете `areIntegers` за да валидирате податоци обезбедени од корисник или од надворешни извори (на пр., query
параметри, JSON payloads, CSV редови) кога вашата логика бара пополнета листа од целобројни вредности како ID-иња,
бројачи, offset-и за пагинација или индекси на низа.

> **Белешка за корисници на TypeScript:**
>
> Користете `areIntegers` како runtime guard за влезови од тип `unknown[]` пред да ги третирате како `number[]` што
> содржи само цели броеви. Ако врати `false`, влезот или не е пополнета низа или содржи барем една вредност што не е цел
> број.

### Предности

- Враќа `true` само кога секој елемент е цел број; во спротивно враќа `false`.
- Помага да се валидира непознат влез пред да се извршат операции што работат само со цели броеви (на пр., индексирање,
  броења, ID-иња).
- Брзо откажува: престанува со проверка штом ќе се пронајде елемент што не е цел број.

## Употреба

### Синтакса

Функција:

- `areIntegers(array)`

Параметри:

- `array`: Низата што треба да се провери за елементи што се цели броеви.

### Локален импорт на функција

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // точно
console.log(areIntegers(b)); // точно
console.log(areIntegers(c)); // неточно

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));
```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.areIntegers(array)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>Датотеката беше генерирана на 31 January 2026 at 00:59:27 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>