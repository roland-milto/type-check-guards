# areWeakMaps

## Опис

`areWeakMaps` проверава да ли је вредност непразан низ у ком је сваки елемент `WeakMap`, враћајући `true` само у том
случају, а `false` у супротном.

### Случај употребе

Валидирајте податке у извршавању (нпр. парсирани JSON, улазе додатака или лабаво типизовану конфигурацију) како бисте
осигурали да је у питању непразан низ инстанци `WeakMap` пре итерације и позивања метода `WeakMap`; враћа `false` када
било који елемент није `WeakMap` или када је низ празан.

> **Напомена за TypeScript кориснике:**
>
> Користите `areWeakMaps` да валидирате непознат улаз пре него што га третирате као непразан `WeakMap[]`; враћа `false`
> за празне низове.

### Предности

- Обезбеђује да је сваки елемент у достављеном низу инстанца `WeakMap`.
- Враћа `false` за празне низове, спречавајући случајно прихватање „без података“ као важећег улаза.
- Корисно као заштитна провера пре извршавања операција специфичних за `WeakMap` над свим ставкама.

## Употреба

### Синтакса

Функција:

- `areWeakMaps(array)`

Параметри:

- `array`: Низ који треба проверити на инстанце `WeakMap`.

### Локални увоз функције

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // list je neprazan niz instanci WeakMap
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // nije neprazan WeakMap[]
}

```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.areWeakMaps(array)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>Датотека је генерисана 30 January 2026 at 13:39:37 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>