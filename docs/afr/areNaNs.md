# areNaNs

## Beskrywing

`areNaNs` kontroleer of alle elemente in 'n skikking `NaN` is en gee `true` slegs terug as elke element `NaN` is.

### Gebruikscenario

Valideer inkomende data waar `NaN` as 'n merkerwaarde gebruik word en jy moet verseker dat die hele skikking uitsluitlik
uit `NaN` bestaan (bv. om 'n heeltemal-ontbrekende numeriese reeks op te spoor).

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `areNaNs` wanneer jy moet valideer dat 'n skikking slegs die numeriese `NaN`-waarde bevat (sonder
> string-na-getal-dwinging).

### Voordele

- Gee `true` slegs terug wanneer elke element `NaN` is (streng alle-elemente-kontrole).
- Dwing nie stringe na getalle nie; waardes soos "NaN" bly nie-`NaN` en maak die resultaat `false`.
- Gee `false` terug vir nie-gevulde skikkings, wat toevallige `true` op leë invoer voorkom.

## Gebruik

### Sintaksis

Funksie:

- `areNaNs(array)`

Parameters:

- `array`: Die skikking om vir `NaN`-waardes na te gaan.

### Plaaslike funksie-invoer

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // waar
const b = areNaNs([NaN, 1, NaN]); // vals
const c = areNaNs([NaN, "NaN", NaN]); // vals
const d = areNaNs([NaN, null, NaN]); // vals
const e = areNaNs([] as unknown[]); // vals
```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.areNaNs(array)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>Hierdie lêer is op 30 January 2026 at 15:50:18 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>