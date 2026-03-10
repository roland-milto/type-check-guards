# isWeakMap

## Описание

Определя дали дадената `value` е инстанция на `WeakMap`.

### Случай на употреба

Използвайте `isWeakMap`, когато приемате стойност от тип `unknown` (напр. от публичен API, плъгин система или динамична
конфигурация) и трябва да потвърдите, че е `WeakMap`, преди да използвате поведение, специфично за `WeakMap`.

> **Бележка за потребителите на TypeScript:**
>
> `isWeakMap` извършва проверка `instanceof WeakMap`; това е runtime guard, който връща `true` само за реални инстанции
> на `WeakMap`.

### Предимства

- Проста проверка по време на изпълнение дали дадена стойност е `WeakMap`.
- Помага да се предотврати неправилна употреба на API, които изискват `WeakMap`, като връща `true`/`false` вместо да
  хвърля грешка.
- Работи с входове от тип `unknown`, което го прави удобно на границите на модулите (напр. парсване, външни данни или
  нетипизиран код).

## Използване

### Синтаксис

Функция:

- `isWeakMap(value)`

Параметри:

- `value`: Стойността за проверка.

### Локален импорт на функция

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a е WeakMap по време на изпълнение
}

console.log(isWeakMap(a)); // вярно
console.log(isWeakMap(b)); // невярно
```

### Глобален импорт на обект

За импорт на функциите като глобални методи на обект използвайте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следният метод ще бъде наличен глобално:

- `Type.isWeakMap(value)`

## Анализ на функции

Тук е документиран табличен анализ на резултата при подаване на различни параметри към
функциите: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>Файлът беше генериран на 30 January 2026 at 13:24:22 (UTC) с използването на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>