# isFilledArray

## Skildring

Sjekkar om `value` er ein tabell med minst eitt element, og returnerer `true` eller `false`.

### Brukstilfelle

Bruk `isFilledArray` til å validere innkomande data (t.d. API-payloadar, skjemaverdiar, konfigurasjon) før du itererer,
aksesserer det første elementet, eller brukar logikk som krev minst eitt element.

> **Merknad for TypeScript-brukarar:**
>
> `isFilledArray` er ein køyretids-guard som returnerer ein boolean; han snevrar ikkje inn elementtypar utover å
> stadfeste at tabellen ikkje er tom.

### Fordelar

- Enkel og rask sjekk for ein ikkje-tom tabell ved å bruke `Array.isArray` og ein lengdesjekk.
- Hjelper med å unngå køyretidsfeil når kode føreset at ein tabell har minst eitt element.
- Klart boolsk resultat: returnerer `true` for ikkje-tomme tabellar og `false` elles.

## Bruk

### Syntaks

Funksjon:

- `isFilledArray(value)`

Parameter:

- `value`: Verdien som skal sjekkast for om ho er ein ikkje-tom tabell.

### Lokal funksjonsimport

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input er ein ikkje-tom matrise ved køyretid
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.isFilledArray(value)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>Fila vart generert 6 February 2026 at 11:48:13 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>