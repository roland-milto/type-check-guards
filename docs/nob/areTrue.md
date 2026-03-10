# areTrue

## Beskrivelse

Sjekker om et ikke-tomt array kun inneholder boolske `true`-verdier.

### Brukstilfelle

Bruk `areTrue` til å validere at et sett med forutsetninger eller feature flags alle er aktivert (alle verdier er
`true`) før du fortsetter, samtidig som tomme eller feilformede inndata behandles som ikke oppfylt (`false`).

> **Merknad for TypeScript-brukere:**
>
> `areTrue` returnerer `false` for et tomt array og for arrays som inneholder en hvilken som helst verdi som ikke er
> strengt `true`.

### Fordeler

- Returnerer `true` bare når hvert element er strengt `true` og arrayet ikke er tomt.
- Feiler raskt: returnerer `false` så snart en verdi som ikke er `true` blir funnet.
- Avviser ugyldige inndata (ikke-arrays eller tomme arrays) ved å returnere `false`.

## Bruk

### Syntaks

Funksjon:

- `areTrue(array)`

Parametere:

- `array`: Arrayet som skal sjekkes for at alle verdier er `true`.

### Lokal funksjonsimport

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.areTrue(array)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>Filen ble generert 30 January 2026 at 13:52:12 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>