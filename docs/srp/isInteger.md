# isInteger

## Опис

Одређује да ли је дати `value` безбедан цео број.

### Случај употребе

Валидирајте непоуздан улаз (нпр. параметре упита, JSON payload-ове, променљиве окружења) пре него што га користите као
цео број за индексе низова, пагинацију, бројаче или ID-еве у бази података.

> **Напомена за TypeScript кориснике:**
>
> Користите `isInteger` да валидирате непознат улаз пре него што га третирате као нумерички цео број; враћа `true` само
> за вредности где је `typeof value === "number"` и `Number.isSafeInteger(value)`.

### Предности

- Проверава и тип и нумеричку безбедност: враћа `true` само када је улаз број и безбедан цео број.
- Спречава уобичајене замке са нумеричком коерцијом: ниске као "5" исправно враћају `false`.
- Одбацује не-целе и небезбедне целе бројеве, што га чини погодним за ID-еве, бројаче и индексирање низова.

## Употреба

### Синтакса

Функција:

- `isInteger(value)`

Параметри:

- `value`: Вредност коју треба проверити да ли је цео број.

### Локални увоз функције

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // tačno
const b = isInteger(-100);   // tačno
const c = isInteger("5");    // netačno
const d = isInteger(5.5);    // netačno
const e = isInteger(null);   // netačno

```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.isInteger(value)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>Датотека је генерисана 31 January 2026 at 00:51:28 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>