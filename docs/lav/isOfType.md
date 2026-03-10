# isOfType

## Apraksts

Nosaka, vai dotā `value` atbilst norādītai tipa virknei, primitīvajiem tipiem izmantojot `typeof`, bet sarežģītiem
tipiem — rezerves mehānismu.

### Lietošanas gadījums

Validēt un sašaurināt `unknown` ievades (piem., API atbildes, lietotāja ievadi, parsētu JSON), pārbaudot, vai vērtība ir
gaidītā tipa virkne, pirms veikt tipam specifiskas darbības.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `isOfType`, lai atzarotu pēc izpildlaika tipiem, strādājot ar `unknown` vērtībām; tā atgriež `true`/
`false` un `null` un `undefined` apstrādā eksplicīti.

### Priekšrocības

- Pārbauda primitīvos tipus, izmantojot tiešu `typeof`, lai nodrošinātu ātrumu un skaidrību.
- Pareizi apstrādā `null` un `undefined`, ko ar vienu pašu `typeof` nevar paredzētajā veidā atšķirt.
- Atbalsta sarežģītas vai pielāgotas tipu virknes, izmantojot rezerves salīdzinājumu ar `getTypeOf`.
- Atgriež vienkāršu būla rezultātu (`true`/`false`), kas piemērots sargiem un atzarošanai.

## Lietošana

### Sintakse

Funkcija:

- `isOfType(value, type)`

Parametri:

- `value`: Vērtība, ko pārbaudīt pret `type`.
- `type`: Tipa virknes reprezentācija, pret kuru veikt pārbaudi.

### Lokāls funkcijas imports

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input šeit ir skaitlis
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input šeit ir virkne
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.isOfType(value, type)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>Fails tika izveidots 30 January 2026 at 17:00:42 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>