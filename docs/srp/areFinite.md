# areFinite

## Опис

`areFinite` проверава да ли је вредност непразан низ чији су елементи сви коначни бројеви, враћајући `true` ако јесте и
`false` у супротном.

### Случај употребе

Валидирајте низове нумеричких улаза (нпр. серије за графикон, листе координата, узорке мерења) пре извођења прорачуна,
обезбеђујући да је резултат `true` само када су све вредности коначни бројеви.

> **Напомена за TypeScript кориснике:**
>
> Користите `areFinite` када треба да обезбедите да је низ непразан и да садржи само коначне бројеве; враћа `false` за
> празне низове и за низове који садрже `NaN` или бесконачности.

### Предности

- Враћа `true` само када је улаз непразан низ и сваки елемент је коначан број.
- Одбацује `Infinity`, `-Infinity` и `NaN` ослањајући се на провере `isFinite` за сваки елемент.
- Пружа једноставан булов резултат (`true`/`false`) погодан за гардове и токове валидације.

## Употреба

### Синтакса

Функција:

- `areFinite(array)`

Параметри:

- `array`: Низ који треба проверити да ли су сви његови елементи коначни.

### Локални увоз функције

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // tačno
console.log(areFinite(b)); // netačno
console.log(areFinite(c)); // netačno

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.areFinite(array)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>Датотека је генерисана 30 January 2026 at 16:37:18 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>