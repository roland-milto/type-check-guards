# isHexadecimal

## Përshkrim

`isHexadecimal` kontrollon nëse një vlerë e dhënë është një literal vargu heksadecimal me prefiks të detyrueshëm `0x`/
`0X`.

### Rast përdorimi

Përdor `isHexadecimal` për të vërtetuar vlerat e konfigurimit, fushat e ngarkesës së API-së, ose argumentet e CLI-së që
duhet të jepen si literale vargu heksadecimal (p.sh., ID, maska, ose adresa) dhe nuk duhet të përmbajnë hapësira bosh
rrethuese.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `isHexadecimal` kur duhet të vërtetosh hyrjen e përdoruesit ose të dhënat e serializuara si një varg strikt
> literal heksadecimal (duke përfshirë prefiksin `0x`/`0X`) përpara se ta analizosh ose ta konvertosh.

### Përparësi

- Vërteton që një vlerë është varg dhe përputhet me një format strikt të literalit heksadecimal (kërkon prefiksin `0x`/
  `0X`).
- Refuzon vargjet me hapësira bosh në fillim ose në fund, duke ndihmuar të shmanget pranimi aksidental i hyrjes së
  mbushur.
- Mbështet shenjën opsionale dhe nuk është i ndjeshëm ndaj shkronjave të mëdha/vogla për prefiksin dhe shifrat, duke
  kthyer `true`/`false` në mënyrë të parashikueshme.

## Përdorim

### Sintaksë

Funksion:

- `isHexadecimal(value)`

Parametra:

- `value`: Vlera që do të kontrollohet.

### Import lokal i funksionit

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // e vërtetë
isHexadecimal("-0Xff"); // e vërtetë
isHexadecimal("1A2B"); // e rreme (mungon prefiksi)
isHexadecimal(" 0x1A2B"); // e rreme (hapësirë e bardhë në fillim)
isHexadecimal(0x1a2b); // e rreme (nuk është varg)

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.isHexadecimal(value)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>Skedari u gjenerua më 31 January 2026 at 23:00:58 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>