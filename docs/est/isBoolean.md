# isBoolean

## Kirjeldus

Määrab, kas antud väärtus on `boolean`.

### Kasutusjuht

Valideeri väliseid või tüübistamata andmeid (nt keskkonnamuutujad, JSON-payload'id, päringuparameetrid), et tagada
väärtuse `boolean`-tüüp enne selle kasutamist tingimusloogikas.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `isBoolean`, et kitsendada `unknown` tüübiks `boolean` enne boole'i operatsioonide rakendamist.

### Eelised

- Lihtne ja kiire käitusaja kontroll `typeof` abil.
- Aitab valideerida tundmatut sisendit enne boole'ile omast loogikat.
- Tagastab etteaimatava `boolean`-tulemuse (`true`/`false`).

## Kasutus

### Süntaks

Funktsioon:

- `isBoolean(value)`

Parameetrid:

- `value`: Kontrollitav väärtus.

### Funktsiooni kohalik import

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // input on siin tõeväärtus
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.isBoolean(value)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>Fail loodi 30 January 2026 at 14:36:12 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>