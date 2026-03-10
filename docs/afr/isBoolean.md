# isBoolean

## Beskrywing

Bepaal of 'n gegewe waarde 'n `boolean` is.

### Gebruikscenario

Valideer eksterne of ongetipeerde data (bv. omgewingsveranderlikes, JSON-ladings, navraagparameters) om te verseker
dat 'n waarde 'n `boolean` is voordat dit in voorwaardelike logika gebruik word.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `isBoolean` om `unknown` te vernou na `boolean` voordat boole-bewerkings toegepas word.

### Voordele

- Eenvoudige en vinnige looptydkontrole met `typeof`.
- Help om onbekende invoer te valideer voordat boole-spesifieke logika toegepas word.
- Lewer 'n voorspelbare `boolean`-resultaat (`true`/`false`).

## Gebruik

### Sintaksis

Funksie:

- `isBoolean(value)`

Parameters:

- `value`: Die waarde wat nagegaan moet word.

### Plaaslike funksie-invoer

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // invoer is hier 'n boolean
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.isBoolean(value)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>Hierdie lêer is op 30 January 2026 at 14:35:33 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>