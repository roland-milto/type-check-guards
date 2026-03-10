# areBooleans

## Kirjeldus

`areBooleans` kontrollib, kas antud mittetühi massiiv sisaldab ainult tõeväärtusi, tagastades `true`, kui sisaldab, ja
`false` muul juhul.

### Kasutusjuht

Valideeri kasutaja esitatud või välised andmed (nt JSON-päringukehad, päringuparameetrid, konfiguratsioonimassiivid), et
tagada, et mittetühi loend sisaldab enne tõeväärtusloogika rakendamist või `boolean[]` eeldavatele API-dele edastamist
ainult tõeväärtusi.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `areBooleans`, et valideerida `unknown[]` enne, kui käsitled seda kui `boolean[]`; see tagastab tühjade
> massiivide korral `false`, seega käsitle seda juhtumit eraldi, kui tühi loend peaks olema lubatud.

### Eelised

- Tagastab `true` ainult siis, kui iga element on tõeväärtus ja sisend on mittetühi massiiv.
- Väldib valepositiivseid tulemusi, lükates tagasi tühjad massiivid (tagastab `false`).
- Sobib hästi käitusaja kontrollina enne ainult tõeväärtustega toiminguid (nt `every`, `some`, loogilised
  reduktsioonid).

## Kasutus

### Süntaks

Funktsioon:

- `areBooleans(array)`

Parameetrid:

- `array`: Massiiv, mida kontrollitakse tõeväärtuslike elementide suhtes.

### Funktsiooni kohalik import

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.areBooleans(array)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>Fail loodi 30 January 2026 at 14:40:01 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>