# areIndexesFound

## Beskrywing

`areIndexesFound` kontroleer of ’n waarde ’n nie-leë skikking is waarvan die elemente almal geldige indekse is, en gee
`true` terug as dit so is en andersins `false`.

### Gebruikscenario

Valideer gebruiker-verskafte of eksterne data (bv. ontlede JSON) wat veronderstel is om ’n lys indekse te wees voordat
dit gebruik word om skikkings te benader of te sny.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `areIndexesFound` om onbekende invoer te valideer voordat jy die elemente daarvan as skikkingindekse hanteer;
> dit gee `false` terug vir leë skikkings en vir skikkings wat nie-indeks-waardes bevat.

### Voordele

- Gee `true` slegs terug wanneer die invoer ’n gevulde skikking is en elke element ’n geldige indeks is.
- Misluk vinnig: gee `false` terug sodra ’n nie-indeks-element teëgekom word.
- Nuttig as ’n wag voor waardes as skikkingposisies of -verskuiwings gebruik word.

## Gebruik

### Sintaksis

Funksie:

- `areIndexesFound(array)`

Parameters:

- `array`: Die skikking wat nagegaan moet word vir indeks-nakoming.

### Plaaslike funksie-invoer

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // waar
console.log(areIndexesFound(b)); // vals
console.log(areIndexesFound(c)); // vals

if (areIndexesFound(a)) {
  // Hier word `a` bevestig as 'n gevulde skikking van indekse.
  const firstIndex = a[0];
  console.log(firstIndex);
}

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.areIndexesFound(array)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>Hierdie lêer is op 31 January 2026 at 00:40:55 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>