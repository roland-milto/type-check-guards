# areTrue

## Опис

Проверава да ли непразан низ садржи само буловске вредности `true`.

### Случај употребе

Користите `areTrue` да потврдите да су сви предуслови или feature flags омогућени (све вредности су `true`) пре
наставка, док се празни или неисправни улази третирају као незадовољени (`false`).

> **Напомена за TypeScript кориснике:**
>
> `areTrue` враћа `false` за празан низ и за низове који садрже било коју вредност која није строго `true`.

### Предности

- Враћа `true` само када је сваки елемент строго `true` и низ није празан.
- Брзо прекида: враћа `false` чим се пронађе вредност која није `true`.
- Одбија неважеће улазе (нису низови или су празни низови) тако што враћа `false`.

## Употреба

### Синтакса

Функција:

- `areTrue(array)`

Параметри:

- `array`: Низ који треба проверити да ли садржи све вредности `true`.

### Локални увоз функције

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.areTrue(array)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>Датотека је генерисана 30 January 2026 at 13:52:47 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>