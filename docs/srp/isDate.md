# isDate

## Опис

`isDate` утврђује да ли је прослеђена вредност `Date`, враћајући `true` за инстанце `Date`, а `false` у супротном.

### Случај употребе

Валидирајте и сузите непознате вредности (нпр. податке захтева, конфигурационе вредности или парсирани JSON) пре
извршавања `Date` операција као што су форматирање, поређења или позивање `toISOString()`.

> **Напомена за TypeScript кориснике:**
>
> Користите `isDate` да сузите `unknown` на `Date` у време извршавања; враћа `true` само за стварне инстанце `Date` (не
> за стрингове датума).

### Предности

- Пружа једноставну заштиту у време извршавања (runtime guard) за проверу да ли је вредност `Date`.
- Помаже у спречавању грешака типова тако што обезбеђује да само инстанце `Date` прођу валидацију.
- Корисно је за валидацију непознатих улаза (нпр. API payload-ова) пре коришћења метода специфичних за датуме.

## Употреба

### Синтакса

Функција:

- `isDate(value)`

Параметри:

- `value`: Вредност коју треба проверити да ли је типа `Date`.

### Локални увоз функције

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // input je ovde Date
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.isDate(value)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [isDate](../_analysis/isDate.md)

<br>

---

<small>Датотека је генерисана 31 January 2026 at 15:47:48 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>