# areFloats

## Опис

`areFloats` проверава да ли је дати низ попуњен и да ли су сви његови елементи float.

### Случај употребе

Користите `areFloats` када примите `unknown[]` (нпр. из JSON-а, параметара упита или спољних API-ја) и треба да
обезбедите да је то попуњен низ у ком је свака ставка float пре покретања нумеричке логике као што су израчунавање
просека, интерполација или статистички прорачуни.

> **Напомена за TypeScript кориснике:**
>
> Користите `areFloats` да заштитите `unknown[]` пре него што га третирате као `number[]` који садржи само float; враћа
`false` за празне низове и за било који елемент који није float.

### Предности

- Враћа `true` само када је улаз непразан низ и сваки елемент је број са покретним зарезом (float).
- Брзо прекида: враћа `false` чим се пронађе елемент који није float.
- Помаже у валидацији непознатог улаза пре извођења прорачуна специфичних за float.

## Употреба

### Синтакса

Функција:

- `areFloats(array)`

Параметри:

- `array`: Низ који се проверава да ли садржи float елементе.

### Локални увоз функције

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // tačno
console.log(areFloats(b)); // netačno
console.log(areFloats(c)); // netačno

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null

```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.areFloats(array)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>Датотека је генерисана 30 January 2026 at 15:59:41 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>