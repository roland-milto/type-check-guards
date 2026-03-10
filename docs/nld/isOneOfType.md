# isOneOfType

## Beschrijving

`isOneOfType` bepaalt of een gegeven `value` overeenkomt met ten minste één van de meegegeven type-strings, en
retourneert `true` als er een overeenkomst is gevonden en anders `false`.

### Use case

Valideer los getypeerde of externe data (bijv. geparseerde JSON, queryparameters) door meerdere acceptabele
runtime-typen (zoals `number` of `string`) toe te staan voordat je verdergaat met aanvullende logica.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `isOneOfType` wanneer je een runtime-controle wilt dat een waarde overeenkomt met een van meerdere toegestane
> typen; het retourneert `true` als ten minste één type overeenkomt, anders `false`.

### Voordelen

- Controleert een waarde tegen meerdere toegestane typen in één aanroep en retourneert `true` bij de eerste
  overeenkomst.
- Werkt met `unknown`-invoer, waardoor het nuttig is bij runtime-grenzen (bijv. externe data, gebruikersinvoer).
- Het levert een eenvoudig booleaans resultaat (`true`/`false`) dat goed samengaat met conditionele logica en vroege
  returns.

## Gebruik

### Syntax

Functie:

- `isOneOfType(value, types)`

Parameters:

- `value`: De waarde die gecontroleerd moet worden tegen de opgegeven typen.
- `types`: Een array met type-strings die de mogelijke typen van de waarde vertegenwoordigen.

### Lokale functie-import

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input is tijdens runtime een object
}

console.log(isOneOfType(3, ["number", "string"])); // waar
console.log(isOneOfType("hello", ["number", "boolean"])); // onwaar

```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.isOneOfType(value, types)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>Het bestand is op 6 February 2026 at 13:53:26 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>