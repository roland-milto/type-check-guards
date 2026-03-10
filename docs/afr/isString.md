# isString

## Beskrywing

`isString` bepaal of 'n gegewe waarde 'n string is.

### Gebruikscenario

Valideer gebruikersinvoer, API-payload-velde, of konfigurasiewaardes tydens runtime om te verseker dat 'n waarde 'n
string is voordat string-bewerkings toegepas word (bv. snoei, opdeel, hoof-/kleinletter-omskakeling).

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `isString` om `unknown` of losweg getipeerde waardes te valideer voordat string-metodes aangeroep word; dit
> gee slegs `true` terug wanneer `typeof value === "string"`.

### Voordele

- Eenvoudige en vinnige kontrole met `typeof`.
- Gee 'n voorspelbare booleaanse resultaat: `true` vir stringe, anders `false`.
- Werk vir beide leë en nie-leë stringe.
- Nuttig as 'n liggewig runtime-beskerming voordat string-spesifieke bewerkings uitgevoer word.

## Gebruik

### Sintaksis

Funksie:

- `isString(value)`

Parameters:

- `value`: Die waarde wat getoets moet word vir string-tipe.

### Plaaslike funksie-invoer

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // invoer is hier 'n string
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.isString(value)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [isString](../_analysis/isString.md)

<br>

---

<small>Hierdie lêer is op 30 January 2026 at 13:13:06 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>