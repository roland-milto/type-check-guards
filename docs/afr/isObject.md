# isObject

## Beskrywing

Bepaal of 'n gegewe `value` 'n `object` is (met uitsluiting van `null`).

### Gebruikscenario

Gebruik `isObject` om onbekende insette (bv. geparste JSON, API-antwoorde, gebeurtenisvragte) te valideer voordat jy
eienskappe benader, en verseker dat die waarde 'n objek is en nie `null` nie.

> **Wenk vir TypeScript-gebruikers:**
>
> `isObject` is 'n runtime-guard wat 'n boolean teruggee; dit vernou nie na 'n spesifieke objekvorm nie. Kombineer dit
> met bykomende kontroles (bv. eienskapbestaan) wanneer jy sterker tipering benodig.

### Voordele

- Gee `true` terug slegs vir nie-`null`-waardes waarvan `typeof` `"object"` is.
- Voorkom die algemene JavaScript-strik waar `null` andersins as 'n objek behandel sou word.
- Werk vir gewone objekte en ingeboude objekinstansies (bv. `Date`, `RegExp`).
- Eenvoudige, vinnige runtime-kontrole geskik vir defensiewe programmering en invoervalidering.

## Gebruik

### Sintaksis

Funksie:

- `isObject(value)`

Parameters:

- `value`: Die waarde wat nagegaan moet word of dit 'n `object` is.

### Plaaslike funksie-invoer

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // invoer is 'n nie-nul objek tydens uitvoering
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.isObject(value)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [isObject](../_analysis/isObject.md)

<br>

---

<small>Hierdie lêer is op 31 January 2026 at 00:17:30 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>