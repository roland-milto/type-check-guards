# isHexadecimal

## Skildring

`isHexadecimal` sjekkar om ein gitt verdi er ein heksadesimal strengliteral med obligatorisk `0x`/`0X`-prefiks.

### Brukstilfelle

Bruk `isHexadecimal` til å validere konfigurasjonsverdiar, felt i API-nyttelast eller CLI-argument som må oppgjevast som
heksadesimale strengliteralar (t.d. ID-ar, maskar eller adresser) og ikkje må innehalde blankteikn rundt.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `isHexadecimal` når du treng å validere brukarinnput eller serialiserte data som ein streng heksadesimal
> literalstreng (inkludert `0x`/`0X`-prefikset) før du parsar eller konverterer han.

### Fordelar

- Validerer at ein verdi er ein streng og samsvarar med eit strengt heksadesimalt literalformat (krev `0x`/`0X`
  -prefiks).
- Avviser strengar med innleiande eller etterfølgjande blankteikn, noko som hjelper å unngå utilsikta godkjenning av
  polstra inndata.
- Støttar valfritt fortegn og er ikkje skilje mellom store og små bokstavar for prefiks og siffer, og returnerer `true`/
  `false` på ein føreseieleg måte.

## Bruk

### Syntaks

Funksjon:

- `isHexadecimal(value)`

Parameter:

- `value`: Verdien som skal sjekkast.

### Lokal funksjonsimport

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // sann
isHexadecimal("-0Xff"); // sann
isHexadecimal("1A2B"); // usann (manglar prefiks)
isHexadecimal(" 0x1A2B"); // usann (innleiande blankteikn)
isHexadecimal(0x1a2b); // usann (ikkje ein streng)
```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.isHexadecimal(value)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>Fila vart generert 31 January 2026 at 22:59:53 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>