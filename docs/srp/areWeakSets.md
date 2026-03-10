# areWeakSets

## Опис

Проверава да ли је улаз непразан низ у којем је сваки елемент `WeakSet`, и враћа `true` само у том случају.

### Случај употребе

Валидирајте улаз у време извршавања (нпр. из API-ја, конфигурације или података које је обезбедио корисник) како бисте
били сигурни да имате непразну листу инстанци `WeakSet` пре него што наставите са логиком која зависи од понашања
`WeakSet`.

> **Напомена за TypeScript кориснике:**
>
> Користите `areWeakSets` да валидирате непознат улаз пре него што га третирате као `WeakSet[]`. Враћа `false` за празне
> низове и за вредности које нису низови.

### Предности

- Обезбеђује да је сваки елемент у улазном низу `WeakSet`.
- Враћа `false` за празне низове, спречавајући случајне резултате типа „све је исправно“ када недостају подаци.
- Безбедно отказује тако што враћа `false` када улаз није попуњен низ (укључујући `null`).
- Корисно као заштитна провера пре извршавања операција које захтевају инстанце `WeakSet`.

## Употреба

### Синтакса

Функција:

- `areWeakSets(array)`

Параметри:

- `array`: Низ који треба проверити да ли садржи `WeakSet` објекте.

### Локални увоз функције

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a je neprazan niz instanci WeakSet
}

console.log(areWeakSets(a)); // tačno
console.log(areWeakSets(b)); // netačno
console.log(areWeakSets(c)); // netačno
console.log(areWeakSets(null as unknown)); // netačno
```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.areWeakSets(array)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>Датотека је генерисана 30 January 2026 at 14:10:59 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>