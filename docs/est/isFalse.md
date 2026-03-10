# isFalse

## Kirjeldus

`isFalse` kontrollib, kas antud väärtus on rangelt võrdne tõeväärtuse literaaliga `false`.

### Kasutusjuht

Valideeri tundmatuid andmeid (nt JSON-ist, päringuparameetritest või kasutaja sisendist), kus ainult selgesõnalist
tõeväärtust `false` tuleks käsitleda kehtiva lipuna ning kõik muu tuleks tagasi lükata.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `isFalse`, kui pead aktsepteerima ainult literaali `false` ja tagasi lükkama kõik teised väärväärtused; see
> tagastab `true` ainult juhul, kui `value === false`.

### Eelised

- Pakub range kontrolli tõeväärtuse literaali `false` jaoks ilma tüübiteisenduseta.
- Aitab eristada `false` teistest väärväärtustest nagu `0`, `""`, `null` ja `undefined`.
- Parandab loetavust, muutes kavatsuse selgesõnaliseks tundmatu sisendi valideerimisel.

## Kasutus

### Süntaks

Funktsioon:

- `isFalse(value)`

Parameetrid:

- `value`: Kontrollitav väärtus.

### Funktsiooni kohalik import

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // sisend on siin täpselt false
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.isFalse(value)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>Fail loodi 31 January 2026 at 16:21:26 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>