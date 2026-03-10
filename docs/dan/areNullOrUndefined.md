# areNullOrUndefined

## Beskrivelse

Kontrollerer, om alle elementer i det givne array er `null` eller `undefined`.

### Anvendelsestilfælde

Validér, at en liste af valgfrie felter ikke indeholder nogen faktiske værdier (kun `null`/`undefined`), før du
beslutter at springe behandling over eller at vise en tilstand som “ingen værdier angivet”.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `areNullOrUndefined`, når du har brug for at verificere, at et array kun indeholder manglende værdier (`null`/
`undefined`). Bemærk, at den returnerer `false` for et tomt array.

### Fordele

- Returnerer kun `true`, når hvert element er `null` eller `undefined`.
- Returnerer `false` for tomme arrays, hvilket hjælper med at skelne mellem “ingen data” og “alle manglende værdier”.
- Virker med `unknown[]`, hvilket gør den sikker at bruge før indsnævring af typer.

## Brug

### Syntaks

Funktion:

- `areNullOrUndefined(array)`

Parametre:

- `array`: Arrayet, der skal kontrolleres.

### Lokal import af funktion

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === sand

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === falsk

const empty = areNullOrUndefined([]);
// empty === falsk
```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.areNullOrUndefined(array)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>Filen blev oprettet den 31 January 2026 at 00:29:25 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>