# isArray

## Опис

`isArray` проверава да ли је дата вредност низ и враћа `true` ако јесте, у супротном `false`.

### Случај употребе

Валидирајте непознате податке (нпр. парсирани JSON или одговоре API-ја) да бисте осигурали да је вредност низ пре
итерације, индексирања или приступања `.length`.

> **Напомена за TypeScript кориснике:**
>
> Користите `isArray` када вам је потребна провера низова у време извршавања; враћа булов резултат и безбедно је позвати
> је са `unknown` вредностима.

### Предности

- Користи уграђени `Array.isArray` за поуздано откривање низова кроз различите realm-ове (нпр. iframe-ове).
- Враћа једноставан булов резултат (`true`/`false`) погодан за guard-ове и гранaње логике.
- Ради са било којим типом улаза јер је параметар `unknown`.

## Употреба

### Синтакса

Функција:

- `isArray(value)`

Параметри:

- `value`: Вредност коју треба проверити.

### Локални увоз функције

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input je niz u vreme izvršavanja
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.isArray(value)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [isArray](../_analysis/isArray.md)

<br>

---

<small>Датотека је генерисана 6 February 2026 at 11:32:07 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>