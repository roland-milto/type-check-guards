# isBuffer

## Опис

Проверува дали вредност е Node.js `Buffer` и враќа `true` или `false`.

### Случај на употреба

Валидирајте влезови при извршување (на пр., API payloads, податоци од датотеки или бафери за пораки) за да се осигурате
дека вредноста е `Buffer` пред да ја обработите, и сигурно добијте `false` кога се извршува надвор од Node.js каде што
`Buffer` можеби не постои.

> **Белешка за корисници на TypeScript:**
>
> Користете `isBuffer` за да ги стесните `unknown` вредностите на `Buffer` пред да повикате методи специфични за Buffer.

### Предности

- Безбедно открива Node.js `Buffer` инстанци со користење на `Buffer.isBuffer`.
- Враќа `false` во средини каде што `Buffer` не е достапен, избегнувајќи грешки при извршување.
- Работи со `unknown` влез, што го прави погоден за валидација при извршување и стеснување на типови.

## Употреба

### Синтакса

Функција:

- `isBuffer(value)`

Параметри:

- `value`: Вредноста што треба да се тестира.

### Локален импорт на функција

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // точно
console.log(isBuffer(b)); // неточно

if (isBuffer(a)) {
  // a е Buffer тука
  console.log(a.toString("utf8"));
}
```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.isBuffer(value)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>Датотеката беше генерирана на 31 January 2026 at 16:32:25 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>