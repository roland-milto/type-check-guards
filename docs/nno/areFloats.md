# areFloats

## Skildring

`areFloats` sjekkar om ei gitt matrise er fylt og om alle elementa hennar er flyttal.

### Brukstilfelle

Bruk `areFloats` når du får ein `unknown[]` (t.d. frå JSON, spørjeparametrar eller eksterne API-ar) og du må sikre at
det er ei fylt matrise der kvart element er eit flyttal før du køyrer numerisk logikk som gjennomsnitt, interpolasjon
eller statistiske utrekningar.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `areFloats` til å verne `unknown[]` før du handsamar det som `number[]` som berre inneheld flyttal; det
> returnerer `false` for tomme matriser og for alle element som ikkje er flyttal.

### Fordelar

- Returnerer `true` berre når inndata er ein ikkje-tom matrise og kvart element er eit flyttal.
- Feilar raskt: returnerer `false` så snart eit element som ikkje er flyttal blir funne.
- Hjelper med å validere ukjend inndata før du utfører utrekningar som er spesifikke for flyttal.

## Bruk

### Syntaks

Funksjon:

- `areFloats(array)`

Parameter:

- `array`: Matrisa som skal sjekkast for flyttalselement.

### Lokal funksjonsimport

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // sann
console.log(areFloats(b)); // usann
console.log(areFloats(c)); // usann

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null
```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.areFloats(array)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>Fila vart generert 30 January 2026 at 15:58:48 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>