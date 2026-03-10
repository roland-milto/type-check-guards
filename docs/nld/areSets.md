# areSets

## Beschrijving

Controleert of een gegeven niet-lege array uitsluitend `Set`-instanties bevat, en retourneert `true` als dat zo is en
anders `false`.

### Use case

Valideer dat een waarde (bijv. uit gebruikersinvoer, JSON-parsing of externe API's) een niet-lege array van `Set`
-objecten is voordat je elke set verwerkt.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `areSets` om onbekende invoer te valideren voordat je erover itereert en `Set`-API's (bijv. `.size`, `.has`,
`.add`) op elk element aanroept.

### Voordelen

- Retourneert `true` alleen wanneer de invoer een niet-lege array is en elk element een `Set`-instantie is.
- Voorkomt fout-positieven voor lege arrays door `false` te retourneren wanneer de array geen elementen heeft.
- Handig als runtime-guard voordat je `Set`-specifieke bewerkingen op elk element uitvoert.

## Gebruik

### Syntax

Functie:

- `areSets(array)`

Parameters:

- `array`: De array die gecontroleerd moet worden op `Set`-instanties.

### Lokale functie-import

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a is tijdens runtime een array van Set-instanties
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // onwaar
console.log(areSets(c)); // onwaar
```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.areSets(array)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [areSets](../_analysis/areSets.md)

<br>

---

<small>Het bestand is op 30 January 2026 at 23:14:31 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>