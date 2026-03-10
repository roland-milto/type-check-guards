# isDecimal

## Beskrywing

`isDecimal` kontroleer of 'n waarde 'n desimale stringvoorstelling is sonder voor-/agterste witspasie en met 'n geldige
desimale formaat.

### Gebruikscenario

Valideer vormvelde, API-ladings, of konfigurasiewaardes wat as 'n desimale string (opsioneel met teken) voorsien moet
word sonder enige omliggende witspasie, voordat dit ontleed of gestoor word.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `isDecimal` om gebruikersinvoer te valideer voordat jy dit omskakel (bv. met `Number(value)`), veral wanneer
> witspasie verwerp moet word.

### Voordele

- Valideer streng dat die invoer 'n string is en ooreenstem met 'n desimale-letterlike patroon.
- Verwerp voor- en agterste witspasie (insluitend beheerkarakters) om dubbelsinnige ontleding te vermy.
- Vinnige voorafkontroles (tipekontrole en eerste/laaste karakter) voordat die regex uitgevoer word.
- Gee 'n eenvoudige booleaanse resultaat (`true`/`false`) wat geskik is vir wagte en invoervalidering.

## Gebruik

### Sintaksis

Funksie:

- `isDecimal(value)`

Parameters:

- `value`: Die waarde om na te gaan vir 'n desimale stringformaat.

### Plaaslike funksie-invoer

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v is hier 'n string (tydens looptyd bekragtig)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.isDecimal(value)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>Hierdie lêer is op 31 January 2026 at 15:51:13 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>