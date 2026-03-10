# areOneOfType

## Опис

`areOneOfType` проверува дали сите елементи во непразна низа се од еден од наведените runtime типови.

### Случај на употреба

Валидирајте влезни податоци (на пр., парсиран JSON) каде што поле мора да биде непразна низа чии ставки се ограничени на
познат сет од примитивни типови; вратете `false` кога низата е празна или содржи било кој недозволен тип.

> **Белешка за корисници на TypeScript:**
>
> Оваа функција враќа boolean и не ги стеснува типовите на елементите во низата при компајлирање; користете ја како
> чекор за runtime валидација пред понатамошна обработка.

### Предности

- Осигурува дека секој елемент во низа се совпаѓа со барем еден дозволен runtime тип, враќајќи `true` само кога ќе
  помине целата низа.
- Рано ги отфрла невалидните влезови: враќа `false` кога `array` или `types` е празна или не е пополнета низа.
- Корисно за валидација на колекции со мешани типови (на пр., броеви и стрингови) со еден повик на `areOneOfType`.

## Употреба

### Синтакса

Функција:

- `areOneOfType(array, types)`

Параметри:

- `array`: Низа од елементи што треба да се проверат според дадените типови.
- `types`: Низа од стрингови што ги претставуваат типовите на податоци според кои се проверува.

### Локален импорт на функција

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.areOneOfType(array, types)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>Датотеката беше генерирана на 31 January 2026 at 23:37:44 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>