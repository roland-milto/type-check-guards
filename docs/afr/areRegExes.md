# areRegExes

## Beskrywing

`areRegExes` kontroleer of ’n waarde ’n gevulde skikking is wat slegs `RegExp`-objekte bevat.

### Gebruikscenario

Valideer dat ’n konfigurasie-opsie (bv. ’n lys van allow/deny-patrone) ’n nie-leë skikking van gereelde uitdrukkings is
voordat dit vir passing gebruik word.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `areRegExes` om `unknown` te vernou na `RegExp[]` voordat jy patrone iterer of saamstel.

### Voordele

- Verseker dat ’n waarde ’n nie-leë skikking is waar elke element ’n `RegExp`-instansie is.
- Bied ’n eenvoudige booleaanse wag (`true`/`false`) vir die validering van gebruikersinvoer of konfigurasie.
- Help om looptydfoute te voorkom wanneer latere kode aanvaar dat alle items gereelde-uitdrukking-bewerkings ondersteun.

## Gebruik

### Sintaksis

Funksie:

- `areRegExes(array)`

Parameters:

- `array`: Die waarde wat nagegaan moet word.

### Plaaslike funksie-invoer

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // patterns is hier 'n skikking van RegExp
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.areRegExes(array)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>Hierdie lêer is op 30 January 2026 at 23:16:45 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>