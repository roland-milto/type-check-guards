# isOneOfType

## Apraksts

`isOneOfType` nosaka, vai dotā `value` atbilst vismaz vienai no nodrošinātajām tipu virknēm, atgriežot `true`, ja tiek
atrasta jebkāda atbilstība, un `false` pretējā gadījumā.

### Lietošanas gadījums

Validēt brīvi tipizētus vai ārējus datus (piem., parsētu JSON, vaicājuma parametrus), atļaujot vairākus pieņemamus
izpildlaika tipus (piemēram, `number` vai `string`) pirms turpināt ar tālāku loģiku.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `isOneOfType`, kad vēlaties izpildlaikā pārbaudīt, vai vērtība atbilst kādam no vairākiem atļautiem
> tipiem; tā atgriež `true`, ja atbilst vismaz viens tips, pretējā gadījumā `false`.

### Priekšrocības

- Pārbauda vērtību pret vairākiem atļautiem tipiem vienā izsaukumā, atgriežot `true` pie pirmās atbilstības.
- Darbojas ar `unknown` ievadēm, padarot to noderīgu izpildlaika robežās (piem., ārējie dati, lietotāja ievade).
- Nodrošina vienkāršu boole rezultātu (`true`/`false`), kas labi kombinējas ar nosacījumu loģiku un agrīniem
  atgriezieniem.

## Lietošana

### Sintakse

Funkcija:

- `isOneOfType(value, types)`

Parametri:

- `value`: Vērtība, kas jāpārbauda pret norādītajiem tipiem.
- `types`: Tipu virkņu masīvs, kas attēlo vērtības iespējamos tipus.

### Lokāls funkcijas imports

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input ir objekts izpildlaikā
}

console.log(isOneOfType(3, ["number", "string"])); // patiess
console.log(isOneOfType("hello", ["number", "boolean"])); // aplams

```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.isOneOfType(value, types)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>Fails tika izveidots 6 February 2026 at 13:53:01 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>