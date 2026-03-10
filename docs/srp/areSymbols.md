# areSymbols

## Опис

Проверава да ли је улаз попуњен низ чији су елементи сви симболи, враћајући `true` или `false`.

### Случај употребе

Валидирајте да је поље конфигурације (нпр. листа јединствених кључева представљених као симболи) непразан низ који
садржи само симболе пре него што га користите у API-јима који захтевају `symbol[]`.

> **Напомена за TypeScript кориснике:**
>
> Користите `areSymbols` да валидирате непознат улаз пре него што га третирате као `symbol[]`; враћа `false` за
> вредности које нису низови и за празне низове.

### Предности

- Враћа `true` само када је улаз непразан низ и сваки елемент је симбол.
- Спречава лажно позитивне резултате тако што одбацује вредности које нису низови и празне низове путем интерне провере
  попуњеног низа.
- Корисно као runtime чувар типа за валидацију листи које садрже само симболе пре даље обраде.

## Употреба

### Синтакса

Функција:

- `areSymbols(array)`

Параметри:

- `array`: Низ који треба проверити да ли садржи елементе типа симбол.

### Локални увоз функције

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a je niz koji u vreme izvršavanja sadrži samo simbole
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.areSymbols(array)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>Датотека је генерисана 30 January 2026 at 14:23:52 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>