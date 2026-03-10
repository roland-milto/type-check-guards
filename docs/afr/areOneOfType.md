# areOneOfType

## Beskrywing

`areOneOfType` kontroleer of alle elemente in ’n nie-leë skikking een van die gespesifiseerde runtime-tipes is.

### Gebruikscenario

Valideer inkomende data (bv. ontlede JSON) waar ’n veld ’n nie-leë skikking moet wees waarvan die items beperk is tot ’n
bekende stel primitiewe tipes; gee `false` terug wanneer die skikking leeg is of enige ontoegelate tipe bevat.

> **Wenk vir TypeScript-gebruikers:**
>
> Hierdie funksie gee ’n boolean terug en vernou nie die skikking-elementtipes tydens kompileertyd nie; gebruik dit as
> ’n runtime-valideringsstap voor verdere verwerking.

### Voordele

- Verseker dat elke element in ’n skikking ooreenstem met ten minste een toegelate runtime-tipe, en gee slegs `true`
  terug wanneer die hele skikking slaag.
- Verwerp ongeldige insette vroeg: gee `false` terug wanneer `array` of `types` leeg is of nie ’n gevulde skikking is
  nie.
- Nuttig vir die validering van gemengde-tipe versamelings (bv. getalle en stringe) met ’n enkele oproep na
  `areOneOfType`.

## Gebruik

### Sintaksis

Funksie:

- `areOneOfType(array, types)`

Parameters:

- `array`: ’n Skikking van elemente om teen die verskafte tipes te verifieer.
- `types`: ’n Skikking van stringe wat die datatipes verteenwoordig om teen te kontroleer.

### Plaaslike funksie-invoer

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.areOneOfType(array, types)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>Hierdie lêer is op 31 January 2026 at 23:35:58 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>