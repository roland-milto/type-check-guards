# isPlainObject

## Опис

Проверава да ли је дати `value` обичан објекат и враћа `true` ако јесте, у супротном `false`.

### Случај употребе

Потврдите да је `unknown` улаз (нпр. парсирани JSON, спољни подаци или аргументи функције) обичан објекат пре читања
кључева или мапирања у типизирани конфигурациони објекат.

> **Напомена за TypeScript кориснике:**
>
> `isPlainObject` је користан за сужење `unknown` пре него што се третира као објекат налик запису; враћа `true` само за
> вредности чија је унутрашња ознака `[object Object]`.

### Предности

- Пружа једноставну, поуздану проверу да ли је вредност обичан објекат (тј. `Object` / `{}`), враћајући `true` или
  `false`.
- Помаже да се обични објекти разликују од низова, функција, `null` и других типова који нису обични објекти.
- Корисно као type guard у TypeScript-у за сужење `unknown` вредности пре приступања својствима објекта.

## Употреба

### Синтакса

Функција:

- `isPlainObject(value)`

Параметри:

- `value`: Вредност која се тестира да ли је обичан објекат.

### Локални увоз функције

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // input je ovde obican objekat
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // tacno
console.log(isPlainObject([])); // netacno
console.log(isPlainObject(null)); // netacno

```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.isPlainObject(value)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>Датотека је генерисана 6 February 2026 at 12:19:49 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>