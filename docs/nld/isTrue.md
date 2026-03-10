# isTrue

## Beschrijving

`isTrue` bepaalt of een gegeven waarde strikt gelijk is aan `true`.

### Use case

Gebruik `isTrue` om flags, feature toggles of configuratiewaarden te valideren waarbij alleen de literal `true`
geaccepteerd mag worden en alles anders als `false` moet worden behandeld.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `isTrue` wanneer je alleen de booleaanse literal `true` moet accepteren, en niet slechts truthy waarden.

### Voordelen

- Biedt een strikte controle voor de booleaanse literal `true` (geen coercion).
- Helpt `true` te onderscheiden van truthy waarden zoals `1`, `"true"` of `{}`.
- Eenvoudig, voorspelbaar gedrag dat geschikt is voor guards en validatiepijplijnen.

## Gebruik

### Syntax

Functie:

- `isTrue(value)`

Parameters:

- `value`: De waarde om te controleren.

### Lokale functie-import

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // waar
const b = isTrue(1);         // onwaar
const c = isTrue("true");   // onwaar

if (isTrue(a)) {
  // a is hier waar
}
```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.isTrue(value)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>Het bestand is op 30 January 2026 at 13:45:36 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>