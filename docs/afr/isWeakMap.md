# isWeakMap

## Beskrywing

Bepaal of ’n gegewe `value` ’n `WeakMap`-instansie is.

### Gebruikscenario

Gebruik `isWeakMap` wanneer jy ’n `unknown` waarde aanvaar (bv. vanaf ’n openbare API, inpropstelsel, of dinamiese
konfigurasie) en moet verifieer dat dit ’n `WeakMap` is voordat jy `WeakMap`-spesifieke gedrag gebruik.

> **Wenk vir TypeScript-gebruikers:**
>
> `isWeakMap` voer ’n `instanceof WeakMap`-kontrole uit; dit is ’n looptydwag wat slegs `true` teruggee vir werklike
`WeakMap`-instansies.

### Voordele

- Eenvoudige looptydkontrole om te bepaal of ’n waarde ’n `WeakMap` is.
- Help om misbruik van API’s wat ’n `WeakMap` vereis te voorkom deur `true`/`false` terug te gee in plaas daarvan om ’n
  fout te gooi.
- Werk met `unknown`-insette, wat dit gerieflik maak by modulegrense (bv. ontleding, eksterne data, of ongetipeerde
  kode).

## Gebruik

### Sintaksis

Funksie:

- `isWeakMap(value)`

Parameters:

- `value`: Die waarde om te kontroleer.

### Plaaslike funksie-invoer

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a is 'n WeakMap tydens uitvoering
}

console.log(isWeakMap(a)); // waar
console.log(isWeakMap(b)); // vals
```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.isWeakMap(value)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>Hierdie lêer is op 30 January 2026 at 13:24:02 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>