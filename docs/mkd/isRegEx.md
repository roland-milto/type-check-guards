# isRegEx

## Опис

Утврдува дали дадена вредност е инстанца на `RegExp`.

### Случај на употреба

Валидирајте вредности обезбедени од корисник или динамички вредности (на пр., конфигурација, API payloads, влезови од
приклучоци) пред да ги третирате како регуларен израз.

> **Белешка за корисници на TypeScript:**
>
> Користете `isRegEx` за да ги стесните `unknown` (или union) вредностите пред да користите својства или методи
> специфични за RegExp; враќа `true` само за вредности што се инстанци на `RegExp`.

### Предности

- Обезбедува едноставен runtime type guard за проверка дали вредноста е `RegExp`.
- Помага да се спречат грешки кога кодот очекува регуларен израз (на пр., пред повикување `test`, `exec` или читање на
  `source`).
- Работи и со regex литерали и со инстанци креирани преку `new RegExp(...)`.
- Враќа јасен boolean резултат (`true`/`false`) без да фрла грешка за влезови што не се regex.

## Употреба

### Синтакса

Функција:

- `isRegEx(value)`

Параметри:

- `value`: Вредноста што треба да се провери.

### Локален импорт на функција

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // input е RegExp тука
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.isRegEx(value)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>Датотеката беше генерирана на 30 January 2026 at 23:30:12 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>