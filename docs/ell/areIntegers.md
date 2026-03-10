# areIntegers

## Περιγραφή

Το `areIntegers` καθορίζει αν όλα τα στοιχεία σε έναν δεδομένο πίνακα είναι ακέραιοι, επιστρέφοντας `true` αν είναι και
`false` διαφορετικά.

### Περίπτωση χρήσης

Χρησιμοποίησε το `areIntegers` για να επικυρώσεις δεδομένα που παρέχονται από χρήστη ή από εξωτερικές πηγές (π.χ.,
παραμέτρους ερωτήματος, JSON payloads, γραμμές CSV) όταν η λογική σου απαιτεί μια γεμάτη λίστα ακέραιων τιμών όπως IDs,
μετρητές, offsets σελιδοποίησης ή δείκτες πινάκων.

> **Σημείωση για χρήστες TypeScript:**
>
> Χρησιμοποίησε το `areIntegers` ως έλεγχο (runtime guard) για εισόδους `unknown[]` πριν τις χειριστείς ως `number[]`
> που περιέχει μόνο ακέραιους. Αν επιστρέψει `false`, η είσοδος είτε δεν είναι γεμάτος πίνακας είτε περιέχει τουλάχιστον
> μία μη ακέραια τιμή.

### Πλεονεκτήματα

- Επιστρέφει `true` μόνο όταν κάθε στοιχείο είναι ακέραιος· αλλιώς επιστρέφει `false`.
- Βοηθά στην επικύρωση άγνωστης εισόδου πριν από την εκτέλεση λειτουργιών που δέχονται μόνο ακέραιους (π.χ.,
  δεικτοδότηση, μετρήσεις, IDs).
- Αποτυγχάνει γρήγορα: σταματά τον έλεγχο μόλις βρεθεί ένα μη ακέραιο στοιχείο.

## Χρήση

### Σύνταξη

Συνάρτηση:

- `areIntegers(array)`

Παράμετροι:

- `array`: Ο πίνακας που θα ελεγχθεί για ακέραια στοιχεία.

### Τοπική εισαγωγή συνάρτησης

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // ἀληθές
console.log(areIntegers(b)); // ἀληθές
console.log(areIntegers(c)); // ψεῦδος

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));
```

### Καθολική εισαγωγή αντικειμένου

Για εισαγωγή των συναρτήσεων ως καθολικών μεθόδων αντικειμένου χρησιμοποιήστε:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Η ακόλουθη μέθοδος θα είναι διαθέσιμη καθολικά:

- `Type.areIntegers(array)`

## Ανάλυση συναρτήσεων

Εδώ τεκμηριώνεται μια πινακοποιημένη ανάλυση της εξόδου που προκύπτει όταν δίνονται διαφορετικές παράμετροι στις
συναρτήσεις: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>Το αρχείο δημιουργήθηκε στις 31 January 2026 at 00:58:08 (UTC) με τη χρήση του *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** από τον/την *
*[Roland Milto](https://roland-milto.de/)**.</small>