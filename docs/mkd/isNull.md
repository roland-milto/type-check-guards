# isNull

## Опис

Одредува дали дадената `value` е `null`.

### Случај на употреба

Користете `isNull` за валидација на влезови или полиња во API payload каде што `null` е значајна сентинел-вредност и
мора да се обработи поинаку од `undefined` или други вредности.

> **Белешка за корисници на TypeScript:**
>
> Користете `isNull` кога треба да разликувате `null` од `undefined` и други лажни (falsy) вредности; враќа `true` само
> за `null`.

### Предности

- Обезбедува прецизна проверка за `null` без да го меша со `undefined`.
- Работи сигурно за кој било тип на влез бидејќи прифаќа `unknown`.
- Едноставно, брзо и без несакани ефекти; враќа само `true` или `false`.

## Употреба

### Синтакса

Функција:

- `isNull(value)`

Параметри:

- `value`: Вредноста што треба да се провери за `null`.

### Локален импорт на функција

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // точно
console.log(isNull(b)); // неточно

if (isNull(a)) {
  // a е null тука
}
```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.isNull(value)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [isNull](../_analysis/isNull.md)

<br>

---

<small>Датотеката беше генерирана на 31 January 2026 at 15:39:59 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>