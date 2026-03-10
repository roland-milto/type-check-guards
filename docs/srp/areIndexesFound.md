# areIndexesFound

## Опис

`areIndexesFound` проверава да ли је вредност непразан низ чији су елементи сви важећи индекси, враћајући `true` ако
јесу, а `false` у супротном.

### Случај употребе

Валидирајте податке које је обезбедио корисник или спољне податке (нпр. парсирани JSON) за које се очекује да су листа
индекса пре него што их употребите за приступ или исецaње низова.

> **Напомена за TypeScript кориснике:**
>
> Користите `areIndexesFound` да валидирате непознат улаз пре него што његове елементе третирате као индексе низа; враћа
`false` за празне низове и за низове који садрже вредности које нису индекси.

### Предности

- Враћа `true` само када је улаз попуњен низ и када је сваки елемент важећи индекс.
- Брзо прекида: враћа `false` чим се наиђе на елемент који није индекс.
- Корисно као заштитна провера пре коришћења вредности као позиција у низу или помераја.

## Употреба

### Синтакса

Функција:

- `areIndexesFound(array)`

Параметри:

- `array`: Низ који треба проверити у погледу усаглашености са индексима.

### Локални увоз функције

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // tačno
console.log(areIndexesFound(b)); // netačno
console.log(areIndexesFound(c)); // netačno

if (areIndexesFound(a)) {
  // Ovde je potvrđeno da je `a` popunjen niz indeksa.
  const firstIndex = a[0];
  console.log(firstIndex);
}

```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.areIndexesFound(array)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>Датотека је генерисана 31 January 2026 at 01:04:19 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>