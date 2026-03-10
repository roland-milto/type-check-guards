# areFinite

## Skildring

`areFinite` sjekkar om ein verdi er ei ikkje-tom matrise der elementa alle er endelege tal, og returnerer `true` i så
fall og `false` elles.

### Brukstilfelle

Valider numeriske inndatamatriser (t.d. diagramseriar, koordinatlister, måleprøvar) før du utfører utrekningar, og sikre
at resultatet er `true` berre når alle verdiar er endelege tal.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `areFinite` når du må sikre at ei matrise er ikkje-tom og berre inneheld endelege tal; ho returnerer `false` for
> tomme matriser og for matriser som inneheld `NaN` eller uendelege verdiar.

### Fordelar

- Returnerer `true` berre når inndata er ein ikkje-tom matrise og kvart element er eit endeleg tal.
- Avviser `Infinity`, `-Infinity` og `NaN` ved å basere seg på `isFinite`-sjekkar for kvart element.
- Gjev eit enkelt boolsk resultat (`true`/`false`) som passar for vakter og valideringsflytar.

## Bruk

### Syntaks

Funksjon:

- `areFinite(array)`

Parameter:

- `array`: Matrisa som skal sjekkast for om alle elementa hennar er endelege.

### Lokal funksjonsimport

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // sann
console.log(areFinite(b)); // usann
console.log(areFinite(c)); // usann

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.areFinite(array)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>Fila vart generert 30 January 2026 at 16:36:19 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>