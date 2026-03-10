# isError

## Kirjeldus

Kontrollib, kas antud `value` on `Error`-i eksemplar.

### Kasutusjuht

Kasuta `isError`-it siis, kui saad `unknown` väärtuse (näiteks `catch`-plokist, tagasikutsefunktsioonist või välisest
teegist) ja pead turvaliselt kindlaks tegema, kas see on `Error`, enne kui loed `message`, `name` või `stack`.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `isError`-it `unknown` väärtuste (nt `catch`-ist) kaitseks enne, kui käsitled neid kui `Error`-it.

### Eelised

- Pakub lihtsat käitusaja kontrolli, kas väärtus on `Error`-i eksemplar.
- Aitab kitsendada tundmatuid sisendeid enne `Error`-i omadustele nagu `message` või `stack` ligipääsu.
- Vähendab käitusaja erandite riski väärtuste käsitlemisel `catch`-ist, välistest API-dest või tüübistamata allikatest.

## Kasutus

### Süntaks

Funktsioon:

- `isError(value)`

Parameetrid:

- `value`: Väärtus, mida kontrollida `Error`-tüübi vastu.

### Funktsiooni kohalik import

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.isError(value)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [isError](../_analysis/isError.md)

<br>

---

<small>Fail loodi 6 February 2026 at 12:45:16 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>