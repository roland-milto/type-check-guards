# areNaNs

## Beskrivelse

`areNaNs` kontrollerer, om alle elementer i et array er `NaN`, og returnerer `true` kun hvis hvert element er `NaN`.

### Anvendelsestilfælde

Validér indkommende data, hvor `NaN` bruges som en sentinelværdi, og du skal sikre, at hele arrayet udelukkende består
af `NaN` (f.eks. ved detektering af en numerisk serie, hvor alle værdier mangler).

> **Bemærkning til TypeScript-brugere:**
>
> Brug `areNaNs`, når du har brug for at validere, at et array kun indeholder den numeriske `NaN`-værdi (uden
> tvangskonvertering fra streng til tal).

### Fordele

- Returnerer `true` kun når hvert element er `NaN` (streng kontrol af alle elementer).
- Tvinger ikke strenge til tal; værdier som "NaN" forbliver ikke-`NaN` og får resultatet til at være `false`.
- Returnerer `false` for ikke-udfyldte arrays, hvilket forhindrer utilsigtet `true` ved tom input.

## Brug

### Syntaks

Funktion:

- `areNaNs(array)`

Parametre:

- `array`: Arrayet, der skal kontrolleres for `NaN`-værdier.

### Lokal import af funktion

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // sand
const b = areNaNs([NaN, 1, NaN]); // falsk
const c = areNaNs([NaN, "NaN", NaN]); // falsk
const d = areNaNs([NaN, null, NaN]); // falsk
const e = areNaNs([] as unknown[]); // falsk
```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.areNaNs(array)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>Filen blev oprettet den 30 January 2026 at 15:50:59 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>