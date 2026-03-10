# isPromise

## Описание

Определя дали дадена стойност е `Promise`.

### Случай на употреба

Използвайте `isPromise`, за да валидирате неизвестни входни данни, преди да ги третирате като `Promise`, например при
обработка на стойности, върнати от плъгини, динамични импорти или слабо типизирани API.

> **Бележка за потребителите на TypeScript:**
>
> `isPromise` проверява чрез `instanceof Promise`, така че връща `true` само за реални инстанции на `Promise` (не за
> общи thenables).

### Предимства

- Предоставя проста проверка по време на изпълнение дали дадена стойност е `Promise`.
- Помага да се защитят пътищата в кода, които изискват реална инстанция на `Promise`, като предвидимо връща `true` или
  `false`.
- Избягва фалшиви положителни резултати от „thenable“ обекти (напр. `{ then() {} }`), като изисква действителна
  инстанция на `Promise`.

## Използване

### Синтаксис

Функция:

- `isPromise(value)`

Параметри:

- `value`: Стойността, която трябва да бъде проверена.

### Локален импорт на функция

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // вярно
console.log(isPromise(b)); // невярно
console.log(isPromise(123)); // невярно
console.log(isPromise(null)); // невярно

```

### Глобален импорт на обект

За импорт на функциите като глобални методи на обект използвайте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следният метод ще бъде наличен глобално:

- `Type.isPromise(value)`

## Анализ на функции

Тук е документиран табличен анализ на резултата при подаване на различни параметри към
функциите: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>Файлът беше генериран на 30 January 2026 at 23:52:17 (UTC) с използването на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>