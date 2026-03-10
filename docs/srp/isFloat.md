# isFloat

## Опис

`isFloat` одређује да ли је дати `value` коначан број са покретним зарезом (тј. `number` који није цео број).

### Случај употребе

Валидација нумеричког уноса који је обезбедио корисник када су потребне разломљене вредности (нпр. цене, мерења, стопе)
и одбацивање целих бројева, `NaN` и бесконачности.

> **Напомена за TypeScript кориснике:**
>
> Користите `isFloat` када треба да прихватите само коначне, нецелобројне нумеричке улазе; одбацује целе бројеве и
> неконачне бројеве.

### Предности

- Враћа `true` само за коначне, нецелобројне бројеве (искључује целе бројеве, `NaN`, `Infinity` и `-Infinity`).
- Ради са било којим типом улаза (`unknown`) и безбедно сузава тип провером `typeof value === "number"`.
- Користи уграђене нумеричке провере (`Number.isInteger`, `Number.isFinite`) за предвидљиво понашање.

## Употреба

### Синтакса

Функција:

- `isFloat(value)`

Параметри:

- `value`: Вредност коју треба проверити да ли је број са покретним зарезом.

### Локални увоз функције

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // vrednost je broj u toku izvršavanja; konačna je i nije ceo broj
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}

```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.isFloat(value)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>Датотека је генерисана 30 January 2026 at 16:09:54 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>