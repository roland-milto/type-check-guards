# areNumbers

## Beskrywing

`areNumbers` kontroleer of 'n waarde 'n nie-leë skikking is waar alle elemente getalle is.

### Gebruikscenario

Valideer gebruiker- of API-verskafte data om te verseker dit is 'n nie-leë skikking van getalle voordat totale,
gemiddeldes of ander numeriese aggregasies bereken word.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `areNumbers` om onbekende skikkings te valideer voordat numeriese berekeninge uitgevoer word; dit gee `false`
> terug vir leë skikkings en vir skikkings wat enige nie-getalwaarde bevat.

### Voordele

- Gee `true` slegs terug wanneer die invoer 'n nie-leë skikking is en elke element 'n getal is.
- Voorkom vals positiewe deur leë skikkings en nie-skikking-insette te verwerp.
- Nuttig as 'n wag voor numeriese bewerkings (bv. optel, gemiddeld bereken) om looptydfoute te vermy.

## Gebruik

### Sintaksis

Funksie:

- `areNumbers(array)`

Parameters:

- `array`: Die skikking wat nagegaan moet word vir getal-elemente.

### Plaaslike funksie-invoer

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.areNumbers(array)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>Hierdie lêer is op 30 January 2026 at 13:03:24 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>