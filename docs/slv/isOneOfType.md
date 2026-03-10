# isOneOfType

## Opis

`isOneOfType` določi, ali se dani `value` ujema vsaj z enim od podanih nizov tipov; vrne `true`, če najde katerokoli
ujemanje, sicer pa `false`.

### Primer uporabe

Validirajte ohlapno tipizirane ali zunanje podatke (npr. razčlenjen JSON, parametre poizvedbe) tako, da pred nadaljnjo
logiko dovolite več sprejemljivih tipov v izvajalnem času (kot sta `number` ali `string`).

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `isOneOfType`, ko želite preverjanje v izvajalnem času, da se vrednost ujema s katerimkoli od več dovoljenih
> tipov; vrne `true`, če se ujema vsaj en tip, sicer `false`.

### Prednosti

- Preveri vrednost glede na več dovoljenih tipov v enem klicu in vrne `true` ob prvem ujemanju.
- Deluje z vnosi tipa `unknown`, zato je uporaben na mejah izvajalnega časa (npr. zunanji podatki, uporabniški vnos).
- Zagotavlja preprost logični rezultat (`true`/`false`), ki se dobro kombinira s pogojno logiko in zgodnjimi vrnitvami.

## Uporaba

### Skladnja

Funkcija:

- `isOneOfType(value, types)`

Parametri:

- `value`: Vrednost, ki jo je treba preveriti glede na navedene tipe.
- `types`: Polje nizov tipov, ki predstavljajo možne tipe vrednosti.

### Lokalni uvoz funkcije

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input je objekt med izvajanjem
}

console.log(isOneOfType(3, ["number", "string"])); // true
console.log(isOneOfType("hello", ["number", "boolean"])); // false

```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.isOneOfType(value, types)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>Datoteka je bila ustvarjena 6 February 2026 at 13:54:12 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>