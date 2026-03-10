# areHexadecimals

## Beskrivelse

Kontrollerer, om alle elementer i et array er hexadecimale strenge, og returnerer kun `true` for ikke-tomme arrays, hvor
hvert element er gyldigt.

### Anvendelsestilfælde

Brug `areHexadecimals` til at validere brugerinput eller eksterne data (f.eks. ID'er, checksums, farvekoder uden et
indledende '#') før du udfører hexadecimal parsing eller yderligere behandling.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `areHexadecimals` til at validere ukendt input før parsing eller konvertering af værdier (for eksempel før
`parseInt(value, 16)` eller BigInt-konverteringer).

### Fordele

- Validerer, at hvert element er en hexadecimal streng og returnerer kun `true`, når alle elementer matcher.
- Afviser tomme arrays som standard og returnerer `false` ved manglende inputdata.
- Giver et simpelt boolesk resultat (`true`/`false`), som egner sig til guards og tidlig-return validering.

## Brug

### Syntaks

Funktion:

- `areHexadecimals(array)`

Parametre:

- `array`: Arrayet, der skal kontrolleres for hexadecimale streng-elementer.

### Lokal import af funktion

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.areHexadecimals(array)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>Filen blev oprettet den 31 January 2026 at 23:05:49 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>