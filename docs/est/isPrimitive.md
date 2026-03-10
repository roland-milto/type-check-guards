# isPrimitive

## Kirjeldus

`isPrimitive` määrab, kas antud väärtus on primitiiv (`null`, `undefined`, `boolean`, `number`, `string`, `bigint`,
`symbol`).

### Kasutusjuht

Valideeri sisendeid käitusajal (nt API payload’i väljad, konfiguratsiooniväärtused või kasutaja esitatud andmed), et
tagada väärtuse primitiivsus enne serialiseerimist, logimist või ainult primitiividele mõeldud toimingute rakendamist.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `isPrimitive`-i `unknown` sisendite kaitsmiseks enne, kui käsitled neid objektide või funktsioonidena; see
> tagastab primitiivide korral `true` ja objektide ning funktsioonide korral `false`.

### Eelised

- Kiire, eraldusvaba kontroll selle kohta, kas väärtus on JavaScripti primitiiv.
- Käsitleb `null`-i korrektselt primitiivina (kuigi `typeof null` on `"object"`).
- Aitab kitsendada `unknown` väärtusi enne ainult objektidele mõeldud toimingute tegemist.

## Kasutus

### Süntaks

Funktsioon:

- `isPrimitive(value)`

Parameetrid:

- `value`: Väärtus, mille puhul kontrollida, kas see on primitiivset tüüpi.

### Funktsiooni kohalik import

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.isPrimitive(value)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>Fail loodi 30 January 2026 at 23:56:00 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>