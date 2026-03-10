# isArray

## Beskrivelse

`isArray` kontrollerer, om en given værdi er et array, og returnerer `true`, hvis den er det, ellers `false`.

### Anvendelsestilfælde

Validér ukendte data (f.eks. parsed JSON eller API-svar) for at sikre, at en værdi er et array, før du itererer,
indekserer eller tilgår `.length`.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `isArray`, når du har brug for et runtime-tjek for arrays; den returnerer en boolean og er sikker at kalde med
`unknown`-værdier.

### Fordele

- Bruger den indbyggede `Array.isArray` til pålidelig registrering af arrays på tværs af realms (f.eks. iframes).
- Returnerer et simpelt boolesk resultat (`true`/`false`), der egner sig til guards og forgreningslogik.
- Fungerer med enhver inputtype, fordi parameteren er `unknown`.

## Brug

### Syntaks

Funktion:

- `isArray(value)`

Parametre:

- `value`: Værdien, der skal kontrolleres.

### Lokal import af funktion

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input er et array ved kørselstid
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.isArray(value)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [isArray](../_analysis/isArray.md)

<br>

---

<small>Filen blev oprettet den 6 February 2026 at 11:30:07 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>