# areSymbols

## Beskrywing

Kontroleer of 'n invoer 'n gevulde skikking is waarvan die elemente almal simbole is, en gee `true` of `false` terug.

### Gebruikscenario

Valideer dat 'n konfigurasieveld (bv. 'n lys unieke sleutels wat as simbole voorgestel word) 'n nie-leë skikking is wat
slegs simbole bevat voordat dit in API's gebruik word wat `symbol[]` vereis.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `areSymbols` om onbekende invoer te valideer voordat dit as `symbol[]` behandel word; dit gee `false` terug
> vir nie-skikkings en leë skikkings.

### Voordele

- Gee `true` slegs terug wanneer die invoer 'n nie-leë skikking is en elke element 'n simbool is.
- Voorkom vals positiewe deur nie-skikkings en leë skikkings te verwerp via die interne gevulde-skikking-kontrole.
- Nuttig as 'n runtime-tipewag vir die validering van slegs-simbool-lyste voor verdere verwerking.

## Gebruik

### Sintaksis

Funksie:

- `areSymbols(array)`

Parameters:

- `array`: Die skikking wat nagegaan moet word vir simbool-elemente.

### Plaaslike funksie-invoer

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a is 'n simbool-slegs skikking tydens uitvoering
  const first = a[0];
  console.log(typeof first); // "simbool"
}

console.log(areSymbols(b)); // vals
```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.areSymbols(array)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>Hierdie lêer is op 30 January 2026 at 14:20:38 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>