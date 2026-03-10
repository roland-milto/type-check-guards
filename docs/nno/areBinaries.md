# areBinaries

## Skildring

Sjekkar om den oppgjevne verdien er ein ikkje-tom tabell av gyldige binærstrengar og returnerer `true` berre dersom alle
elementa består valideringa.

### Brukstilfelle

Bruk `areBinaries` når du får ei ukjend liste (t.d. frå JSON, skjema eller API-ar) og må sikre at ho er ein ikkje-tom
tabell av binærstrengar før du tolkar eller behandlar ho.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `areBinaries` til å validere ukjend inndata før du konverterer binærstrengar til tal/BigInts; det sikrar at
> tabellen ikkje er tom og at kvart element er ein gyldig binærstreng.

### Fordelar

- Validerer at ein verdi er ein ikkje-tom tabell der kvart element er ein gyldig binærstreng.
- Returnerer eit enkelt boolsk resultat (`true`/`false`) som passar for vaktar, tidlege returverdiar og
  inndatavalidering.
- Hindrar seinare tolkingsfeil ved å avvise tabellar som inneheld ein ikkje-binær oppføring.

## Bruk

### Syntaks

Funksjon:

- `areBinaries(array)`

Parameter:

- `array`: Verdien som skal kontrollerast.

### Lokal funksjonsimport

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // sann
console.log(areBinaries(b)); // usann
console.log(areBinaries([])); // usann
```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.areBinaries(array)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>Fila vart generert 31 January 2026 at 23:15:26 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>