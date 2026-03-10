# isBinary

## Kirjeldus

`isBinary` määrab, kas väärtus on binaarstring (valikuliselt `0b`/`0B` prefiksiga), ja tagastab `true` või `false`.

### Kasutusjuht

Valideeri kasutaja sisestatud stringe (nt vormiväljad, CLI argumendid, konfiguratsiooniväärtused), et tagada, et need
sisaldavad ainult binaarnumbreid, valikuliselt `0b`/`0B` prefiksiga, enne edasist töötlemist.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `isBinary` tüübiturvana enne stringi parsimist või teisendamist `BigInt`/`Number`-iks, et vältida vigast
> sisendit.

### Eelised

- Aktsepteerib binaarstringe nii `0b`/`0B` prefiksiga kui ka ilma.
- Lükkab tagasi tühjad stringid ning stringid, millel on alguses/lõpus juht- või lõputühikud (ASCII ≤ 32).
- Tagastab `true`/`false` ilma erindit viskamata, muutes selle ohutuks tundmatute sisendite korral.

## Kasutus

### Süntaks

Funktsioon:

- `isBinary(value)`

Parameetrid:

- `value`: Kontrollitav väärtus.

### Funktsiooni kohalik import

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // tõene
const b = isBinary("1010");   // tõene
const c = isBinary("0b1020"); // väär
const d = isBinary(0b1010);     // väär

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.isBinary(value)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>Fail loodi 31 January 2026 at 23:09:40 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>