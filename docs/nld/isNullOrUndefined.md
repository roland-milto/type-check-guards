# isNullOrUndefined

## Beschrijving

Controleert of een gegeven waarde `null` of `undefined` is.

### Use case

Gebruik `isNullOrUndefined` wanneer je zowel `null` als `undefined` wilt behandelen als “geen waarde”, zoals bij het
valideren van optionele invoer, het normaliseren van API-payloads, of het afschermen van codepaden voordat je een
mogelijk ontbrekende waarde dereferenceert.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `isNullOrUndefined` om te beschermen tegen ontbrekende waarden voordat je properties benadert of methoden
> aanroept; het retourneert alleen `true` voor `null` en `undefined`.

### Voordelen

- Biedt een duidelijke, herbruikbare guard om `null` en `undefined` op één plek te detecteren.
- Retourneert een eenvoudige boolean (`true`/`false`) die gemakkelijk te combineren is in voorwaarden en validaties.
- Helpt veelvoorkomende runtimefouten te voorkomen door te controleren op ontbrekende waarden voordat je properties
  benadert of methoden aanroept.

## Gebruik

### Syntax

Functie:

- `isNullOrUndefined(value)`

Parameters:

- `value`: De waarde die gecontroleerd moet worden op `null` of `undefined`.

### Lokale functie-import

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // ontbrekende waarde afhandelen
}

console.log(isNullOrUndefined(b)); // waar
console.log(isNullOrUndefined(c)); // onwaar

```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.isNullOrUndefined(value)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>Het bestand is op 31 January 2026 at 00:34:38 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>