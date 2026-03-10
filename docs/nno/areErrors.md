# areErrors

## Skildring

Sjekkar om eit array er ikkje-tomt og berre inneheld `Error`-objekt, og returnerer `true` eller `false`.

### Brukstilfelle

Valider at eit `unknown[]` som kjem ved runtime (t.d. aggregerte feil, valideringsresultat eller deserialiserte data) er
ei ikkje-tom liste med `Error`-objekt før ein itererer, loggar eller kastar vidare.

> **Merknad for TypeScript-brukarar:**
>
> `areErrors` returnerer `true` berre for eit fylt array der kvart element er ein `Error`; det returnerer `false` for
> eit tomt array eller dersom noko element ikkje er ein `Error`.

### Fordelar

- Sikrar at kvart element er ein `Error`-instans, noko som gjer trygg feilhandtering og logging mogleg.
- Avviser tomme array, og hindrar at utilsikta «ingen feil»-tilstandar blir handsama som gyldige feillister.
- Fungerer godt som ein runtime-guard når ein jobbar med `unknown[]`-input (t.d. frå API-ar eller `catch`-blokker).

## Bruk

### Syntaks

Funksjon:

- `areErrors(array)`

Parameter:

- `array`: Arrayet som skal sjekkast for `Error`-objekt.

### Lokal funksjonsimport

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value er ein ikkje-tom matrise av Error-objekt
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.areErrors(array)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>Fila vart generert 6 February 2026 at 12:34:49 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>