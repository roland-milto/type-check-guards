# areErrors

## Beskrivelse

Tjekker, om et array er ikke-tomt og kun indeholder `Error`-objekter, og returnerer `true` eller `false`.

### Anvendelsestilfælde

Validér, at et runtime-leveret `unknown[]` (f.eks. aggregerede fejl, valideringsresultater eller deserialiserede data)
er en ikke-tom liste af `Error`-objekter, før der itereres, logges eller genkastes.

> **Bemærkning til TypeScript-brugere:**
>
> `areErrors` returnerer kun `true` for et udfyldt array, hvor hvert element er en `Error`; den returnerer `false` for
> et tomt array, eller hvis et element ikke er en `Error`.

### Fordele

- Sikrer, at hvert element er en `Error`-instans, hvilket muliggør sikker fejlhåndtering og logning.
- Afviser tomme arrays, så utilsigtede “ingen fejl”-tilstande ikke behandles som gyldige fejllister.
- Fungerer godt som en runtime-guard, når man arbejder med `unknown[]`-input (f.eks. fra API'er eller `catch`-blokke).

## Brug

### Syntaks

Funktion:

- `areErrors(array)`

Parametre:

- `array`: Arrayet, der skal tjekkes for `Error`-objekter.

### Lokal import af funktion

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value er et ikke-tomt array af Error-objekter
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.areErrors(array)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>Filen blev oprettet den 6 February 2026 at 12:33:15 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>