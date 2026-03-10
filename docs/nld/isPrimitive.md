# isPrimitive

## Beschrijving

`isPrimitive` bepaalt of een gegeven waarde een primitief is (`null`, `undefined`, `boolean`, `number`, `string`,
`bigint`, `symbol`).

### Use case

Valideer invoer tijdens runtime (bijv. API-payloadvelden, configuratiewaarden of door gebruikers aangeleverde data) om
te zorgen dat een waarde een primitief is voordat je serialiseert, logt of primitief-alleen bewerkingen toepast.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `isPrimitive` om `unknown`-invoer te bewaken voordat je die als objecten of functies behandelt; het
> retourneert `true` voor primitieven en `false` voor objecten en functies.

### Voordelen

- Snelle, allocatievrije controle of een waarde een JavaScript-primitief is.
- Behandelt `null` correct als primitief (ook al is `typeof null` `"object"`).
- Helpt `unknown`-waarden te verfijnen voordat je object-alleen bewerkingen uitvoert.

## Gebruik

### Syntax

Functie:

- `isPrimitive(value)`

Parameters:

- `value`: De waarde die gecontroleerd moet worden op een primitief type.

### Lokale functie-import

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.isPrimitive(value)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>Het bestand is op 30 January 2026 at 23:57:05 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>