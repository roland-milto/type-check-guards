# isBigInt

## Kirjeldus

`isBigInt` kontrollib, kas antud väärtus on tüüpi `bigint`, tagastades BigInt primitiivide korral `true` ja muul juhul
`false`.

### Kasutusjuht

Valideeri ja kitsenda tüübitutest allikatest (nt JSON-i parsimine, kasutaja sisend, välised API-d) pärinevaid väärtusi
enne BigInt-spetsiifiliste arvutuste tegemist või nende salvestamist ainult BigInt-i väljadele.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `isBigInt`, et kitsendada `unknown` tüübiks `bigint` enne BigInt-aritmeetika tegemist (nt `+`, `*`), mis nõuab
> BigInt-operande.

### Eelised

- Pakub lihtsa ja usaldusväärse käitusaja kontrolli `bigint` primitiivtüübi jaoks.
- Aitab kitsendada `unknown` väärtusi enne ainult BigInt-ile mõeldud toimingute tegemist.
- Väldib valepositiivseid: tavalised arvud, stringid ja muud tüübid tagastavad `false`.

## Kasutus

### Süntaks

Funktsioon:

- `isBigInt(value)`

Parameetrid:

- `value`: Kontrollitav väärtus.

### Funktsiooni kohalik import

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // tõene
console.log(isBigInt(10));  // väär
console.log(isBigInt("10")); // väär
```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.isBigInt(value)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>Fail loodi 31 January 2026 at 23:31:39 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>