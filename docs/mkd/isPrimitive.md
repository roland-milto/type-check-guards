# isPrimitive

## Опис

`isPrimitive` одредува дали дадена вредност е примитив (`null`, `undefined`, `boolean`, `number`, `string`, `bigint`,
`symbol`).

### Случај на употреба

Валидирајте влезови во runtime (на пр., полиња од API payload, конфигурациски вредности или податоци внесени од
корисник) за да се осигурате дека вредноста е примитив пред серијализација, логирање или примена на операции што важат
само за примитиви.

> **Белешка за корисници на TypeScript:**
>
> Користете `isPrimitive` за да ги заштитите `unknown` влезовите пред да ги третирате како објекти или функции; враќа
`true` за примитиви и `false` за објекти и функции.

### Предности

- Брза проверка без алокации за тоа дали вредност е JavaScript примитив.
- Правилно го третира `null` како примитив (иако `typeof null` е `"object"`).
- Помага да се стеснат `unknown` вредности пред извршување операции што важат само за објекти.

## Употреба

### Синтакса

Функција:

- `isPrimitive(value)`

Параметри:

- `value`: Вредноста што треба да се провери дали е од примитивен тип.

### Локален импорт на функција

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.isPrimitive(value)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>Датотеката беше генерирана на 30 January 2026 at 23:56:55 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>