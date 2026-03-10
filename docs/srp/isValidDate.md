# isValidDate

## Опис

`isValidDate` проверава да ли је дата вредност важећи `Date` објекат и враћа `true` само за стварне, не-неважеће датуме.

### Случај употребе

Валидација корисничког уноса или API података који могу садржати датуме, обезбеђујући да је вредност стварна инстанца
`Date`, а не неважећи датум, пре извођења прорачуна датума, форматирања или поређења.

> **Напомена за TypeScript кориснике:**
>
> Користите `isValidDate` пре позивања `Date` метода (нпр. `toISOString`, `getTime`) над вредностима типа `unknown` како
> бисте осигурали да су важећи `Date` објекти.

### Предности

- Обезбеђује да је вредност инстанца `Date`, а не само стринг или број који личи на датум.
- Одбацује неважеће датуме (нпр. `new Date("invalid")`) провером да ли је временска вредност `NaN`.
- Једноставан буловски гард који је лако користити у условима и валидационим токовима.
- Помаже у спречавању грешака у извршавању при позивању метода за датум тако што прво проверава улаз.

## Употреба

### Синтакса

Функција:

- `isValidDate(value)`

Параметри:

- `value`: Вредност коју треба проверити.

### Локални увоз функције

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input je važeća instanca Date
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // netačno
console.log(isValidDate("2025-12-22")); // netačno

```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.isValidDate(value)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>Датотека је генерисана 30 January 2026 at 16:52:57 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>