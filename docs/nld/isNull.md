# isNull

## Beschrijving

Bepaalt of de opgegeven `value` `null` is.

### Use case

Gebruik `isNull` om invoer of velden in API-payloads te valideren waarbij `null` een betekenisvolle sentinelwaarde is en
anders behandeld moet worden dan `undefined` of andere waarden.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `isNull` wanneer je `null` wilt onderscheiden van `undefined` en andere falsy waarden; het retourneert alleen
`true` voor `null`.

### Voordelen

- Biedt een nauwkeurige controle op `null` zonder het te verwarren met `undefined`.
- Werkt betrouwbaar voor elk invoertype omdat het `unknown` accepteert.
- Eenvoudig, snel en zonder bijwerkingen; retourneert alleen `true` of `false`.

## Gebruik

### Syntax

Functie:

- `isNull(value)`

Parameters:

- `value`: De waarde die op `null` gecontroleerd moet worden.

### Lokale functie-import

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // waar
console.log(isNull(b)); // onwaar

if (isNull(a)) {
  // a is hier null
}
```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.isNull(value)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [isNull](../_analysis/isNull.md)

<br>

---

<small>Het bestand is op 31 January 2026 at 15:40:13 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>