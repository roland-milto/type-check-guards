# isFalse

## Опис

`isFalse` проверава да ли је дата вредност строго једнака буловом литералу `false`.

### Случај употребе

Валидирајте непознате податке (нпр. из JSON-а, параметара упита или корисничког уноса) где само експлицитна булова
вредност `false` треба да се третира као важећи флаг, а све остало треба одбацити.

> **Напомена за TypeScript кориснике:**
>
> Користите `isFalse` када треба да прихватите само литерал `false` и одбаците све друге „falsy“ вредности; враћа `true`
> само за `value === false`.

### Предности

- Пружа строгу проверу за булов литерал `false` без принудне конверзије.
- Помаже да се `false` разликује од других „falsy“ вредности као што су `0`, `""`, `null` и `undefined`.
- Побољшава читљивост тако што експлицитно исказује намеру при валидацији непознатог улаза.

## Употреба

### Синтакса

Функција:

- `isFalse(value)`

Параметри:

- `value`: Вредност која се проверава.

### Локални увоз функције

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // input je ovde tačno false
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.isFalse(value)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>Датотека је генерисана 31 January 2026 at 16:44:35 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>