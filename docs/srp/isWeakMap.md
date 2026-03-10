# isWeakMap

## Опис

Одређује да ли је дати `value` инстанца `WeakMap`.

### Случај употребе

Користите `isWeakMap` када прихватате вредност типа `unknown` (нпр. из јавног API-ја, система додатака или динамичке
конфигурације) и треба да проверите да је то `WeakMap` пре него што користите понашање специфично за `WeakMap`.

> **Напомена за TypeScript кориснике:**
>
> `isWeakMap` врши проверу `instanceof WeakMap`; то је заштита у извршавању која враћа `true` само за стварне инстанце
`WeakMap`.

### Предности

- Једноставна провера у извршавању да ли је вредност `WeakMap`.
- Помаже да се спречи погрешна употреба API-ја који захтевају `WeakMap` тако што враћа `true`/`false` уместо да баца
  изузетак.
- Ради са улазима типа `unknown`, што га чини погодним на границама модула (нпр. парсирање, спољни подаци или
  нетипизован код).

## Употреба

### Синтакса

Функција:

- `isWeakMap(value)`

Параметри:

- `value`: Вредност коју треба проверити.

### Локални увоз функције

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a je WeakMap u toku izvršavanja
}

console.log(isWeakMap(a)); // tačno
console.log(isWeakMap(b)); // netačno
```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.isWeakMap(value)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>Датотека је генерисана 30 January 2026 at 13:26:59 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>