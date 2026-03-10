# isDecimal

## Disgrifiad

Mae `isDecimal` yn gwirio a yw gwerth yn gynrychioliad llinyn degol heb fylchau gwyn ar y dechrau/diwedd ac â fformat
degol dilys.

### Achos defnydd

Dilysu meysydd ffurflen, llwythi tâl API, neu werthoedd cyfluniad y mae'n rhaid eu darparu fel llinyn degol (gyda
llofnod dewisol) heb unrhyw fylchau gwyn o'i amgylch, cyn eu dosrannu neu eu storio.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `isDecimal` i ddilysu mewnbwn defnyddiwr cyn ei drosi (e.e., gyda `Number(value)`), yn enwedig pan fo'n
> rhaid gwrthod bylchau gwyn.

### Manteision

- Yn dilysu'n llym fod y mewnbwn yn llinyn ac yn cyfateb i batrwm llythrennol-deg.
- Yn gwrthod bylchau gwyn ar y dechrau a'r diwedd (gan gynnwys nodau rheoli) i osgoi dosrannu amwys.
- Gwiriadau cyflym ymlaen llaw (gwiriad math a'r nod cyntaf/olaf) cyn rhedeg y regex.
- Yn dychwelyd canlyniad booleaidd syml (`true`/`false`) sy'n addas ar gyfer gwarchodwyr a dilysu mewnbwn.

## Defnydd

### Cystrawen

Swyddogaeth:

- `isDecimal(value)`

Paramedrau:

- `value`: Y gwerth i'w wirio am fformat llinyn degol.

### Mewnforio swyddogaeth leol

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // mae v yn llinyn yma (wedi'i ddilysu ar amser rhedeg)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.isDecimal(value)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>Crëwyd y ffeil ar 31 January 2026 at 15:51:54 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>