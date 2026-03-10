# areNullOrUndefined

## Beskrywing

Kontroleer of alle elemente in die gegewe skikking `null` of `undefined` is.

### Gebruikscenario

Valideer dat 'n lys van opsionele velde geen werklike waardes bevat nie (slegs `null`/`undefined`) voordat jy besluit om
verwerking oor te slaan of om 'n “geen waardes verskaf” toestand te wys.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `areNullOrUndefined` wanneer jy moet verifieer dat 'n skikking slegs ontbrekende waardes (`null`/`undefined`)
> bevat. Let daarop dat dit `false` teruggee vir 'n leë skikking.

### Voordele

- Gee `true` slegs terug wanneer elke element `null` of `undefined` is.
- Gee `false` terug vir leë skikkings, wat help om “geen data” van “alle ontbrekende waardes” te onderskei.
- Werk met `unknown[]`, wat dit veilig maak om te gebruik voordat tipes vernou word.

## Gebruik

### Sintaksis

Funksie:

- `areNullOrUndefined(array)`

Parameters:

- `array`: Die skikking om na te gaan.

### Plaaslike funksie-invoer

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === waar

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === vals

const empty = areNullOrUndefined([]);
// empty === vals
```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.areNullOrUndefined(array)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>Hierdie lêer is op 31 January 2026 at 00:29:00 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>