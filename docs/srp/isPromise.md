# isPromise

## Опис

Одређује да ли је дата вредност `Promise`.

### Случај употребе

Користите `isPromise` да валидирате непознате улазе пре него што их третирате као `Promise`, на пример при обради
вредности враћених из додатака (plugins), динамичких увоза (dynamic imports) или лабаво типизираних API-ја.

> **Напомена за TypeScript кориснике:**
>
> `isPromise` проверава помоћу `instanceof Promise`, па враћа `true` само за стварне инстанце `Promise` (не за генеричке
> thenable објекте).

### Предности

- Пружа једноставну проверу у време извршавања да ли је вредност `Promise`.
- Помаже да се заштите гране кода које захтевају стварну инстанцу `Promise`, предвидљиво враћајући `true` или `false`.
- Избегава лажне позитивне резултате од „thenable“ објеката (нпр. `{ then() {} }`) тако што захтева стварну инстанцу
  `Promise`.

## Употреба

### Синтакса

Функција:

- `isPromise(value)`

Параметри:

- `value`: Вредност коју треба проверити.

### Локални увоз функције

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // tačno
console.log(isPromise(b)); // netačno
console.log(isPromise(123)); // netačno
console.log(isPromise(null)); // netačno

```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.isPromise(value)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>Датотека је генерисана 30 January 2026 at 23:54:20 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>