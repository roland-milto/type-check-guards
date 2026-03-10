# isHexadecimal

## Beskrywing

`isHexadecimal` kontroleer of ’n gegewe waarde ’n heksadesimale string-letterlike is met ’n verpligte `0x`/`0X`
-voorvoegsel.

### Gebruikscenario

Gebruik `isHexadecimal` om konfigurasiewaardes, API-ladingvelde, of CLI-argumente te valideer wat as heksadesimale
string-letterlikes verskaf moet word (bv. ID’s, maskers, of adresse) en nie omliggende witspasie mag bevat nie.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `isHexadecimal` wanneer jy gebruikersinvoer of geserialiseerde data as ’n streng heksadesimale letterlike
> string (insluitend die `0x`/`0X`-voorvoegsel) moet valideer voordat jy dit ontleed of omskakel.

### Voordele

- Valideer dat ’n waarde ’n string is en ooreenstem met ’n streng heksadesimale letterlike formaat (vereis die `0x`/`0X`
  -voorvoegsel).
- Verwerp stringe met voor- of agteraanstaande witspasie, wat help om toevallige aanvaarding van opgevulde invoer te
  vermy.
- Ondersteun ’n opsionele teken en is hoofletter-ongevoelig vir die voorvoegsel en syfers, en gee voorspelbaar `true`/
  `false` terug.

## Gebruik

### Sintaksis

Funksie:

- `isHexadecimal(value)`

Parameters:

- `value`: Die waarde wat nagegaan moet word.

### Plaaslike funksie-invoer

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // waar
isHexadecimal("-0Xff"); // waar
isHexadecimal("1A2B"); // vals (voorvoegsel ontbreek)
isHexadecimal(" 0x1A2B"); // vals (voorloopspasie)
isHexadecimal(0x1a2b); // vals (nie 'n string nie)
```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.isHexadecimal(value)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>Hierdie lêer is op 31 January 2026 at 22:57:39 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>