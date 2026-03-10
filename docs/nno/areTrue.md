# areTrue

## Skildring

Sjekkar om eit ikkje-tomt array berre inneheld dei boolske `true`-verdiane.

### Brukstilfelle

Bruk `areTrue` til å validere at eit sett med føresetnader eller feature flags alle er aktiverte (alle verdiar er
`true`) før du held fram, samstundes som tomme eller feilforma inndata blir handsama som ikkje oppfylte (`false`).

> **Merknad for TypeScript-brukarar:**
>
> `areTrue` returnerer `false` for eit tomt array og for array som inneheld ein verdi som ikkje er strengt `true`.

### Fordelar

- Returnerer `true` berre når kvart element er strengt `true` og arrayet ikkje er tomt.
- Feilar raskt: returnerer `false` så snart ein finn ein verdi som ikkje er `true`.
- Avviser ugyldige inndata (ikkje-array eller tomme array) ved å returnere `false`.

## Bruk

### Syntaks

Funksjon:

- `areTrue(array)`

Parameter:

- `array`: Arrayet som skal sjekkast for berre `true`-verdiar.

### Lokal funksjonsimport

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.areTrue(array)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>Fila vart generert 30 January 2026 at 13:52:11 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>