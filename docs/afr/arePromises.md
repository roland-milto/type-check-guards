# arePromises

## Beskrywing

`arePromises` bepaal of alle elemente in 'n skikking `Promise`-instansies is.

### Gebruikscenario

Valideer dat 'n dinamies opgeboude of ekstern verskafde lys slegs beloftes bevat voordat jy dit saamvoeg (bv. met
`Promise.all`).

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `arePromises` om `unknown[]` te valideer voordat jy `Promise.all` of ander belofte-alleen bewerkings aanroep;
> dit gee `false` terug vir leë skikkings.

### Voordele

- Verseker dat elke element 'n `Promise` is voordat jy voortgaan met belofte-spesifieke logika.
- Gee `false` terug vir nie-gevulde skikkings, wat dubbelsinnige resultate vir leë insette voorkom.
- Nuttig as 'n runtime-beskerming wanneer jy met `unknown[]` uit eksterne bronne werk.

## Gebruik

### Sintaksis

Funksie:

- `arePromises(array)`

Parameters:

- `array`: Die skikking om na te gaan vir `Promise`-instansies.

### Plaaslike funksie-invoer

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values is 'n skikking van Promise-instansies tydens uitvoering
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.arePromises(array)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>Hierdie lêer is op 30 January 2026 at 23:47:24 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>