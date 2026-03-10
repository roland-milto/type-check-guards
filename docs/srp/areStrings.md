# areStrings

## Опис

`areStrings` проверава да ли је низ непразан и да ли су сви његови елементи стрингови, враћајући `true` само у том
случају.

### Случај употребе

Валидирајте екстерне или кориснички достављене податке (нпр. query params, JSON payloads, CSV fields) да бисте осигурали
да имате непразну листу стрингова пре обраде.

> **Напомена за TypeScript кориснике:**
>
> Користите `areStrings` да валидирате непознате низове пре примене логике која важи само за стрингове; враћа `false` за
> празне низове.

### Предности

- Обезбеђује да је сваки елемент стринг и одбацује низове мешовитих типова тако што враћа `false`.
- Одбацује празне низове, тако да `true` означава само непразну листу стрингова.
- Корисно као брза runtime провера пре извршавања операција које важе само за стрингове (нпр. `trim`, `toLowerCase`).

## Употреба

### Синтакса

Функција:

- `areStrings(value)`

Параметри:

- `value`: Expected type `string[]`.

### Локални увоз функције

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input je ne-prazan string[] u vreme izvršavanja
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.areStrings(value)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>Датотека је генерисана 30 January 2026 at 13:20:28 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>