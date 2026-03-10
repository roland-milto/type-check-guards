# areNullOrUndefined

## Beskrivelse

Sjekker om alle elementene i den gitte arrayen er `null` eller `undefined`.

### Brukstilfelle

Valider at en liste med valgfrie felt ikke inneholder noen faktiske verdier (kun `null`/`undefined`) før du bestemmer
deg for å hoppe over behandling eller vise en «ingen verdier oppgitt»-tilstand.

> **Merknad for TypeScript-brukere:**
>
> Bruk `areNullOrUndefined` når du trenger å verifisere at en array kun inneholder manglende verdier (`null`/
`undefined`). Merk at den returnerer `false` for en tom array.

### Fordeler

- Returnerer `true` bare når hvert element er `null` eller `undefined`.
- Returnerer `false` for tomme arrayer, noe som hjelper med å skille «ingen data» fra «alle manglende verdier».
- Fungerer med `unknown[]`, noe som gjør den trygg å bruke før innsnevring av typer.

## Bruk

### Syntaks

Funksjon:

- `areNullOrUndefined(array)`

Parametere:

- `array`: Arrayen som skal sjekkes.

### Lokal funksjonsimport

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === sann

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === usann

const empty = areNullOrUndefined([]);
// empty === usann
```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.areNullOrUndefined(array)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>Filen ble generert 31 January 2026 at 00:30:39 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>