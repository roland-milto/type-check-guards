# isWeakMap

## Опис

Утврдува дали дадената `value` е инстанца на `WeakMap`.

### Случај на употреба

Користете `isWeakMap` кога прифаќате вредност од тип `unknown` (на пр., од јавен API, систем за приклучоци или динамичка
конфигурација) и треба да потврдите дека е `WeakMap` пред да користите однесување специфично за `WeakMap`.

> **Белешка за корисници на TypeScript:**
>
> `isWeakMap` извршува проверка `instanceof WeakMap`; тоа е runtime guard што враќа `true` само за вистински инстанци на
`WeakMap`.

### Предности

- Едноставна проверка во runtime дали некоја вредност е `WeakMap`.
- Помага да се спречи погрешна употреба на API-и што бараат `WeakMap` така што враќа `true`/`false` наместо да фрла
  исклучок.
- Работи со влезови од тип `unknown`, што го прави практично на границите на модулите (на пр., парсирање, надворешни
  податоци или нетипизиран код).

## Употреба

### Синтакса

Функција:

- `isWeakMap(value)`

Параметри:

- `value`: Вредноста што треба да се провери.

### Локален импорт на функција

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a е WeakMap при извршување
}

console.log(isWeakMap(a)); // точно
console.log(isWeakMap(b)); // неточно
```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.isWeakMap(value)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>Датотеката беше генерирана на 30 January 2026 at 13:25:57 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>