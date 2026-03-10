# isHexadecimal

## Kirjeldus

`isHexadecimal` kontrollib, kas antud väärtus on heksadetsimaalne stringiliteraal kohustusliku `0x`/`0X` prefiksiga.

### Kasutusjuht

Kasuta `isHexadecimal`, et valideerida konfiguratsiooniväärtusi, API päringu keha välju või CLI argumente, mis peavad
olema esitatud heksadetsimaalsete stringiliteraalidena (nt ID-d, maskid või aadressid) ning ei tohi sisaldada
ümbritsevaid tühikuid.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `isHexadecimal`, kui pead enne parsimist või teisendamist valideerima kasutaja sisendi või serialiseeritud
> andmed range heksadetsimaalse literaali stringina (sh `0x`/`0X` prefiks).

### Eelised

- Kontrollib, et väärtus on string ja vastab rangele heksadetsimaalse literaali vormingule (nõuab prefiksit `0x`/`0X`).
- Lükkab tagasi stringid, millel on alguses või lõpus tühikud, aidates vältida kogemata polsterdatud sisendi
  aktsepteerimist.
- Toetab valikulist märki ning ei ole tõstutundlik prefiksi ja numbrite suhtes, tagastades etteaimatavalt `true`/
  `false`.

## Kasutus

### Süntaks

Funktsioon:

- `isHexadecimal(value)`

Parameetrid:

- `value`: Kontrollitav väärtus.

### Funktsiooni kohalik import

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // true
isHexadecimal("-0Xff"); // true
isHexadecimal("1A2B"); // false (puuduv prefiks)
isHexadecimal(" 0x1A2B"); // false (alguses tühik)
isHexadecimal(0x1a2b); // false (pole string)

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.isHexadecimal(value)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>Fail loodi 31 January 2026 at 22:58:28 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>