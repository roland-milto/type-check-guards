# areFalse

## Опис

`areFalse` проверава да ли су сви елементи у датом низу строго буловска вредност `false`.

### Случај употребе

Потврдите да су листа feature flag-ова, провера или резултата guard-ова сви `false` пре наставка (нпр. потврдите да не
постоје блокирајући услови).

> **Напомена за TypeScript кориснике:**
>
> Користите `areFalse` када вам је потребна строга валидација да низ није празан и да садржи само буловску вредност
`false`.

### Предности

- Обезбеђује да је сваки елемент строго `false` (без truthy/falsey коерзије).
- Враћа `false` за не-низове или празне низове тако што захтева попуњен низ преко `isFilledArray`.
- Рано прекида на првом елементу који није `false` ради ефикасности.

## Употреба

### Синтакса

Функција:

- `areFalse(array)`

Параметри:

- `array`: Низ који треба проверити, који садржи елементе било ког типа.

### Локални увоз функције

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // tačno
const b = areFalse([false, true, false]);  // netačno
const c = areFalse([false, "false", false]); // netačno
const d = areFalse([]); // netačno

```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.areFalse(array)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>Датотека је генерисана 31 January 2026 at 16:18:39 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>