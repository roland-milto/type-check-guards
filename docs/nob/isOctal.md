# isOctal

## Beskrivelse

Avgjør om en verdi er en gyldig oktal literalstreng (f.eks. `0o755`).

### Brukstilfelle

Valider brukerinput eller konfigurasjonsverdier som må uttrykkes som en oktal literalstreng (for eksempel
filrettighetsmoduser som `0o644`) før de parses eller konverteres.

> **Merknad for TypeScript-brukere:**
>
> `isOctal` er en type guard (`value is string`). Etter et `true`-resultat snevrer TypeScript inn den sjekkede
> variabelen til `string`.

### Fordeler

- Gir en streng type guard: returnerer `true` bare når inndata er en streng som samsvarer med et oktalt literalformat.
- Avviser tomme strenger og strenger med innledende/etterfølgende mellomrom (ASCII-kontroll/blanktegn), noe som
  reduserer utilsiktede treff.
- Støtter valgfritt fortegn og skiller ikke mellom store og små bokstaver for `0o`/`0O`-prefikset.
- Tolerant for ikke-streng-inndata ved å returnere `false` i stedet for å kaste en feil.

## Bruk

### Syntaks

Funksjon:

- `isOctal(value)`

Parametere:

- `value`: Verdien som skal sjekkes.

### Lokal funksjonsimport

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // sant
console.log(isOctal(b)); // sant
console.log(isOctal(c)); // usant
console.log(isOctal(d)); // usant

if (isOctal(a)) {
  // a er streng her
  const normalized = a.toLowerCase();
  console.log(normalized);
}
```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.isOctal(value)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>Filen ble generert 30 January 2026 at 15:42:34 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>