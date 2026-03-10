# isPlainObject

## Опис

Проверува дали дадената `value` е обичен објект и враќа `true` ако е, во спротивно `false`.

### Случај на употреба

Потврди дека `unknown` влез (на пр., парсиран JSON, надворешни податоци или аргументи на функција) е обичен објект пред
читање на клучеви или мапирање во типизиран конфигурациски објект.

> **Белешка за корисници на TypeScript:**
>
> `isPlainObject` е корисна за стеснување на `unknown` пред да се третира како record-сличен објект; враќа `true` само
> за вредности чија внатрешна ознака е `[object Object]`.

### Предности

- Обезбедува едноставна, сигурна проверка дали вредноста е обичен објект (т.е., `Object` / `{}`), враќајќи `true` или
  `false`.
- Помага да се разликуваат обичните објекти од низи, функции, `null` и други типови што не се обични објекти.
- Корисно како type guard во TypeScript за стеснување на `unknown` вредности пред пристапување до својства на објект.

## Употреба

### Синтакса

Функција:

- `isPlainObject(value)`

Параметри:

- `value`: Вредноста што се тестира за статус на обичен објект.

### Локален импорт на функција

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // input е обичен објект тука
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // точно
console.log(isPlainObject([])); // неточно
console.log(isPlainObject(null)); // неточно
```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.isPlainObject(value)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>Датотеката беше генерирана на 6 February 2026 at 12:18:39 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>