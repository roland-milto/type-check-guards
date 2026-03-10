# isPromise

## Опис

Утврдува дали дадена вредност е `Promise`.

### Случај на употреба

Користете `isPromise` за да ги валидирате непознатите влезови пред да ги третирате како `Promise`, на пример при
обработка на вредности вратени од приклучоци, динамички импорти или лабаво типизирани API-и.

> **Белешка за корисници на TypeScript:**
>
> `isPromise` проверува преку `instanceof Promise`, па враќа `true` само за вистински инстанци на `Promise` (не за општи
> thenables).

### Предности

- Обезбедува едноставна проверка во време на извршување дали некоја вредност е `Promise`.
- Помага да се заштитат гранките на кодот што бараат вистинска инстанца на `Promise`, враќајќи `true` или `false`
  предвидливо.
- Избегнува лажни позитиви од „thenable“ објекти (на пр., `{ then() {} }`) со тоа што бара вистинска инстанца на
  `Promise`.

## Употреба

### Синтакса

Функција:

- `isPromise(value)`

Параметри:

- `value`: Вредноста што треба да се провери.

### Локален импорт на функција

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // точно
console.log(isPromise(b)); // неточно
console.log(isPromise(123)); // неточно
console.log(isPromise(null)); // неточно

```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.isPromise(value)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>Датотеката беше генерирана на 30 January 2026 at 23:53:31 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>