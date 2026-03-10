# isOfType

## Beschrijving

Bepaalt of een gegeven `value` overeenkomt met een opgegeven type-string, met `typeof` voor primitieve typen en een
terugval voor complexe typen.

### Use case

Valideer en verfijn `unknown`-invoer (bijv. API-responses, gebruikersinvoer, geparseerde JSON) door te controleren of
een waarde van een verwachte type-string is voordat je type-specifieke bewerkingen uitvoert.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `isOfType` om te vertakken op runtime-typen wanneer je met `unknown`-waarden werkt; het retourneert `true`/
`false` en behandelt `null` en `undefined` expliciet.

### Voordelen

- Controleert primitieve typen via directe `typeof` voor snelheid en duidelijkheid.
- Gaat correct om met `null` en `undefined`, die `typeof` alleen niet zoals bedoeld kan onderscheiden.
- Ondersteunt complexe of aangepaste type-strings via een terugvalvergelijking met `getTypeOf`.
- Geeft een eenvoudig booleaans resultaat (`true`/`false`) terug dat geschikt is voor guards en vertakkingen.

## Gebruik

### Syntax

Functie:

- `isOfType(value, type)`

Parameters:

- `value`: De waarde die getest moet worden tegen het `type`.
- `type`: De stringrepresentatie van het type waartegen gecontroleerd moet worden.

### Lokale functie-import

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input is hier een getal
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input is hier een tekenreeks
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.isOfType(value, type)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>Het bestand is op 30 January 2026 at 17:05:21 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>