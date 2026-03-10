# isSymbol

## Beskrywing

`isSymbol` bepaal of 'n gegewe waarde van tipe `symbol` is, en gee `true` vir simbole en `false` andersins terug.

### Gebruikscenario

Valideer dat 'n `unknown`-waarde 'n `symbol` is voordat dit as 'n unieke identifiseerder, 'n register-sleutel, of 'n
berekende eienskapsleutel in objekte en kaarte gebruik word.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `isSymbol` om `unknown` na `symbol` te vernou voordat simboolverwante funksies aangeroep word of dit as 'n
> berekende eienskapsleutel gebruik word.

### Voordele

- Bied 'n eenvoudige, betroubare looptydkontrole vir die JavaScript `symbol` primitiewe tipe.
- Help om `unknown`-waardes te vernou voordat simboolspesifieke API's gebruik word of dit as sleutels gestoor word.
- Vermy vals positiewe deur `typeof` te gebruik, wat die kanonieke manier is om `symbol`-waardes op te spoor.

## Gebruik

### Sintaksis

Funksie:

- `isSymbol(value)`

Parameters:

- `value`: Die waarde wat nagegaan moet word.

### Plaaslike funksie-invoer

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // invoer is hier 'n simbool
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.isSymbol(value)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>Hierdie lêer is op 30 January 2026 at 14:25:48 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>