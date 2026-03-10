# isFloat

## Опис

`isFloat` утврдува дали дадената `value` е конечен број со подвижна запирка (еден `number` што не е цел број).

### Случај на употреба

Валидирајте нумерички влез обезбеден од корисник каде што се потребни дробни вредности (на пр., цени, мерења, стапки) и
отфрлете цели броеви, `NaN` и бесконечности.

> **Белешка за корисници на TypeScript:**
>
> Користете `isFloat` кога треба да прифатите само конечни, нецелобројни нумерички влезови; ги отфрла целите броеви и
> не-конечните броеви.

### Предности

- Враќа `true` само за конечни, нецелобројни броеви (ги исклучува целите броеви, `NaN`, `Infinity` и `-Infinity`).
- Работи со кој било влезен тип (`unknown`) и безбедно го стеснува типот со проверка `typeof value === "number"`.
- Користи вградени нумерички заштити (`Number.isInteger`, `Number.isFinite`) за предвидливо однесување.

## Употреба

### Синтакса

Функција:

- `isFloat(value)`

Параметри:

- `value`: Вредноста што треба да се провери дали е број со подвижна запирка.

### Локален импорт на функција

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // вредноста е број при извршување; таа е конечна и не е цел број
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}

```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.isFloat(value)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>Датотеката беше генерирана на 30 January 2026 at 16:08:46 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>