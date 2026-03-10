# areSets

## Опис

Проверава да ли дати непразан низ садржи само инстанце `Set`, враћајући `true` ако је тако и `false` у супротном.

### Случај употребе

Потврдите да је вредност (нпр. из корисничког уноса, парсирања JSON-а или спољних API-ја) непразан низ објеката `Set`
пре обраде сваког скупа.

> **Напомена за TypeScript кориснике:**
>
> Користите `areSets` да валидирате непознат улаз пре итерације и позивања `Set` API-ја (нпр. `.size`, `.has`, `.add`)
> над сваким елементом.

### Предности

- Враћа `true` само када је улаз непразан низ и сваки елемент је инстанца `Set`.
- Спречава лажне позитивне резултате за празне низове тако што враћа `false` када низ нема елемената.
- Корисно као заштита у време извршавања пре извођења операција специфичних за `Set` над сваким елементом.

## Употреба

### Синтакса

Функција:

- `areSets(array)`

Параметри:

- `array`: Низ који треба проверити да ли садржи инстанце `Set`.

### Локални увоз функције

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a je niz instanci Set u toku izvršavanja
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // netačno
console.log(areSets(c)); // netačno
```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.areSets(array)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [areSets](../_analysis/areSets.md)

<br>

---

<small>Датотека је генерисана 30 January 2026 at 23:15:22 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>