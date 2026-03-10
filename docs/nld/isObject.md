# isObject

## Beschrijving

Bepaalt of een gegeven `value` een `object` is (met uitsluiting van `null`).

### Use case

Gebruik `isObject` om onbekende invoer (bijv. geparseerde JSON, API-responses, event-payloads) te valideren voordat je
properties benadert, zodat je zeker weet dat de waarde een object is en niet `null`.

> **Hint voor TypeScript-gebruikers:**
>
> `isObject` is een runtime-guard die een boolean retourneert; het versmalt niet naar een specifieke objectvorm.
> Combineer het met aanvullende controles (bijv. bestaan van properties) wanneer je sterkere typing nodig hebt.

### Voordelen

- Retourneert `true` alleen voor niet-`null` waarden waarvan `typeof` `"object"` is.
- Voorkomt de veelvoorkomende JavaScript-valkuil waarbij `null` anders als een object zou worden behandeld.
- Werkt voor gewone objecten en ingebouwde objectinstanties (bijv. `Date`, `RegExp`).
- Eenvoudige, snelle runtime-check die geschikt is voor defensief programmeren en invoervalidatie.

## Gebruik

### Syntax

Functie:

- `isObject(value)`

Parameters:

- `value`: De waarde die gecontroleerd moet worden op het zijn van een `object`.

### Lokale functie-import

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input is tijdens runtime een niet-null object
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.isObject(value)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [isObject](../_analysis/isObject.md)

<br>

---

<small>Het bestand is op 31 January 2026 at 00:19:35 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>