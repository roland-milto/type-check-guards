# isNumeric

## Опис

`isNumeric` одређује да ли се дати `value` сматра нумеричким тако што проверава његов разрешени тип у односу на
`NUMERIC_TYPES`.

### Случај употребе

Користите `isNumeric` за валидацију улаза (нпр. API payload-ова, вредности из форми, конфигурације) пре извршавања
нумеричких операција, и да доследно прихватате нумерички сличне типове (као што је `BigInt`) у складу са
`NUMERIC_TYPES`.

> **Напомена за TypeScript кориснике:**
>
> `isNumeric` је предикат који враћа буловску вредност; третирајте га као проверу у извршавању да ли вредност припада
> скупу нумеричких типова дефинисаном у библиотеци.

### Предности

- Користи `getTypeOf` заједно са `NUMERIC_TYPES` да централизује логику откривања нумеричких типова и одржи провере
  доследним кроз целу базу кода.
- Враћа једноставан буловски резултат (`true`/`false`) за лако гранање и употребу у стилу гард-провера.
- Подржава више нумеричких репрезентација (нпр. `number`, `BigInt`) како је дефинисано у `NUMERIC_TYPES`.

## Употреба

### Синтакса

Функција:

- `isNumeric(value)`

Параметри:

- `value`: Вредност за коју се проверава да ли је нумеричког типа.

### Локални увоз функције

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v se smatra numeričkim prema pravilima tipova biblioteke
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.isNumeric(value)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>Датотека је генерисана 6 February 2026 at 15:54:35 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>