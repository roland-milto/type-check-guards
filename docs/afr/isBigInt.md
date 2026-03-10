# isBigInt

## Beskrywing

`isBigInt` kontroleer of 'n gegewe waarde van tipe `bigint` is, en gee `true` terug vir BigInt-primitiewe en andersins
`false`.

### Gebruikscenario

Valideer en vernou waardes wat van ongetipe bronne af kom (bv. JSON-ontleding, gebruikersinvoer, eksterne API's) voordat
BigInt-spesifieke berekeninge uitgevoer word of dit in slegs-BigInt-velde gestoor word.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `isBigInt` om `unknown` na `bigint` te vernou voordat BigInt-rekenkunde gedoen word (bv. `+`, `*`) wat
> BigInt-operande vereis.

### Voordele

- Bied 'n eenvoudige, betroubare runtime-kontrole vir die `bigint` primitiewe tipe.
- Help om `unknown`-waardes te vernou voordat slegs-BigInt-bewerkings uitgevoer word.
- Vermy vals positiewe: gewone getalle, stringe en ander tipes gee `false` terug.

## Gebruik

### Sintaksis

Funksie:

- `isBigInt(value)`

Parameters:

- `value`: Die waarde om na te gaan.

### Plaaslike funksie-invoer

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // waar
console.log(isBigInt(10));  // vals
console.log(isBigInt("10")); // vals

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.isBigInt(value)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>Hierdie lêer is op 31 January 2026 at 23:31:04 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>