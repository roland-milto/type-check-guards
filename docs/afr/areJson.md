# areJson

## Beskrywing

Kontroleer of alle elemente van 'n skikking JSON-strings is, en gee `true` slegs terug as die skikking gevul is en elke
item geldige JSON is; anders gee dit `false` terug.

### Gebruikscenario

Valideer inkomende data (bv. vanaf query params, omgewingsveranderlikes, of eksterne API's) waar jy 'n skikking van
JSON-geënkodeerde strings verwag en leë skikkings of enige nie-JSON-inskrywings wil verwerp.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `areJson` wanneer jy moet valideer dat 'n `unknown[]` slegs JSON-strings bevat voordat jy dit ontleed (bv. met
`JSON.parse`).

### Voordele

- Gee `true` slegs terug wanneer elke element 'n geldige JSON-string is; anders gee dit `false` terug.
- Misluk vinnig: hou op kontroleer sodra 'n nie-JSON-element gevind word.
- Verwerp leë skikkings by ontwerp en gee `false` terug vir ongevulde invoer.

## Gebruik

### Sintaksis

Funksie:

- `areJson(array)`

Parameters:

- `array`: Die skikking wat nagegaan moet word vir JSON-stringelemente.

### Plaaslike funksie-invoer

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // waar
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // vals
const empty = areJson([]); // vals

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.areJson(array)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [areJson](../_analysis/areJson.md)

<br>

---

<small>Hierdie lêer is op 30 January 2026 at 16:14:56 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>