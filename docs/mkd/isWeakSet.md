# isWeakSet

## Опис

Одредува дали дадената `value` е `WeakSet` од објекти.

### Случај на употреба

Користете `isWeakSet` кога прифаќате нетипизиран влез (на пр., од надворешни API-ја, динамичка конфигурација или
`unknown` вредности) и треба да потврдите дека е `WeakSet` пред да користите операции специфични за `WeakSet`.

> **Белешка за корисници на TypeScript:**
>
> Користете `isWeakSet` за да стесните `unknown` вредност на `WeakSet<object>` во време на извршување; имајте предвид
> дека `WeakSet` може да содржи само референци кон објекти.

### Предности

- Обезбедува едноставна проверка во време на извршување дали некоја вредност е `WeakSet`.
- Помага да се спречат грешки со типови со тоа што осигурува дека само инстанци на `WeakSet` се третираат како такви.
- Работи со било кој `unknown` влез и враќа јасен булов резултат (`true`/`false`).

## Употреба

### Синтакса

Функција:

- `isWeakSet(value)`

Параметри:

- `value`: Вредноста што треба да се провери.

### Локален импорт на функција

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // точно
console.log(isWeakSet(b)); // неточно

if (isWeakSet(a)) {
  // a е WeakSet во време на извршување
}
```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.isWeakSet(value)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>Датотеката беше генерирана на 30 January 2026 at 14:18:12 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>