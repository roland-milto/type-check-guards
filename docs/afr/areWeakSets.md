# areWeakSets

## Beskrywing

Kontroleer of 'n invoer 'n nie-leë skikking is waar elke element 'n `WeakSet` is, en gee slegs dan `true` terug.

### Gebruikscenario

Valideer looptyd-invoer (bv. vanaf API's, konfigurasie, of gebruiker-verskafte data) om te verseker jy het 'n nie-leë
lys van `WeakSet`-instansies voordat jy voortgaan met logika wat van `WeakSet`-gedrag afhang.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `areWeakSets` om onbekende invoer te valideer voordat jy dit as `WeakSet[]` hanteer. Dit gee `false` terug vir
> leë skikkings en nie-skikkings.

### Voordele

- Verseker dat elke element in die invoerskikking 'n `WeakSet` is.
- Gee `false` terug vir leë skikkings, wat toevallige “alles geldig”-resultate by ontbrekende data voorkom.
- Misluk veilig deur `false` terug te gee wanneer die invoer nie 'n gevulde skikking is nie (insluitend `null`).
- Nuttig as 'n wag voor die uitvoering van bewerkings wat `WeakSet`-instansies vereis.

## Gebruik

### Sintaksis

Funksie:

- `areWeakSets(array)`

Parameters:

- `array`: Die skikking wat nagegaan moet word vir `WeakSet`-objekte.

### Plaaslike funksie-invoer

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a is 'n nie-leë skikking van WeakSet-instansies
}

console.log(areWeakSets(a)); // waar
console.log(areWeakSets(b)); // vals
console.log(areWeakSets(c)); // vals
console.log(areWeakSets(null as unknown)); // vals

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.areWeakSets(array)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>Hierdie lêer is op 30 January 2026 at 14:07:26 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>