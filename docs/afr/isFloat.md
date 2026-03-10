# isFloat

## Beskrywing

`isFloat` bepaal of 'n gegewe `value` 'n eindige drywende-punt getal is (’n `number` wat nie ’n heelgetal is nie).

### Gebruikscenario

Valideer gebruiker-verskafte numeriese insette waar breukwaardes vereis word (bv. pryse, metings, tariewe) en verwerp
heelgetalle, `NaN` en oneindighede.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `isFloat` wanneer jy slegs eindige, nie-heelgetal numeriese insette moet aanvaar; dit verwerp heelgetalle en
> nie-eindige getalle.

### Voordele

- Gee `true` slegs vir eindige, nie-heelgetal getalle (sluit heelgetalle, `NaN`, `Infinity` en `-Infinity` uit).
- Werk met enige invoertipe (`unknown`) en vernou veilig deur `typeof value === "number"` te kontroleer.
- Gebruik ingeboude numeriese wagte (`Number.isInteger`, `Number.isFinite`) vir voorspelbare gedrag.

## Gebruik

### Sintaksis

Funksie:

- `isFloat(value)`

Parameters:

- `value`: Die waarde wat nagegaan moet word of dit 'n drywende-punt getal is.

### Plaaslike funksie-invoer

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // waarde is 'n getal tydens uitvoering; dit is eindig en nie 'n heelgetal nie
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.isFloat(value)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>Hierdie lêer is op 30 January 2026 at 14:49:08 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>