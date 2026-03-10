# areTrue

## Beskrivelse

Kontrollerer, om et ikke-tomt array kun indeholder de boolske `true`-værdier.

### Anvendelsestilfælde

Brug `areTrue` til at validere, at et sæt forudsætninger eller feature flags alle er aktiveret (alle værdier er `true`),
før du fortsætter, samtidig med at tomme eller fejlformede input behandles som ikke opfyldt (`false`).

> **Bemærkning til TypeScript-brugere:**
>
> `areTrue` returnerer `false` for et tomt array og for arrays, der indeholder en hvilken som helst værdi, som ikke er
> strengt `true`.

### Fordele

- Returnerer kun `true`, når hvert element er strengt `true`, og arrayet ikke er tomt.
- Fejler hurtigt: returnerer `false`, så snart en ikke-`true` værdi findes.
- Afviser ugyldige input (ikke-arrays eller tomme arrays) ved at returnere `false`.

## Brug

### Syntaks

Funktion:

- `areTrue(array)`

Parametre:

- `array`: Arrayet, der skal kontrolleres for udelukkende `true`-værdier.

### Lokal import af funktion

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.areTrue(array)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>Filen blev oprettet den 30 January 2026 at 13:50:51 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>