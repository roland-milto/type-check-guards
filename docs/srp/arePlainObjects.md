# arePlainObjects

## Опис

Проверава да ли су сви елементи низа обични објекти, враћајући `true` само ако сваки елемент испуњава услов.

### Случај употребе

Валидирајте спољне или нетипизиране податке (нпр. парсирани JSON, API payload-ове, слања формулара) како бисте осигурали
да сте добили непразан низ у ком је сваки унос обичан објекат пре него што почнете да итерирате и читате својства.

> **Напомена за TypeScript кориснике:**
>
> Користите `arePlainObjects` да валидирате непознат улаз пре него што га у TypeScript-у третирате као
`Record<string, unknown>[]` (или као строжи облик објекта).

### Предности

- Обезбеђује да је сваки елемент у улазном низу обичан објекат, враћајући `true` само када се све ставке поклапају.
- Рано одбацује неважеће улазе (нису низови или су празни низови) враћањем `false`.
- Сматра и објекте креиране литералом објекта и објекте креиране помоћу `Object.create(null)` важећим обичним објектима.

## Употреба

### Синтакса

Функција:

- `arePlainObjects(array)`

Параметри:

- `array`: Низ који треба проверити да ли садржи елементе који су обични објекти.

### Локални увоз функције

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // tačno
const b = arePlainObjects([{}, Object.create(null)]); // tačno
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // netačno
const d = arePlainObjects([] as unknown[]); // netačno

```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.arePlainObjects(array)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>Датотека је генерисана 30 January 2026 at 16:55:54 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>