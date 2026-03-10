# isValidDate

## Beschrijving

`isValidDate` controleert of een gegeven waarde een geldig `Date`-object is en retourneert alleen `true` voor echte,
niet-ongeldige datums.

### Use case

Valideer gebruikersinvoer of API-data die datums kan bevatten, en zorg ervoor dat de waarde een echte `Date`-instantie
is en geen ongeldige datum voordat je datumberekeningen, opmaak of vergelijkingen uitvoert.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `isValidDate` voordat je `Date`-methoden (bijv. `toISOString`, `getTime`) aanroept op waarden die als
`unknown` zijn getypeerd, om te garanderen dat het geldige `Date`-objecten zijn.

### Voordelen

- Zorgt ervoor dat een waarde een `Date`-instantie is en niet alleen een datumachtige string of getal.
- Wijst ongeldige datums af (bijv. `new Date("invalid")`) door te controleren op `NaN`-tijdwaarden.
- Eenvoudige booleaanse guard die gemakkelijk te gebruiken is in conditionals en validatiepijplijnen.
- Helpt runtimefouten te voorkomen bij het aanroepen van datummethoden door eerst de invoer te verifiëren.

## Gebruik

### Syntax

Functie:

- `isValidDate(value)`

Parameters:

- `value`: De waarde die gecontroleerd moet worden.

### Lokale functie-import

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input is een geldige Date-instantie
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // onwaar
console.log(isValidDate("2025-12-22")); // onwaar

```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.isValidDate(value)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>Het bestand is op 30 January 2026 at 16:52:04 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>