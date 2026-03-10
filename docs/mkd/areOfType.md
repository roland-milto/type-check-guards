# areOfType

## Опис

Проверува дали сите елементи во дадената `array` се од наведениот `type`.

### Случај на употреба

Користете `areOfType` за да валидирате непознат влез (на пр., парсиран JSON, API payloads, кориснички влез) пред да
извршувате операции специфични за типот врз секој елемент од една низа.

> **Белешка за корисници на TypeScript:**
>
> Бидејќи `areOfType` е type guard, TypeScript ја стеснува низата во `if (areOfType(...)) {}` блок на
`Array<DataTypeOf<T>>`.

### Предности

- Обезбедува TypeScript type guard: кога враќа `true`, влезот се стеснува на `Array<DataTypeOf<T>>`.
- Го валидира секој елемент според побараниот runtime тип, спречувајќи низи со мешани типови да поминат.
- Брзо откажување: враќа `false` веднаш штом ќе се пронајде елемент што не се совпаѓа.
- По дизајн ги отфрла не-низите и празните низи (зависи од `isFilledArray`).

## Употреба

### Синтакса

Функција:

- `areOfType(array, type)`

Параметри:

- `array`: Низата што треба да се провери.
- `type`: Типот според кој треба да се провери секој елемент во низата.

### Локален импорт на функција

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values сега е number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // неточно

```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.areOfType(array, type)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>Датотеката беше генерирана на 30 January 2026 at 17:10:28 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>