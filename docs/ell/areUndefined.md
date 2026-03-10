# areUndefined

## Περιγραφή

Το `areUndefined` ελέγχει αν κάθε στοιχείο σε έναν παρεχόμενο πίνακα είναι `undefined`.

### Περίπτωση χρήσης

Επικυρώστε ότι μια λίστα προαιρετικών αποτελεσμάτων δεν περιέχει πραγματικές τιμές (μόνο `undefined`), π.χ. μετά από
αντιστοίχιση αναζητήσεων όπου οι ελλείπουσες εγγραφές αναπαρίστανται ως `undefined`, και θέλετε να επιβεβαιώσετε ότι
όλες οι αναζητήσεις απέτυχαν.

> **Σημείωση για χρήστες TypeScript:**
>
> Χρησιμοποιήστε το `areUndefined` όταν χρειάζεται να επιβεβαιώσετε ότι ένα `unknown[]` περιέχει μόνο τιμές `undefined`·
> επιστρέφει `false` για κενούς πίνακες και για μη-πίνακες/μη έγκυρες εισόδους λόγω του εσωτερικού ελέγχου
`isFilledArray`.

### Πλεονεκτήματα

- Επιστρέφει `false` για μη-πίνακες και για κενούς πίνακες, απαιτώντας έναν γεμάτο πίνακα μέσω του `isFilledArray`.
- Διασφαλίζει ότι κάθε στοιχείο είναι `undefined`, όχι μόνο μερικά, καθιστώντας την πρόθεση ρητή.
- Χρήσιμο ως κατηγόρημα τύπου guard κατά την επικύρωση άγνωστων συλλογών εισόδου.

## Χρήση

### Σύνταξη

Συνάρτηση:

- `areUndefined(array)`

Παράμετροι:

- `array`: Ο πίνακας που θα ελεγχθεί για στοιχεία `undefined`.

### Τοπική εισαγωγή συνάρτησης

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // ἀληθές
const r2 = areUndefined(b); // ψεῦδος
const r3 = areUndefined(c); // ψεῦδος

// Σημείωσις: ἀποδίδωσι ψεῦδος ἐπὶ κενῶν πινάκων
const r4 = areUndefined([]); // ψεῦδος

```

### Καθολική εισαγωγή αντικειμένου

Για εισαγωγή των συναρτήσεων ως καθολικών μεθόδων αντικειμένου χρησιμοποιήστε:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Η ακόλουθη μέθοδος θα είναι διαθέσιμη καθολικά:

- `Type.areUndefined(array)`

## Ανάλυση συναρτήσεων

Εδώ τεκμηριώνεται μια πινακοποιημένη ανάλυση της εξόδου που προκύπτει όταν δίνονται διαφορετικές παράμετροι στις
συναρτήσεις: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>Το αρχείο δημιουργήθηκε στις 30 January 2026 at 13:55:34 (UTC) με τη χρήση του *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** από τον/την *
*[Roland Milto](https://roland-milto.de/)**.</small>