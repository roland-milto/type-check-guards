# isError

## Apraksts

Pārbauda, vai dotā `value` ir `Error` instance.

### Lietošanas gadījums

Izmantojiet `isError`, kad saņemat `unknown` vērtību (piemēram, no `catch` bloka, atzvanes vai ārējas bibliotēkas) un
jums droši jānosaka, vai tā ir `Error`, pirms nolasāt `message`, `name` vai `stack`.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `isError`, lai aizsargātu `unknown` vērtības (piem., no `catch`) pirms tās apstrādes kā `Error`.

### Priekšrocības

- Nodrošina vienkāršu izpildlaika pārbaudi, vai vērtība ir `Error` instances.
- Palīdz sašaurināt nezināmas ievades pirms piekļuves `Error` īpašībām, piemēram, `message` vai `stack`.
- Samazina izpildlaika izņēmumu risku, apstrādājot vērtības no `catch`, ārējām API vai netipizētiem avotiem.

## Lietošana

### Sintakse

Funkcija:

- `isError(value)`

Parametri:

- `value`: Vērtība, kuru pārbaudīt pret `Error` tipu.

### Lokāls funkcijas imports

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

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.isError(value)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [isError](../_analysis/isError.md)

<br>

---

<small>Fails tika izveidots 6 February 2026 at 12:46:10 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>