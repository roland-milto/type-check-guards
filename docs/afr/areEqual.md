# areEqual

## Beskrywing

`areEqual` kontroleer of alle elemente in 'n skikking gelyk is aan 'n gegewe verwagte waarde, en gee `true` terug slegs
vir nie-leë skikkings waar elke item ooreenstem.

### Gebruikscenario

Valideer dat 'n lys slegs 'n enkele toegelate waarde bevat (bv. alle statusvlae is `true`, alle rolle is `"admin"`, of
alle numeriese inskrywings is gelyk aan 'n vereiste konstante) terwyl leë invoer as ongeldig (`false`) behandel word.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `areEqual` wanneer jy 'n streng alles-items-kontrole nodig het; dit gee `false` terug vir leë skikkings en vir
> enige nie-skikking of nie-gevulde invoer.

### Voordele

- Gee `true` terug slegs wanneer elke element met die verwagte waarde ooreenstem; anders gee dit `false` terug.
- Misluk vinnig: hou op kontroleer sodra 'n nie-ooreenstemmende element gevind word.
- Beskerm teen ongeldige invoer deur `false` terug te gee wanneer die invoer nie 'n gevulde skikking is nie.

## Gebruik

### Sintaksis

Funksie:

- `areEqual(value, expected)`

Parameters:

- `value`: Die skikking wat nagegaan moet word.
- `expected`: Die element waarmee elke skikking-item vergelyk moet word.

### Plaaslike funksie-invoer

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.areEqual(value, expected)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>Hierdie lêer is op 31 January 2026 at 23:49:37 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>