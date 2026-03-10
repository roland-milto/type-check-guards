# areNullOrUndefined

## Περιγραφή

Ελέγχει αν όλα τα στοιχεία στη δοθείσα συστοιχία είναι `null` ή `undefined`.

### Περίπτωση χρήσης

Επικυρώστε ότι μια λίστα προαιρετικών πεδίων δεν περιέχει πραγματικές τιμές (μόνο `null`/`undefined`) πριν αποφασίσετε
να παραλείψετε την επεξεργασία ή να εμφανίσετε μια κατάσταση «δεν δόθηκαν τιμές».

> **Σημείωση για χρήστες TypeScript:**
>
> Χρησιμοποιήστε το `areNullOrUndefined` όταν χρειάζεται να επαληθεύσετε ότι μια συστοιχία περιέχει μόνο ελλείπουσες
> τιμές (`null`/`undefined`). Σημειώστε ότι επιστρέφει `false` για κενή συστοιχία.

### Πλεονεκτήματα

- Επιστρέφει `true` μόνο όταν κάθε στοιχείο είναι `null` ή `undefined`.
- Επιστρέφει `false` για κενές συστοιχίες, βοηθώντας να διακρίνεται το «δεν υπάρχουν δεδομένα» από το «λείπουν όλες οι
  τιμές».
- Λειτουργεί με `unknown[]`, καθιστώντας το ασφαλές για χρήση πριν από τον περιορισμό τύπων.

## Χρήση

### Σύνταξη

Συνάρτηση:

- `areNullOrUndefined(array)`

Παράμετροι:

- `array`: Η συστοιχία προς έλεγχο.

### Τοπική εισαγωγή συνάρτησης

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === αληθές

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === ψευδές

const empty = areNullOrUndefined([]);
// empty === ψευδές

```

### Καθολική εισαγωγή αντικειμένου

Για εισαγωγή των συναρτήσεων ως καθολικών μεθόδων αντικειμένου χρησιμοποιήστε:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Η ακόλουθη μέθοδος θα είναι διαθέσιμη καθολικά:

- `Type.areNullOrUndefined(array)`

## Ανάλυση συναρτήσεων

Εδώ τεκμηριώνεται μια πινακοποιημένη ανάλυση της εξόδου που προκύπτει όταν δίνονται διαφορετικές παράμετροι στις
συναρτήσεις: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>Το αρχείο δημιουργήθηκε στις 31 January 2026 at 00:29:34 (UTC) με τη χρήση του *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** από τον/την *
*[Roland Milto](https://roland-milto.de/)**.</small>