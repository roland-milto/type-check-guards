# isFloat

## Описание

`isFloat` определя дали дадена `value` е крайно число с плаваща запетая (тип `number`, което не е цяло число).

### Случай на употреба

Валидирайте предоставен от потребителя числов вход, когато са необходими дробни стойности (напр. цени, измервания,
ставки), и отхвърляйте цели числа, `NaN` и безкрайности.

> **Бележка за потребителите на TypeScript:**
>
> Използвайте `isFloat`, когато трябва да приемате само крайни, нецелочислени числови входове; тя отхвърля цели числа и
> некрайни числа.

### Предимства

- Връща `true` само за крайни, нецелочислени числа (изключва цели числа, `NaN`, `Infinity` и `-Infinity`).
- Работи с всеки входен тип (`unknown`) и безопасно стеснява типа чрез проверка `typeof value === "number"`.
- Използва вградени числови проверки (`Number.isInteger`, `Number.isFinite`) за предвидимо поведение.

## Използване

### Синтаксис

Функция:

- `isFloat(value)`

Параметри:

- `value`: Стойността, която трябва да бъде проверена дали е число с плаваща запетая.

### Локален импорт на функция

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // стойността е число по време на изпълнение; тя е крайна и не е цяло число
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}

```

### Глобален импорт на обект

За импорт на функциите като глобални методи на обект използвайте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следният метод ще бъде наличен глобално:

- `Type.isFloat(value)`

## Анализ на функции

Тук е документиран табличен анализ на резултата при подаване на различни параметри към
функциите: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>Файлът беше генериран на 30 January 2026 at 16:06:54 (UTC) с използването на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>