# isPromise

## Kirjeldus

Määrab, kas antud väärtus on `Promise`.

### Kasutusjuht

Kasuta `isPromise`-i tundmatute sisendite valideerimiseks enne, kui käsitled neid kui `Promise`-i, näiteks pluginatest,
dünaamilistest importidest või lõdvalt tüübistatud API-dest tagastatud väärtuste käsitlemisel.

> **Märkus TypeScripti kasutajatele:**
>
> `isPromise` kontrollib `instanceof Promise` abil, seega tagastab see `true` ainult päris `Promise`-i eksemplaride
> korral (mitte üldiste thenable’ite puhul).

### Eelised

- Pakub lihtsa käitusaja kontrolli, kas väärtus on `Promise`.
- Aitab kaitsta koodiharusid, mis nõuavad päris `Promise`-i eksemplari, tagastades etteaimatavalt `true` või `false`.
- Väldib valepositiivseid tulemusi “thenable” objektide puhul (nt `{ then() {} }`), nõudes tegelikku `Promise`-i
  eksemplari.

## Kasutus

### Süntaks

Funktsioon:

- `isPromise(value)`

Parameetrid:

- `value`: Kontrollitav väärtus.

### Funktsiooni kohalik import

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // tõene
console.log(isPromise(b)); // väär
console.log(isPromise(123)); // väär
console.log(isPromise(null)); // väär

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.isPromise(value)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>Fail loodi 30 January 2026 at 23:52:41 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>