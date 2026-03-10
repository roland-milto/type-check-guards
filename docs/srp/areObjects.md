# areObjects

## Опис

`areObjects` проверава да ли дати попуњен низ садржи само објекте.

### Случај употребе

Користите `areObjects` када добијете непознат низ (нпр. из JSON парсирања или спољних API-ја) и треба да обезбедите да
није празан и да је сваки елемент објекат пре итерације и приступа својствима објекта.

> **Напомена за TypeScript кориснике:**
>
> Користите `areObjects` да валидирате `unknown[]` пре него што ставке третирате као објекте; враћа `false` за празне
> низове.

### Предности

- Враћа `true` само када је улаз попуњен низ и сваки елемент је објекат.
- Прекида рано и враћа `false` чим се пронађе елемент који није објекат.
- Помаже у валидацији непознатог улаза пре извршавања операција специфичних за објекте.

## Употреба

### Синтакса

Функција:

- `areObjects(array)`

Параметри:

- `array`: Низ који треба проверити да ли садржи елементе који су објекти.

### Локални увоз функције

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value je popunjen niz objekata
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.areObjects(array)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>Датотека је генерисана 31 January 2026 at 00:10:26 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>