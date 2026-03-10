# isUndefined

## Beskrivelse

Kontrollerer, om en given værdi er `undefined`.

### Anvendelsestilfælde

Brug `isUndefined` til at beskytte valgfrie input, detektere manglende egenskaber eller skelne mellem “ikke angivet” (
`undefined`) og “eksplicit tom” (`null`).

> **Bemærkning til TypeScript-brugere:**
>
> Brug `isUndefined`, når du specifikt har brug for at detektere `undefined` (ikke `null`). Det er sikkert, fordi det
> bygger på `typeof value === "undefined"`.

### Fordele

- Giver en klar og eksplicit kontrol for `undefined` ved hjælp af `typeof`, hvilket undgår kanttilfælde med
  ikke-deklarerede variabler.
- Returnerer et simpelt boolesk resultat (`true`/`false`), der egner sig til guards, forgrening og valideringslogik.
- Hjælper med at skelne `undefined` fra andre “tomme” værdier som `null`, `0`, `""` eller `NaN`.

## Brug

### Syntaks

Funktion:

- `isUndefined(value)`

Parametre:

- `value`: Værdien, der skal kontrolleres.

### Lokal import af funktion

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x er udefineret her
} else {
  // x er ikke udefineret her
}

const a = isUndefined(undefined); // sand
const b = isUndefined(null);      // falsk
```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.isUndefined(value)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>Filen blev oprettet den 30 January 2026 at 14:02:26 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>