# areOfType

## Περιγραφή

Ελέγχει αν όλα τα στοιχεία στο δοθέν `array` είναι του καθορισμένου `type`.

### Περίπτωση χρήσης

Χρησιμοποίησε το `areOfType` για να επικυρώσεις άγνωστη είσοδο (π.χ. parsed JSON, API payloads, είσοδο χρήστη) πριν
εκτελέσεις λειτουργίες που εξαρτώνται από τον τύπο σε κάθε στοιχείο ενός πίνακα.

> **Σημείωση για χρήστες TypeScript:**
>
> Επειδή το `areOfType` είναι type guard, το TypeScript περιορίζει τον πίνακα μέσα σε ένα μπλοκ `if (areOfType(...)) {}`
> σε `Array<DataTypeOf<T>>`.

### Πλεονεκτήματα

- Παρέχει έναν TypeScript type guard: όταν επιστρέφει `true`, η είσοδος περιορίζεται σε `Array<DataTypeOf<T>>`.
- Επικυρώνει κάθε στοιχείο ως προς τον ζητούμενο runtime τύπο, αποτρέποντας πίνακες με μικτούς τύπους από το να
  περάσουν.
- Αποτυγχάνει άμεσα: επιστρέφει `false` μόλις βρεθεί ένα στοιχείο που δεν ταιριάζει.
- Απορρίπτει μη-πίνακες και κενούς πίνακες εκ σχεδιασμού (εξαρτάται από το `isFilledArray`).

## Χρήση

### Σύνταξη

Συνάρτηση:

- `areOfType(array, type)`

Παράμετροι:

- `array`: Ο πίνακας προς έλεγχο.
- `type`: Ο τύπος με τον οποίο θα ελεγχθεί κάθε στοιχείο στον πίνακα.

### Τοπική εισαγωγή συνάρτησης

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // ὁ πίναξ values νῦν ἐστὶν number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // ψεῦδος

```

### Καθολική εισαγωγή αντικειμένου

Για εισαγωγή των συναρτήσεων ως καθολικών μεθόδων αντικειμένου χρησιμοποιήστε:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Η ακόλουθη μέθοδος θα είναι διαθέσιμη καθολικά:

- `Type.areOfType(array, type)`

## Ανάλυση συναρτήσεων

Εδώ τεκμηριώνεται μια πινακοποιημένη ανάλυση της εξόδου που προκύπτει όταν δίνονται διαφορετικές παράμετροι στις
συναρτήσεις: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>Το αρχείο δημιουργήθηκε στις 30 January 2026 at 17:09:18 (UTC) με τη χρήση του *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** από τον/την *
*[Roland Milto](https://roland-milto.de/)**.</small>