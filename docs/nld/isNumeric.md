# isNumeric

## Beschrijving

`isNumeric` bepaalt of een gegeven `value` als numeriek wordt beschouwd door het opgeloste type te controleren tegen
`NUMERIC_TYPES`.

### Use case

Gebruik `isNumeric` om invoer te valideren (bijv. API-payloads, formulierwaarden, configuratie) voordat je numerieke
bewerkingen uitvoert, en om consistent numeriek-achtige typen (zoals `BigInt`) te accepteren volgens `NUMERIC_TYPES`.

> **Hint voor TypeScript-gebruikers:**
>
> `isNumeric` is een predicaat dat een boolean retourneert; behandel het als een runtime-check om te bepalen of een
> waarde behoort tot de door de bibliotheek gedefinieerde set numerieke typen.

### Voordelen

- Gebruikt `getTypeOf` plus `NUMERIC_TYPES` om logica voor numerieke detectie te centraliseren en controles consistent
  te houden binnen een codebase.
- Retourneert een eenvoudige boolean (`true`/`false`) voor gemakkelijk vertakken en gebruik in guard-stijl.
- Ondersteunt meerdere numerieke representaties (bijv. `number`, `BigInt`) zoals gedefinieerd door `NUMERIC_TYPES`.

## Gebruik

### Syntax

Functie:

- `isNumeric(value)`

Parameters:

- `value`: De waarde die gecontroleerd moet worden op een numeriek type.

### Lokale functie-import

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v wordt als numeriek beschouwd volgens de typeregels van de bibliotheek
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.isNumeric(value)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>Het bestand is op 6 February 2026 at 15:53:47 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>