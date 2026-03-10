# isUndefined

## Опис

Проверава да ли је дата вредност `undefined`.

### Случај употребе

Користите `isUndefined` да заштитите опционалне улазе, откријете недостајућа својства или разликујете између „није
наведено“ (`undefined`) и „експлицитно празно“ (`null`).

> **Напомена за TypeScript кориснике:**
>
> Користите `isUndefined` када вам је потребно да специфично детектујете `undefined` (а не `null`). Безбедно је јер се
> ослања на `typeof value === "undefined"`.

### Предности

- Пружа јасну, експлицитну проверу за `undefined` коришћењем `typeof`, избегавајући граничне случајеве са недекларисаним
  променљивама.
- Враћа једноставан булов резултат (`true`/`false`) погодан за гардове, гранање и логику валидације.
- Помаже да се `undefined` разликује од других „празних“ вредности као што су `null`, `0`, `""` или `NaN`.

## Употреба

### Синтакса

Функција:

- `isUndefined(value)`

Параметри:

- `value`: Вредност коју треба проверити.

### Локални увоз функције

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x je ovde undefined
} else {
  // x ovde nije undefined
}

const a = isUndefined(undefined); // tačno
const b = isUndefined(null);      // netačno

```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.isUndefined(value)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>Датотека је генерисана 30 January 2026 at 14:04:26 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>