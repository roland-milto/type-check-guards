# areIndexesFound

## Опис

`areIndexesFound` проверува дали вредноста е непразна низа чии елементи се сите валидни индекси, враќајќи `true` ако се
и `false` во спротивно.

### Случај на употреба

Валидирајте податоци обезбедени од корисник или надворешни податоци (на пр., парсиран JSON) за кои се очекува да бидат
листа од индекси пред да ги користите за пристап или сечење на низи.

> **Белешка за корисници на TypeScript:**
>
> Користете `areIndexesFound` за да валидирате непознат влез пред да ги третирате неговите елементи како индекси на
> низа; враќа `false` за празни низи и за низи што содржат вредности што не се индекси.

### Предности

- Враќа `true` само кога влезот е пополнета низа и секој елемент е валиден индекс.
- Брзо прекинува: враќа `false` веднаш штом ќе се сретне елемент што не е индекс.
- Корисно како заштита пред користење вредности како позиции или офсети во низа.

## Употреба

### Синтакса

Функција:

- `areIndexesFound(array)`

Параметри:

- `array`: Низата што треба да се провери за усогласеност со индекси.

### Локален импорт на функција

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // точно
console.log(areIndexesFound(b)); // неточно
console.log(areIndexesFound(c)); // неточно

if (areIndexesFound(a)) {
  // Тука, `a` е потврдено дека е пополнета низа од индекси.
  const firstIndex = a[0];
  console.log(firstIndex);
}
```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.areIndexesFound(array)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>Датотеката беше генерирана на 31 January 2026 at 00:42:44 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>