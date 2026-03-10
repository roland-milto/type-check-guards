# areFinite

## Περιγραφή

Το `areFinite` ελέγχει αν μια τιμή είναι μη κενός πίνακας του οποίου τα στοιχεία είναι όλα πεπερασμένοι αριθμοί,
επιστρέφοντας `true` αν ισχύει και `false` διαφορετικά.

### Περίπτωση χρήσης

Επικύρωση πινάκων αριθμητικών εισόδων (π.χ. σειρές γραφημάτων, λίστες συντεταγμένων, δείγματα μετρήσεων) πριν από την
εκτέλεση υπολογισμών, διασφαλίζοντας ότι το αποτέλεσμα είναι `true` μόνο όταν όλες οι τιμές είναι πεπερασμένοι αριθμοί.

> **Σημείωση για χρήστες TypeScript:**
>
> Χρησιμοποίησε το `areFinite` όταν χρειάζεται να διασφαλίσεις ότι ένας πίνακας δεν είναι κενός και περιέχει μόνο
> πεπερασμένους αριθμούς· επιστρέφει `false` για κενoύς πίνακες και για πίνακες που περιέχουν `NaN` ή άπειρα.

### Πλεονεκτήματα

- Επιστρέφει `true` μόνο όταν η είσοδος είναι ένας μη κενός πίνακας και κάθε στοιχείο είναι πεπερασμένος αριθμός.
- Απορρίπτει `Infinity`, `-Infinity` και `NaN`, βασιζόμενο σε ελέγχους `isFinite` για κάθε στοιχείο.
- Παρέχει ένα απλό δυαδικό αποτέλεσμα (`true`/`false`) κατάλληλο για guards και ροές επικύρωσης.

## Χρήση

### Σύνταξη

Συνάρτηση:

- `areFinite(array)`

Παράμετροι:

- `array`: Ο πίνακας που θα ελεγχθεί ως προς το αν όλα τα στοιχεία του είναι πεπερασμένα.

### Τοπική εισαγωγή συνάρτησης

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // αληθές
console.log(areFinite(b)); // ψευδές
console.log(areFinite(c)); // ψευδές

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // μηδέν

```

### Καθολική εισαγωγή αντικειμένου

Για εισαγωγή των συναρτήσεων ως καθολικών μεθόδων αντικειμένου χρησιμοποιήστε:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Η ακόλουθη μέθοδος θα είναι διαθέσιμη καθολικά:

- `Type.areFinite(array)`

## Ανάλυση συναρτήσεων

Εδώ τεκμηριώνεται μια πινακοποιημένη ανάλυση της εξόδου που προκύπτει όταν δίνονται διαφορετικές παράμετροι στις
συναρτήσεις: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>Το αρχείο δημιουργήθηκε στις 30 January 2026 at 16:34:20 (UTC) με τη χρήση του *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** από τον/την *
*[Roland Milto](https://roland-milto.de/)**.</small>