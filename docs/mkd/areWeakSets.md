# areWeakSets

## Опис

Проверува дали влезот е непразна низа каде што секој елемент е `WeakSet`, враќајќи `true` само во тој случај.

### Случај на употреба

Валидирајте влез во време на извршување (на пр., од API, конфигурација или податоци обезбедени од корисник) за да се
осигурате дека имате непразна листа од инстанци на `WeakSet` пред да продолжите со логика што зависи од однесувањето на
`WeakSet`.

> **Белешка за корисници на TypeScript:**
>
> Користете `areWeakSets` за да валидирате непознат влез пред да го третирате како `WeakSet[]`. Враќа `false` за празни
> низи и за вредности што не се низи.

### Предности

- Осигурува дека секој елемент во влезната низа е `WeakSet`.
- Враќа `false` за празни низи, спречувајќи случајни резултати „сè е валидно“ кога недостасуваат податоци.
- Безбедно откажува со враќање `false` кога влезот не е пополнета низа (вклучувајќи `null`).
- Корисно како заштитна проверка пред извршување операции што бараат инстанци на `WeakSet`.

## Употреба

### Синтакса

Функција:

- `areWeakSets(array)`

Параметри:

- `array`: Низата што треба да се провери дали содржи `WeakSet` објекти.

### Локален импорт на функција

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a е непразна низа од инстанци на WeakSet
}

console.log(areWeakSets(a)); // точно
console.log(areWeakSets(b)); // неточно
console.log(areWeakSets(c)); // неточно
console.log(areWeakSets(null as unknown)); // неточно
```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.areWeakSets(array)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>Датотеката беше генерирана на 30 January 2026 at 14:09:45 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>