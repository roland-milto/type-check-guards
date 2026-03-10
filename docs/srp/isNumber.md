# isNumber

## Опис

`isNumber` проверава да ли је вредност коначан број који није `NaN`.

### Случај употребе

Валидирајте нумерички унос из непоузданих извора (форме, query параметри, JSON payload-ови) пре прорачуна, складиштења
или провера опсега, тако да само коначни бројеви прођу (`true`), а све остало врати `false`.

> **Напомена за TypeScript кориснике:**
>
> Користите `isNumber` да валидирате `unknown` вредности пре рачунања; одбацује `NaN`, `Infinity` и `-Infinity`.

### Предности

- Враћа `true` само за стварне JavaScript бројеве (провера типа уз одбацивање `NaN` и бесконачности).
- Спречава честе багове у валидацији где `NaN`, `Infinity` или `-Infinity` случајно прођу као бројеви.
- Добро служи као runtime guard за непознат улаз (нпр. JSON, кориснички унос, спољни API-ји).
- Једноставно, брзо и без споредних ефеката.

## Употреба

### Синтакса

Функција:

- `isNumber(value)`

Параметри:

- `value`: Вредност коју треба проверити.

### Локални увоз функције

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input je važeći konačan broj
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.isNumber(value)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>Датотека је генерисана 30 January 2026 at 13:11:09 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>