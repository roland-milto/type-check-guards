# isNumber

## Kirjeldus

`isNumber` kontrollib, kas väärtus on lõplik, mitte-`NaN` number.

### Kasutusjuht

Valideeri numbriline sisend ebausaldusväärsetest allikatest (vormid, päringuparameetrid, JSON-payloadid) enne arvutusi,
salvestamist või vahemikukontrolle, tagades, et läbi lähevad (`true`) ainult lõplikud numbrid ning kõik muu tagastab
`false`.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `isNumber`-it `unknown` väärtuste valideerimiseks enne aritmeetikat; see lükkab tagasi `NaN`, `Infinity` ja
`-Infinity`.

### Eelised

- Tagastab `true` ainult päris JavaScripti numbrite puhul (tüübi kontroll ning `NaN`-i ja lõpmatuse välistamine).
- Hoiab ära levinud valideerimisvead, kus `NaN`, `Infinity` või `-Infinity` kogemata numbritena läbi lähevad.
- Sobib hästi käitusaja kaitseks tundmatu sisendi korral (nt JSON, kasutaja sisend, välised API-d).
- Lihtne, kiire ja kõrvalmõjudeta.

## Kasutus

### Süntaks

Funktsioon:

- `isNumber(value)`

Parameetrid:

- `value`: Kontrollitav väärtus.

### Funktsiooni kohalik import

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input on kehtiv lõplik arv
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.isNumber(value)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>Fail loodi 30 January 2026 at 13:08:47 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>