# areBooleans

## Beskrywing

`areBooleans` kontroleer of 'n gegewe nie-leë skikking slegs boolean-waardes bevat, en gee `true` terug as dit wel doen
en `false` andersins.

### Gebruikscenario

Valideer gebruiker-verskafte of eksterne data (bv. JSON-ladings, navraagparameters, konfigurasieskikkings) om te
verseker dat 'n nie-leë lys slegs booleans bevat voordat boolean-logika toegepas word of dit na API's gestuur word wat
`boolean[]` verwag.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `areBooleans` om `unknown[]` te valideer voordat jy dit as `boolean[]` hanteer; dit gee `false` terug vir leë
> skikkings, so hanteer daardie geval uitdruklik as 'n leë lys toegelaat behoort te word.

### Voordele

- Gee `true` terug slegs wanneer elke element 'n boolean is en die invoer 'n nie-leë skikking is.
- Voorkom vals positiewe deur leë skikkings te verwerp (gee `false` terug).
- Werk goed as 'n runtime-beskerming voor boolean-alleen bewerkings (bv. `every`, `some`, logiese reduksies).

## Gebruik

### Sintaksis

Funksie:

- `areBooleans(array)`

Parameters:

- `array`: Die skikking wat nagegaan moet word vir boolean-elemente.

### Plaaslike funksie-invoer

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.areBooleans(array)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>Hierdie lêer is op 30 January 2026 at 14:39:08 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>