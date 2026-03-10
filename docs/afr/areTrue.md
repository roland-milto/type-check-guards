# areTrue

## Beskrywing

Kontroleer of ’n nie-leë skikking slegs die booleaanse `true`-waardes bevat.

### Gebruikscenario

Gebruik `areTrue` om te valideer dat ’n stel voorwaardes of kenmerk-vlae almal geaktiveer is (alle waardes is `true`)
voordat jy voortgaan, terwyl leë of misvormde insette as nie bevredig (`false`) behandel word.

> **Wenk vir TypeScript-gebruikers:**
>
> `areTrue` gee `false` terug vir ’n leë skikking en vir skikkings wat enige waarde bevat wat nie streng `true` is nie.

### Voordele

- Gee `true` slegs terug wanneer elke element streng `true` is en die skikking nie leeg is nie.
- Misluk vinnig: gee `false` terug sodra ’n nie-`true` waarde gevind word.
- Verwerp ongeldige insette (nie-skikkings of leë skikkings) deur `false` terug te gee.

## Gebruik

### Sintaksis

Funksie:

- `areTrue(array)`

Parameters:

- `array`: Die skikking om na te gaan vir alle `true`-waardes.

### Plaaslike funksie-invoer

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.areTrue(array)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>Hierdie lêer is op 30 January 2026 at 13:50:23 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>