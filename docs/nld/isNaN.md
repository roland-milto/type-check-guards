# isNaN

## Beschrijving

Bepaalt of de opgegeven `value` een `NaN` van het type `number` is zonder strings te converteren.

### Use case

Valideer onbetrouwbare of los getypeerde invoer (bijv. API-payloads, formuliervelden, geparseerde JSON) om de speciale
`NaN`-waarde te detecteren en deze expliciet af te handelen, terwijl niet-numerieke invoer niet als `NaN` wordt
behandeld.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `isNaN` wanneer je de speciale numerieke waarde `NaN` moet detecteren en tegelijk wilt garanderen dat de
> invoer daadwerkelijk een `number` is (geen string-naar-getalconversie).

### Voordelen

- Controleert of een waarde `NaN` is zonder niet-numerieke waarden (bijv. strings) naar getallen te coërceren.
- Geeft alleen `true` terug voor waarden die zowel van het type `number` zijn als `NaN`.
- Veilig voor `unknown`-invoer en voorkomt fout-positieven door impliciete conversies.

## Gebruik

### Syntax

Functie:

- `isNaN(value)`

Parameters:

- `value`: De waarde die gecontroleerd moet worden of deze een `NaN` van het type `number` is.

### Lokale functie-import

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // waar
console.log(isNaN(b)); // onwaar
console.log(isNaN(c)); // onwaar

if (isNaN(a)) {
  // a is een getal en specifiek NaN
}
```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.isNaN(value)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>Het bestand is op 30 January 2026 at 15:47:19 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>