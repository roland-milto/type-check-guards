# isOctal

## Kirjeldus

Määrab, kas väärtus on kehtiv oktal-literaali string (nt `0o755`).

### Kasutusjuht

Valideeri kasutaja sisend või konfiguratsiooniväärtused, mis peavad olema esitatud oktal-literaali stringina (näiteks
faililubade režiimid nagu `0o644`), enne nende parsimist või teisendamist.

> **Märkus TypeScripti kasutajatele:**
>
> `isOctal` on tüübi kaitse (`value is string`). Pärast `true` tulemust kitsendab TypeScript kontrollitud muutuja
> tüübiks `string`.

### Eelised

- Pakub ranget tüübi kaitset: tagastab `true` ainult siis, kui sisend on string, mis vastab oktal-literaali vormingule.
- Lükkab tagasi tühjad stringid ning stringid, millel on alguses/lõpus tühik (ASCII kontroll-/tühik), vähendades
  juhuslikke vasteid.
- Toetab valikulist märki ning ei ole `0o`/`0O` prefiksi puhul tõstutundlik.
- On mitte-string sisendite suhtes leebe, tagastades erindi viskamise asemel `false`.

## Kasutus

### Süntaks

Funktsioon:

- `isOctal(value)`

Parameetrid:

- `value`: Kontrollitav väärtus.

### Funktsiooni kohalik import

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // tõene
console.log(isOctal(b)); // tõene
console.log(isOctal(c)); // väär
console.log(isOctal(d)); // väär

if (isOctal(a)) {
  // a on siin string
  const normalized = a.toLowerCase();
  console.log(normalized);
}

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.isOctal(value)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>Fail loodi 30 January 2026 at 14:45:06 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>