# isValidDate

## Kirjeldus

`isValidDate` kontrollib, kas antud väärtus on kehtiv `Date`-objekt, ja tagastab `true` ainult päris, mittevigaste
kuupäevade korral.

### Kasutusjuht

Valideeri kasutaja sisendit või API andmeid, mis võivad sisaldada kuupäevi, tagades, et väärtus on päris `Date`-i
instants ja mitte vigane kuupäev, enne kuupäevaarvutuste, vormindamise või võrdluste tegemist.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `isValidDate` enne `Date`-i meetodite (nt `toISOString`, `getTime`) kutsumist väärtustel, mille tüüp on
`unknown`, et tagada nende kehtivus `Date`-objektidena.

### Eelised

- Tagab, et väärtus on `Date`-i instants, mitte lihtsalt kuupäeva-sarnane string või number.
- Lükkab tagasi vigased kuupäevad (nt `new Date("invalid")`), kontrollides `NaN`-i ajaväärtusi.
- Lihtne boole'i kaitse, mida on lihtne kasutada tingimuslausetes ja valideerimisahelates.
- Aitab vältida käitusaja vigu kuupäevameetodite kutsumisel, kontrollides sisendit enne.

## Kasutus

### Süntaks

Funktsioon:

- `isValidDate(value)`

Parameetrid:

- `value`: Kontrollitav väärtus.

### Funktsiooni kohalik import

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input on kehtiv Date'i eksemplar
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // väär
console.log(isValidDate("2025-12-22")); // väär

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.isValidDate(value)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>Fail loodi 30 January 2026 at 16:39:52 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>