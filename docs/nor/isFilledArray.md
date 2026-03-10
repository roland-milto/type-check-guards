# isFilledArray

## Beskrivelse

Sjekker om `value` er en matrise med minst ett element, og returnerer `true` eller `false`.

### Brukstilfelle

Bruk `isFilledArray` til å validere innkommende data (f.eks. API-payloads, skjemaverdier, konfigurasjon) før du
itererer, aksesserer første element, eller anvender logikk som krever minst ett element.

> **Merknad for TypeScript-brukere:**
>
> `isFilledArray` er en kjøretids-guard som returnerer en boolsk verdi; den snevrer ikke inn elementtyper utover å
> bekrefte at matrisen ikke er tom.

### Fordeler

- Enkel og rask sjekk for en ikke-tom matrise ved å bruke `Array.isArray` og en lengdesjekk.
- Hjelper med å unngå kjøretidsfeil når kode antar at en matrise har minst ett element.
- Tydelig boolsk resultat: returnerer `true` for ikke-tomme matriser og `false` ellers.

## Bruk

### Syntaks

Funksjon:

- `isFilledArray(value)`

Parametere:

- `value`: Verdien som skal sjekkes for om den er en ikke-tom matrise.

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

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.isFilledArray(value)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>Filen ble generert 6 February 2026 at 11:48:15 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>