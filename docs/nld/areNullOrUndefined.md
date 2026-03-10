# areNullOrUndefined

## Beschrijving

Controleert of alle elementen in de gegeven array `null` of `undefined` zijn.

### Use case

Valideer dat een lijst met optionele velden geen daadwerkelijke waarden bevat (alleen `null`/`undefined`) voordat je
besluit de verwerking over te slaan of een status “geen waarden opgegeven” te tonen.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `areNullOrUndefined` wanneer je moet verifiëren dat een array alleen ontbrekende waarden (`null`/`undefined`)
> bevat. Let op: het retourneert `false` voor een lege array.

### Voordelen

- Retourneert `true` alleen wanneer elk element `null` of `undefined` is.
- Retourneert `false` voor lege arrays, wat helpt om “geen gegevens” te onderscheiden van “alle waarden ontbreken”.
- Werkt met `unknown[]`, waardoor het veilig is om te gebruiken voordat je types vernauwt.

## Gebruik

### Syntax

Functie:

- `areNullOrUndefined(array)`

Parameters:

- `array`: De array die gecontroleerd moet worden.

### Lokale functie-import

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false
```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.areNullOrUndefined(array)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>Het bestand is op 31 January 2026 at 00:30:33 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>