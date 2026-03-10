# isHexadecimal

## Beskrivelse

`isHexadecimal` kontrollerer, om en given værdi er en heksadecimalt streng-literal med et obligatorisk `0x`/`0X`
-præfiks.

### Anvendelsestilfælde

Brug `isHexadecimal` til at validere konfigurationsværdier, API-payloadfelter eller CLI-argumenter, der skal angives som
heksadecimale streng-literals (f.eks. ID'er, masker eller adresser) og ikke må indeholde omgivende mellemrum.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `isHexadecimal`, når du har brug for at validere brugerinput eller serialiserede data som en streng heksadecimalt
> literal (inklusive `0x`/`0X`-præfikset) før parsing eller konvertering.

### Fordele

- Validerer, at en værdi er en streng og matcher et strengt heksadecimalt literalformat (kræver `0x`/`0X`-præfikset).
- Afviser strenge med indledende eller afsluttende mellemrum, hvilket hjælper med at undgå utilsigtet accept af input
  med polstring.
- Understøtter valgfrit fortegn og er ikke forskelsbehandlende mht. store/små bogstaver for præfiks og cifre, og
  returnerer forudsigeligt `true`/`false`.

## Brug

### Syntaks

Funktion:

- `isHexadecimal(value)`

Parametre:

- `value`: Værdien, der skal kontrolleres.

### Lokal import af funktion

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // sand
isHexadecimal("-0Xff"); // sand
isHexadecimal("1A2B"); // falsk (manglende præfiks)
isHexadecimal(" 0x1A2B"); // falsk (indledende mellemrum)
isHexadecimal(0x1a2b); // falsk (ikke en streng)
```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.isHexadecimal(value)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>Filen blev oprettet den 31 January 2026 at 22:58:20 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>