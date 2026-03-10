# isFinite

## Опис

Одређује да ли је дати `value` коначан `number`.

### Случај употребе

Користите `isFinite` да валидирате непознат улаз (нпр. из JSON-а, форми или API-ја) пре извођења нумеричких прорачуна,
осигуравајући да је вредност стварни, коначан број.

> **Напомена за TypeScript кориснике:**
>
> `isFinite` враћа `true` само за коначне бројеве; враћа `false` за `NaN`, `Infinity` и било коју вредност која није
> број.

### Предности

- Користи уграђени `Number.isFinite` за поуздану проверу коначности.
- Враћа `true` само за коначне бројеве; враћа `false` за `NaN`, `Infinity` и улазе који нису број.
- Једноставан предикат без споредних ефеката, погодан за валидацију и заштитну логику.

## Употреба

### Синтакса

Функција:

- `isFinite(value)`

Параметри:

- `value`: Вредност коју треба проверити на коначност.

### Локални увоз функције

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers je: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value je ovde konačan broj
  const doubled = value * 2;
  console.log(doubled);
}
```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.isFinite(value)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>Датотека је генерисана 30 January 2026 at 16:31:42 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>