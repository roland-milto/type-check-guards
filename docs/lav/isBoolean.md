# isBoolean

## Apraksts

Nosaka, vai dotā vērtība ir `boolean`.

### Lietošanas gadījums

Validēt ārējus vai netipizētus datus (piem., vides mainīgos, JSON slodzes, vaicājuma parametrus), lai nodrošinātu, ka
vērtība ir `boolean`, pirms to izmantot nosacījumu loģikā.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `isBoolean`, lai sašaurinātu `unknown` uz `boolean` pirms boolean operāciju piemērošanas.

### Priekšrocības

- Vienkārša un ātra izpildlaika pārbaude, izmantojot `typeof`.
- Palīdz validēt nezināmu ievadi pirms loģikas, kas paredzēta tieši boolean vērtībām.
- Atgriež paredzamu `boolean` rezultātu (`true`/`false`).

## Lietošana

### Sintakse

Funkcija:

- `isBoolean(value)`

Parametri:

- `value`: Pārbaudāmā vērtība.

### Lokāls funkcijas imports

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // input šeit ir būla vērtība
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.isBoolean(value)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>Fails tika izveidots 30 January 2026 at 14:36:59 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>