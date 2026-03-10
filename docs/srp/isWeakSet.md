# isWeakSet

## Опис

Одређује да ли је дати `value` `WeakSet` објеката.

### Случај употребе

Користите `isWeakSet` када прихватате нетипизован улаз (нпр. из спољних API-ја, динамичке конфигурације или `unknown`
вредности) и треба да проверите да је то `WeakSet` пре коришћења операција специфичних за `WeakSet`.

> **Напомена за TypeScript кориснике:**
>
> Користите `isWeakSet` да сузите вредност типа `unknown` на `WeakSet<object>` у извршавању; имајте на уму да `WeakSet`
> може да садржи само референце на објекте.

### Предности

- Пружа једноставну проверу у извршавању да ли је вредност `WeakSet`.
- Помаже у спречавању грешака типова тако што обезбеђује да се само инстанце `WeakSet` третирају као такве.
- Ради са било којим улазом типа `unknown` и враћа јасан булов резултат (`true`/`false`).

## Употреба

### Синтакса

Функција:

- `isWeakSet(value)`

Параметри:

- `value`: Вредност која се проверава.

### Локални увоз функције

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // tačno
console.log(isWeakSet(b)); // netačno

if (isWeakSet(a)) {
  // a je WeakSet u vreme izvršavanja
}
```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.isWeakSet(value)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>Датотека је генерисана 30 January 2026 at 14:19:13 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>