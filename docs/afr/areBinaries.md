# areBinaries

## Beskrywing

Kontroleer of die verskafde waarde 'n nie-leë skikking van geldige binêre stringe is en gee slegs `true` terug as alle
items die validering slaag.

### Gebruikscenario

Gebruik `areBinaries` wanneer jy 'n onbekende lys ontvang (bv. vanaf JSON, vorms of API's) en moet verseker dat dit 'n
nie-leë skikking van binêre stringe is voordat jy dit ontleed of verwerk.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `areBinaries` om onbekende invoer te valideer voordat binêre stringe na getalle/BigInts omgeskakel word; dit
> verseker dat die skikking nie leeg is nie en dat elke element 'n geldige binêre string is.

### Voordele

- Valideer dat 'n waarde 'n nie-leë skikking is waar elke element 'n geldige binêre string is.
- Gee 'n eenvoudige booleaanse resultaat (`true`/`false`) wat geskik is vir wagte, vroeë terugkeer en invoervalidering.
- Voorkom latere ontledingsfoute deur skikkings te verwerp wat enige nie-binêre inskrywing bevat.

## Gebruik

### Sintaksis

Funksie:

- `areBinaries(array)`

Parameters:

- `array`: Die waarde wat nagegaan moet word.

### Plaaslike funksie-invoer

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // waar
console.log(areBinaries(b)); // vals
console.log(areBinaries([])); // vals
```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.areBinaries(array)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>Hierdie lêer is op 31 January 2026 at 23:13:45 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>