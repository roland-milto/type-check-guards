# isEmpty

## Beschrijving

Bepaalt of een gegeven waarde leeg is, en retourneert `true` voor `null`, `undefined`, lege/alleen-witruimte strings,
lege arrays, lege `Map`/`Set`, of objecten zonder eigen enumerable properties.

### Use case

Gebruik `isEmpty` om invoer te valideren en ontbrekende/lege waarden te detecteren over meerdere datatypen heen (bijv.
formuliervelden, API-payloads, configuratieobjecten) waarbij `null`, `undefined`, witruimte-strings, lege collecties en
objecten zonder properties als leeg moeten worden behandeld.

> **Hint voor TypeScript-gebruikers:**
>
> `isEmpty` is een utility die een boolean teruggeeft (geen TypeScript type predicate), dus het versmalt types niet uit
> zichzelf; gebruik het voor validatie/vertakking in plaats van compile-time versmalling.

### Voordelen

- Behandelt `null` en `undefined` als `true` bij controles op leegte.
- Beschouwt strings die alleen uit witruimte bestaan als leeg door eerst te trimmen voordat de lengte wordt
  gecontroleerd.
- Ondersteunt gangbare containertypen (arrays, `Map`, `Set`) en gewone objecten zonder eigen enumerable properties.
- Voorkomt het meetellen van geërfde properties door `hasOwnProperty`-controles te gebruiken.
- Geeft een eenvoudig booleaans resultaat (`true`/`false`) terug dat geschikt is voor guards en validatie.

## Gebruik

### Syntax

Functie:

- `isEmpty(value)`

Parameters:

- `value`: De waarde die op leegte moet worden gecontroleerd.

### Lokale functie-import

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.isEmpty(value)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>Het bestand is op 6 February 2026 at 16:19:53 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>