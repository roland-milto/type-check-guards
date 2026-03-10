# isArray

## Skildring

`isArray` sjekkar om ein gitt verdi er ein array og returnerer `true` dersom han er det, elles `false`.

### Brukstilfelle

Valider ukjende data (t.d. tolka JSON eller API-svar) for å sikre at ein verdi er ein array før du itererer, indekserer
eller får tilgang til `.length`.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `isArray` når du treng ein runtime-sjekk for arrayar; han returnerer ein boolean og er trygg å kalla med
`unknown`-verdiar.

### Fordelar

- Brukar den innebygde `Array.isArray` for påliteleg deteksjon av arrayar på tvers av realm (t.d. iframes).
- Returnerer eit enkelt boolsk resultat (`true`/`false`) som passar for guards og forgreiningslogikk.
- Fungerer med alle inndatatypar fordi parameteren er `unknown`.

## Bruk

### Syntaks

Funksjon:

- `isArray(value)`

Parameter:

- `value`: Verdien som skal sjekkast.

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

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.isArray(value)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [isArray](../_analysis/isArray.md)

<br>

---

<small>Fila vart generert 6 February 2026 at 11:31:28 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>