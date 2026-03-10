# isSet

## Опис

Utvrđuje da li je data vrednost `Set`.

### Случај употребе

Validirajte ulaze iz eksternih izvora (npr. parsiranje JSON-a, korisnički unos ili API-ji trećih strana) kako biste
obezbedili da je vrednost `Set` pre izvođenja `Set` operacija.

> **Напомена за TypeScript кориснике:**
>
> Koristite `isSet` da suzite `unknown` vrednosti pre pozivanja API-ja specifičnih za `Set`, kao što su `.add`, `.has`
> ili `.size`.

### Предности

- Pruža jednostavnu proveru u toku izvršavanja (runtime) da bi se potvrdilo da li je vrednost `Set`.
- Pomaže u sprečavanju grešaka tipa tako što omogućava rano grananje kada vrednost nije `Set`.
- Radi sa bilo kojim sadržajem `Set`-a (prazan ili popunjen) i dosledno vraća `true`/`false`.

## Употреба

### Синтакса

Функција:

- `isSet(value)`

Параметри:

- `value`: Vrednost koju treba proveriti.

### Локални увоз функције

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a je Set tokom izvršavanja
  console.log(a.size);
}

console.log(isSet(b)); // netačno
```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.isSet(value)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [isSet](../_analysis/isSet.md)

<br>

---

<small>Датотека је генерисана 30 January 2026 at 23:11:14 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>