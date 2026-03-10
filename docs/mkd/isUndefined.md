# isUndefined

## Опис

Проверува дали дадена вредност е `undefined`.

### Случај на употреба

Користете `isUndefined` за да ги заштитите опционалните влезови, да детектирате недостасувачки својства или да
разликувате помеѓу „не е обезбедено“ (`undefined`) и „експлицитно празно“ (`null`).

> **Белешка за корисници на TypeScript:**
>
> Користете `isUndefined` кога конкретно треба да детектирате `undefined` (не `null`). Безбедно е бидејќи се потпира на
`typeof value === "undefined"`.

### Предности

- Обезбедува јасна, експлицитна проверка за `undefined` со користење на `typeof`, избегнувајќи гранични случаи со
  недекларирани променливи.
- Враќа едноставен булов резултат (`true`/`false`) погоден за гардови, разгранување и логика за валидација.
- Помага да се разликува `undefined` од други „празни“ вредности како `null`, `0`, `""` или `NaN`.

## Употреба

### Синтакса

Функција:

- `isUndefined(value)`

Параметри:

- `value`: Вредноста што треба да се провери.

### Локален импорт на функција

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x е недефинирано тука
} else {
  // x не е недефинирано тука
}

const a = isUndefined(undefined); // точно
const b = isUndefined(null);      // неточно
```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.isUndefined(value)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>Датотеката беше генерирана на 30 January 2026 at 14:03:34 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>