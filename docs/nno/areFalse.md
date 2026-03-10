# areFalse

## Skildring

`areFalse` sjekkar om alle elementa i ein gitt array er strengt den boolske verdien `false`.

### Brukstilfelle

Valider at ei liste med feature flags, sjekkar eller guard-resultat alle er `false` før du går vidare (t.d. stadfest at
ingen blokkerande vilkår er til stades).

> **Merknad for TypeScript-brukarar:**
>
> Bruk `areFalse` når du treng ei streng validering av at ein array ikkje er tom og berre inneheld den boolske verdien
`false`.

### Fordelar

- Sikrar at kvart element er strengt `false` (inga truthy/falsey-konvertering).
- Returnerer `false` for ikkje-arrays eller tomme arrays ved å krevje ein utfylt array via `isFilledArray`.
- Stoppar tidleg ved det første ikkje-`false`-elementet for effektivitet.

## Bruk

### Syntaks

Funksjon:

- `areFalse(array)`

Parameter:

- `array`: Arrayen som skal sjekkast, med element av kva type som helst.

### Lokal funksjonsimport

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // sann
const b = areFalse([false, true, false]);  // usann
const c = areFalse([false, "false", false]); // usann
const d = areFalse([]); // usann
```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.areFalse(array)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>Fila vart generert 31 January 2026 at 16:18:03 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>