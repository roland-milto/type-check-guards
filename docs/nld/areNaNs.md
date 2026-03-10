# areNaNs

## Beschrijving

`areNaNs` controleert of alle elementen in een array `NaN` zijn en retourneert `true` alleen als elk element `NaN` is.

### Use case

Valideer binnenkomende gegevens waarbij `NaN` als sentinelwaarde wordt gebruikt en je moet garanderen dat de volledige
array uitsluitend uit `NaN` bestaat (bijv. het detecteren van een volledig ontbrekende numerieke reeks).

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `areNaNs` wanneer je moet valideren dat een array uitsluitend de numerieke `NaN`-waarde bevat (zonder
> string-naar-getal-coercie).

### Voordelen

- Retourneert `true` alleen wanneer elk element `NaN` is (strikte controle op alle elementen).
- Zet strings niet om naar getallen; waarden zoals "NaN" blijven niet-`NaN` en maken het resultaat `false`.
- Retourneert `false` voor niet-gevulde arrays, waardoor een onbedoelde `true` bij lege invoer wordt voorkomen.

## Gebruik

### Syntax

Functie:

- `areNaNs(array)`

Parameters:

- `array`: De array die gecontroleerd moet worden op `NaN`-waarden.

### Lokale functie-import

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // waar
const b = areNaNs([NaN, 1, NaN]); // onwaar
const c = areNaNs([NaN, "NaN", NaN]); // onwaar
const d = areNaNs([NaN, null, NaN]); // onwaar
const e = areNaNs([] as unknown[]); // onwaar
```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.areNaNs(array)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>Het bestand is op 30 January 2026 at 15:52:40 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>