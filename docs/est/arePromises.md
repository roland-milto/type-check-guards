# arePromises

## Kirjeldus

`arePromises` määrab, kas kõik massiivi elemendid on `Promise`-i eksemplarid.

### Kasutusjuht

Valideeri, et dünaamiliselt koostatud või väliselt pakutud loend sisaldab ainult lubadusi enne nende koondamist (nt
`Promise.all`-iga).

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `arePromises`, et valideerida `unknown[]` enne `Promise.all` või teiste ainult lubadustele mõeldud
> operatsioonide kutsumist; see tagastab tühjade massiivide puhul `false`.

### Eelised

- Tagab, et iga element on `Promise` enne, kui jätkad lubadusepõhise loogikaga.
- Tagastab täitmata massiivide puhul `false`, vältides tühjade sisendite korral ebaselgeid tulemusi.
- Kasulik käitusaja kaitsemehhanismina, kui töötad välisallikatest pärit `unknown[]`-iga.

## Kasutus

### Süntaks

Funktsioon:

- `arePromises(array)`

Parameetrid:

- `array`: Massiiv, mida kontrollida `Promise`-i eksemplaride suhtes.

### Funktsiooni kohalik import

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values on käitusajal Promise'i eksemplaride massiiv
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.arePromises(array)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>Fail loodi 30 January 2026 at 23:48:05 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>