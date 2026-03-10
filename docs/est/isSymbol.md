# isSymbol

## Kirjeldus

`isSymbol` määrab, kas antud väärtus on tüüpi `symbol`, tagastades sümbolite korral `true` ja muudel juhtudel `false`.

### Kasutusjuht

Valideeri, et `unknown` väärtus on `symbol`, enne kui kasutad seda unikaalse identifikaatorina, registrivõtmena või
arvutatud omaduse võtmena objektides ja map'ides.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `isSymbol`, et kitsendada `unknown` tüübiks `symbol` enne sümboliga seotud funktsioonide kutsumist või selle
> kasutamist arvutatud omaduse võtmena.

### Eelised

- Pakub lihtsat ja usaldusväärset käitusaja kontrolli JavaScripti primitiivtüübi `symbol` jaoks.
- Aitab kitsendada `unknown` väärtusi enne sümbolipõhiste API-de kasutamist või nende salvestamist võtmetena.
- Väldib valepositiivseid tulemusi, kasutades `typeof`, mis on kanooniline viis `symbol` väärtuste tuvastamiseks.

## Kasutus

### Süntaks

Funktsioon:

- `isSymbol(value)`

Parameetrid:

- `value`: Kontrollitav väärtus.

### Funktsiooni kohalik import

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input on siin sümbol
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.isSymbol(value)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>Fail loodi 30 January 2026 at 14:26:33 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>