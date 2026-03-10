# areSets

## Beskrywing

Kontroleer of 'n gegewe nie-leë skikking slegs `Set`-instansies bevat, en gee `true` terug indien wel en `false`
andersins.

### Gebruikscenario

Valideer dat 'n waarde (bv. uit gebruikersinvoer, JSON-ontleding, of eksterne API's) 'n nie-leë skikking van `Set`
-objekte is voordat elke stel verwerk word.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `areSets` om onbekende invoer te valideer voordat jy iterasie doen en `Set`-API's (bv. `.size`, `.has`,
`.add`) op elke element aanroep.

### Voordele

- Gee `true` slegs terug wanneer die invoer 'n nie-leë skikking is en elke element 'n `Set`-instansie is.
- Voorkom vals positiewe vir leë skikkings deur `false` terug te gee wanneer die skikking geen elemente het nie.
- Nuttig as 'n runtime-beskerming voordat `Set`-spesifieke bewerkings op elke element uitgevoer word.

## Gebruik

### Sintaksis

Funksie:

- `areSets(array)`

Parameters:

- `array`: Die skikking wat nagegaan moet word vir `Set`-instansies.

### Plaaslike funksie-invoer

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a is 'n skikking van Set-instansies tydens looptyd
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // vals
console.log(areSets(c)); // vals
```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.areSets(array)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [areSets](../_analysis/areSets.md)

<br>

---

<small>Hierdie lêer is op 30 January 2026 at 23:12:22 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>