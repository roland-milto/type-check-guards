# isArray

## Beskrivelse

`isArray` sjekker om en gitt verdi er en array og returnerer `true` hvis den er det, ellers `false`.

### Brukstilfelle

Valider ukjente data (f.eks. parsede JSON-data eller API-responser) for å sikre at en verdi er en array før du itererer,
indekserer eller aksesserer `.length`.

> **Merknad for TypeScript-brukere:**
>
> Bruk `isArray` når du trenger en kjøretidssjekk for arrayer; den returnerer en boolsk verdi og er trygg å kalle med
`unknown`-verdier.

### Fordeler

- Bruker den innebygde `Array.isArray` for pålitelig deteksjon av arrayer på tvers av realms (f.eks. iframes).
- Returnerer et enkelt boolsk resultat (`true`/`false`) som egner seg for guards og forgreningslogikk.
- Fungerer med alle inndatatyper fordi parameteren er `unknown`.

## Bruk

### Syntaks

Funksjon:

- `isArray(value)`

Parametere:

- `value`: Verdien som skal sjekkes.

### Lokal funksjonsimport

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input er ein matrise ved køyretid
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.isArray(value)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [isArray](../_analysis/isArray.md)

<br>

---

<small>Filen ble generert 6 February 2026 at 11:31:32 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>