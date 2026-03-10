# areJson

## Skildring

Sjekkar om alle elementa i ein array er JSON-strengar, og returnerer `true` berre dersom arrayen er fylt og kvart
element er gyldig JSON; elles returnerer han `false`.

### Brukstilfelle

Valider innkomande data (t.d. frå query-parametrar, miljøvariablar eller eksterne API-ar) der du forventar ein array av
JSON-koda strengar og vil avvise tomme arrayar eller eventuelle ikkje-JSON-oppføringar.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `areJson` når du treng å validere at ein `unknown[]` berre inneheld JSON-strengar før du parsar dei (t.d. med
`JSON.parse`).

### Fordelar

- Returnerer `true` berre når kvart element er ein gyldig JSON-streng; elles returnerer han `false`.
- Feilar raskt: sluttar å sjekke så snart eit ikkje-JSON-element blir funne.
- Avviser tomme arrayar med vilje, og returnerer `false` for input som ikkje er fylt.

## Bruk

### Syntaks

Funksjon:

- `areJson(array)`

Parameter:

- `array`: Arrayen som skal sjekkast for JSON-strengelement.

### Lokal funksjonsimport

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // sann
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // usann
const empty = areJson([]); // usann

```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.areJson(array)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [areJson](../_analysis/areJson.md)

<br>

---

<small>Fila vart generert 30 January 2026 at 16:16:55 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>