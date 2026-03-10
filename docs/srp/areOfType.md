# areOfType

## Опис

Проверава да ли су сви елементи у датом `array` наведеног `type`.

### Случај употребе

Користите `areOfType` да валидирате непознат улаз (нпр. парсирани JSON, API payload-ови, кориснички унос) пре извођења
операција специфичних за тип над сваким елементом низа.

> **Напомена за TypeScript кориснике:**
>
> Пошто је `areOfType` type guard, TypeScript сузава низ унутар `if (areOfType(...)) {}` блока на
`Array<DataTypeOf<T>>`.

### Предности

- Пружа TypeScript type guard: када врати `true`, улаз се сузава на `Array<DataTypeOf<T>>`.
- Валидира сваки елемент у односу на тражени runtime тип, спречавајући да низови мешовитих типова прођу.
- Брзо прекида: враћа `false` чим се пронађе елемент који се не поклапа.
- Одбацује вредности које нису низови и празне низове по дизајну (зависи од `isFilledArray`).

## Употреба

### Синтакса

Функција:

- `areOfType(array, type)`

Параметри:

- `array`: Низ који треба проверити.
- `type`: Тип у односу на који треба проверити сваки елемент у низу.

### Локални увоз функције

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values је сада number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // false

```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.areOfType(array, type)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>Датотека је генерисана 30 January 2026 at 17:11:26 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>