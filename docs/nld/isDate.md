# isDate

## Beschrijving

`isDate` bepaalt of een opgegeven waarde een `Date` is, en retourneert `true` voor `Date`-instanties en anders `false`.

### Use case

Valideer en vernauw onbekende waarden (bijv. requestdata, configuratiewaarden of geparste JSON) voordat je `Date`
-bewerkingen uitvoert zoals opmaak, vergelijkingen of het aanroepen van `toISOString()`.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `isDate` om `unknown` tijdens runtime te vernauwen naar `Date`; het retourneert alleen `true` voor echte
`Date`-instanties (niet voor datumstrings).

### Voordelen

- Het biedt een eenvoudige runtime-guard om te verifiëren of een waarde een `Date` is.
- Het helpt typefouten te voorkomen door ervoor te zorgen dat alleen `Date`-instanties de validatie doorstaan.
- Het is nuttig voor het valideren van onbekende invoer (bijv. API-payloads) voordat datum-specifieke methoden worden
  gebruikt.

## Gebruik

### Syntax

Functie:

- `isDate(value)`

Parameters:

- `value`: De waarde die gecontroleerd moet worden op het type `Date`.

### Lokale functie-import

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // input is hier een Date
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.isDate(value)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [isDate](../_analysis/isDate.md)

<br>

---

<small>Het bestand is op 31 January 2026 at 15:47:02 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>