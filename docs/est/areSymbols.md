# areSymbols

## Kirjeldus

Kontrollib, kas sisend on täidetud massiiv, mille elemendid on kõik sümbolid, tagastades `true` või `false`.

### Kasutusjuht

Valideeri, et konfiguratsiooniväli (nt unikaalsete võtmete loend, mis on esitatud sümbolitena) on mittetühi massiiv, mis
sisaldab ainult sümboleid, enne kui kasutad seda API-des, mis nõuavad `symbol[]`.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `areSymbols`, et valideerida tundmatu sisend enne, kui käsitled seda kui `symbol[]`; see tagastab `false`
> mittemassiivide ja tühjade massiivide korral.

### Eelised

- Tagastab `true` ainult siis, kui sisend on mittetühi massiiv ja iga element on sümbol.
- Väldib valepositiivseid tulemusi, lükates tagasi mittemassiivid ja tühjad massiivid sisemise täidetud-massiivi
  kontrolli kaudu.
- Kasulik käitusaja tüübiturvana, et valideerida ainult sümbolitest koosnevaid loendeid enne edasist töötlemist.

## Kasutus

### Süntaks

Funktsioon:

- `areSymbols(array)`

Parameetrid:

- `array`: Massiiv, mida kontrollitakse sümbolielementide suhtes.

### Funktsiooni kohalik import

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a on käitusajal ainult sümbolitest koosnev massiiv
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.areSymbols(array)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>Fail loodi 30 January 2026 at 14:21:25 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>