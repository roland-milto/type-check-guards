# isFilledArray

## Beskrywing

Kontroleer of `value` ’n skikking met ten minste een element is, en gee `true` of `false` terug.

### Gebruikscenario

Gebruik `isFilledArray` om inkomende data (bv. API-payloads, vormwaardes, konfigurasie) te valideer voordat jy iterer,
die eerste element benader, of logika toepas wat ten minste een item vereis.

> **Wenk vir TypeScript-gebruikers:**
>
> `isFilledArray` is ’n runtime-guard wat ’n booleaan teruggee; dit vernou nie elementtipes verder as om te bevestig dat
> die skikking nie-leeg is nie.

### Voordele

- Eenvoudige, vinnige kontrole vir ’n nie-leë skikking met `Array.isArray` en ’n lengte-kontrole.
- Help om runtime-foute te vermy wanneer kode aanneem ’n skikking het ten minste een element.
- Duidelike booleaanse resultaat: gee `true` vir nie-leë skikkings en `false` andersins.

## Gebruik

### Sintaksis

Funksie:

- `isFilledArray(value)`

Parameters:

- `value`: Die waarde om te kontroleer of dit ’n nie-leë skikking is.

### Plaaslike funksie-invoer

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // invoer is 'n nie-leë skikking tydens uitvoering
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.isFilledArray(value)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>Hierdie lêer is op 6 February 2026 at 11:46:12 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>