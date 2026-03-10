# areNull

## Beskrywing

Kontroleer of alle elemente in die gegewe `array` `null` is.

### Gebruikscenario

Valideer dat ’n datastelkolom, API-veldlys, of plekhouer-skikking slegs `null`-waardes bevat voordat logika toegepas
word wat aanvaar dat alle inskrywings doelbewus leeg is.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `areNull` wanneer jy ’n streng kontrole nodig het dat ’n inset ’n nie-leë skikking is en elke element presies
`null` is (nie `undefined` nie, nie valsige waardes nie).

### Voordele

- Gee `true` slegs terug wanneer elke element `null` is, wat dit ’n streng “almal stem ooreen”-beskerming maak.
- Verwerp nie-skikkings en leë skikkings deur `false` terug te gee, wat toevallige waaragtige resultate op ongeldige
  insette voorkom.
- Werk goed as ’n voorwaarde-kontrole voordat data verwerk word wat heeltemal `null` moet wees.

## Gebruik

### Sintaksis

Funksie:

- `areNull(array)`

Parameters:

- `array`: Die insetskikking om vir `null`-elemente na te gaan.

### Plaaslike funksie-invoer

```ts
import { areNull } from "@type-check/guards";

const a = [null, null];
const b = [null, 1, null];

const allNullA = areNull(a); // waar
const allNullB = areNull(b); // vals

const notAnArray = areNull(123 as unknown as unknown[]); // vals
const empty = areNull([]); // vals

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.areNull(array)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [areNull](../_analysis/areNull.md)

<br>

---

<small>Hierdie lêer is op 31 January 2026 at 15:42:19 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>