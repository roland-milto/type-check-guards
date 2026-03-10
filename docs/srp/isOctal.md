# isOctal

## Опис

Одређује да ли је вредност важећи стринг окталног литерала (нпр. `0o755`).

### Случај употребе

Валидирајте кориснички унос или конфигурационе вредности које морају бити изражене као стринг окталног литерала (на
пример, режими дозвола за датотеке као `0o644`) пре парсирања или конвертовања.

> **Напомена за TypeScript кориснике:**
>
> `isOctal` је чувар типа (`value is string`). Након резултата `true`, TypeScript сузава проверену променљиву на
`string`.

### Предности

- Пружа строгу проверу типа: враћа `true` само када је улаз стринг који одговара формату окталног литерала.
- Одбацује празне стрингове и стрингове са водећим/завршним размацима (ASCII контролни знаци/размак), смањујући случајна
  поклапања.
- Подржава опциони знак и не разликује велика/мала слова за префикс `0o`/`0O`.
- Толерантно за улазе који нису стринг тако што враћа `false` уместо да баци изузетак.

## Употреба

### Синтакса

Функција:

- `isOctal(value)`

Параметри:

- `value`: Вредност коју треба проверити.

### Локални увоз функције

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // tačno
console.log(isOctal(b)); // tačno
console.log(isOctal(c)); // netačno
console.log(isOctal(d)); // netačno

if (isOctal(a)) {
  // a je ovde string
  const normalized = a.toLowerCase();
  console.log(normalized);
}
```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.isOctal(value)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>Датотека је генерисана 30 January 2026 at 15:43:25 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>