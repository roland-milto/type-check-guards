# isHexadecimal

## Apraksts

`isHexadecimal` pārbauda, vai dotā vērtība ir heksadecimāla virknes literālis ar obligātu prefiksu `0x`/`0X`.

### Lietošanas gadījums

Izmantojiet `isHexadecimal`, lai validētu konfigurācijas vērtības, API noslodzes lauku vērtības vai CLI argumentus, kuri
jānorāda kā heksadecimālu virkņu literāļi (piem., ID, maskas vai adreses) un kuri nedrīkst saturēt apkārtējās atstarpes.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `isHexadecimal`, kad nepieciešams validēt lietotāja ievadi vai serializētus datus kā stingru heksadecimāla
> literāļa virkni (ieskaitot prefiksu `0x`/`0X`) pirms parsēšanas vai konvertēšanas.

### Priekšrocības

- Validē, ka vērtība ir virkne un atbilst stingram heksadecimāla literāļa formātam (nepieciešams prefikss `0x`/`0X`).
- Noraida virknes ar sākuma vai beigu atstarpēm, palīdzot izvairīties no nejaušas ar atstarpēm papildinātas ievades
  pieņemšanas.
- Atbalsta izvēles zīmi un nav reģistrjutīgs attiecībā uz prefiksu un cipariem, paredzami atgriežot `true`/`false`.

## Lietošana

### Sintakse

Funkcija:

- `isHexadecimal(value)`

Parametri:

- `value`: Pārbaudāmā vērtība.

### Lokāls funkcijas imports

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // patiess
isHexadecimal("-0Xff"); // patiess
isHexadecimal("1A2B"); // aplams (trūkst prefiksa)
isHexadecimal(" 0x1A2B"); // aplams (sākuma atstarpe)
isHexadecimal(0x1a2b); // aplams (nav virkne)
```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.isHexadecimal(value)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>Fails tika izveidots 31 January 2026 at 22:59:27 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>