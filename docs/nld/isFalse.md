# isFalse

## Beschrijving

`isFalse` controleert of een gegeven waarde strikt gelijk is aan de booleaanse literal `false`.

### Use case

Valideer onbekende data (bijv. uit JSON, queryparameters of gebruikersinvoer) waarbij alleen de expliciete booleaanse
waarde `false` als een geldige vlag moet worden behandeld, en al het andere moet worden afgewezen.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `isFalse` wanneer je alleen de literal `false` wilt accepteren en alle andere falsy waarden wilt afwijzen; het
> retourneert alleen `true` voor `value === false`.

### Voordelen

- Biedt een strikte controle op de booleaanse literal `false` zonder coercie.
- Helpt `false` te onderscheiden van andere falsy waarden zoals `0`, `""`, `null` en `undefined`.
- Verbetert de leesbaarheid door de intentie expliciet te maken bij het valideren van onbekende invoer.

## Gebruik

### Syntax

Functie:

- `isFalse(value)`

Parameters:

- `value`: De waarde die gecontroleerd moet worden.

### Lokale functie-import

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // input is hier precies false
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.isFalse(value)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>Het bestand is op 31 January 2026 at 16:43:52 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>