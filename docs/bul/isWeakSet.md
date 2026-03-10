# isWeakSet

## Описание

Определя дали дадената `value` е `WeakSet` от обекти.

### Случай на употреба

Използвайте `isWeakSet`, когато приемате нетипизиран вход (напр. от външни API, динамична конфигурация или стойности от
тип `unknown`) и трябва да проверите, че е `WeakSet`, преди да използвате операции, специфични за `WeakSet`.

> **Бележка за потребителите на TypeScript:**
>
> Използвайте `isWeakSet`, за да стесните стойност от тип `unknown` до `WeakSet<object>` по време на изпълнение; имайте
> предвид, че `WeakSet` може да съдържа само референции към обекти.

### Предимства

- Предоставя проста проверка по време на изпълнение дали дадена стойност е `WeakSet`.
- Помага да се предотвратят грешки в типовете, като гарантира, че само инстанции на `WeakSet` се третират като такива.
- Работи с всякакъв вход от тип `unknown` и връща ясен булев резултат (`true`/`false`).

## Използване

### Синтаксис

Функция:

- `isWeakSet(value)`

Параметри:

- `value`: Стойността, която трябва да бъде проверена.

### Локален импорт на функция

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // вярно
console.log(isWeakSet(b)); // невярно

if (isWeakSet(a)) {
  // a е WeakSet по време на изпълнение
}
```

### Глобален импорт на обект

За импорт на функциите като глобални методи на обект използвайте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следният метод ще бъде наличен глобално:

- `Type.isWeakSet(value)`

## Анализ на функции

Тук е документиран табличен анализ на резултата при подаване на различни параметри към
функциите: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>Файлът беше генериран на 30 January 2026 at 14:14:03 (UTC) с използването на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>