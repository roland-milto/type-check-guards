# isString

## Опис

`isString` одређује да ли је дата вредност стринг.

### Случај употребе

Валидирајте кориснички унос, поља API payload-а или конфигурационе вредности у runtime-у како бисте осигурали да је
вредност стринг пре примене стринг операција (нпр. скраћивање размака, раздвајање, конверзија величине слова).

> **Напомена за TypeScript кориснике:**
>
> Користите `isString` да валидирате `unknown` или лабаво типизиране вредности пре позивања стринг метода; враћа `true`
> само када је `typeof value === "string"`.

### Предности

- Једноставна и брза провера помоћу `typeof`.
- Враћа предвидљив булов резултат: `true` за стрингове, иначе `false`.
- Ради и за празне и за непразне стрингове.
- Корисно као лагана runtime заштита пре извршавања операција специфичних за стрингове.

## Употреба

### Синтакса

Функција:

- `isString(value)`

Параметри:

- `value`: Вредност која се тестира да ли је стринг типа.

### Локални увоз функције

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // input je ovde string
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.isString(value)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [isString](../_analysis/isString.md)

<br>

---

<small>Датотека је генерисана 30 January 2026 at 13:15:39 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>