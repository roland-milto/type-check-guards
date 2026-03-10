# isRegEx

## Beschrijving

Bepaalt of een opgegeven waarde een `RegExp`-instantie is.

### Use case

Valideer door gebruikers aangeleverde of dynamische waarden (bijv. configuratie, API-payloads, plugin-invoer) voordat je
ze als een reguliere expressie behandelt.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `isRegEx` om `unknown`- (of union-)waarden te verfijnen voordat je RegExp-specifieke eigenschappen of methoden
> gebruikt; het retourneert alleen `true` voor waarden die instanties van `RegExp` zijn.

### Voordelen

- Biedt een eenvoudige runtime-typeguard om te controleren of een waarde een `RegExp` is.
- Helpt fouten te voorkomen wanneer code een reguliere expressie verwacht (bijv. vóór het aanroepen van `test`, `exec`
  of het lezen van `source`).
- Werkt met zowel regex-literals als instanties die zijn gemaakt via `new RegExp(...)`.
- Geeft een duidelijk booleaans resultaat (`true`/`false`) terug zonder te gooien bij niet-regex-invoer.

## Gebruik

### Syntax

Functie:

- `isRegEx(value)`

Parameters:

- `value`: De te controleren waarde.

### Lokale functie-import

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // input is hier een RegExp
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.isRegEx(value)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>Het bestand is op 30 January 2026 at 23:30:20 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>