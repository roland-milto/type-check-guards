# areErrors

## Beskrivelse

Sjekker om en array er ikke-tom og kun inneholder `Error`-objekter, og returnerer `true` eller `false`.

### Brukstilfelle

Valider at en `unknown[]` levert ved runtime (f.eks. aggregerte feil, valideringsresultater eller deserialiserte data)
er en ikke-tom liste med `Error`-objekter før du itererer, logger eller kaster på nytt.

> **Merknad for TypeScript-brukere:**
>
> `areErrors` returnerer `true` bare for en fylt array der hvert element er en `Error`; den returnerer `false` for en
> tom array eller hvis et element ikke er en `Error`.

### Fordeler

- Sikrer at hvert element er en `Error`-instans, noe som muliggjør trygg feilhåndtering og logging.
- Avviser tomme arrayer, og hindrer at utilsiktede «ingen feil»-tilstander behandles som gyldige feillister.
- Fungerer godt som en runtime-guard når man håndterer `unknown[]`-input (f.eks. fra API-er eller `catch`-blokker).

## Bruk

### Syntaks

Funksjon:

- `areErrors(array)`

Parametere:

- `array`: Arrayen som skal sjekkes for `Error`-objekter.

### Lokal funksjonsimport

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value er en ikke-tom matrise av Error-objekter
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.areErrors(array)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>Filen ble generert 6 February 2026 at 12:34:54 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>