# isUndefined

## Περιγραφή

Ελέγχει αν μια δεδομένη τιμή είναι `undefined`.

### Περίπτωση χρήσης

Χρησιμοποιήστε το `isUndefined` για να προστατεύσετε προαιρετικές εισόδους, να ανιχνεύσετε ιδιότητες που λείπουν ή να
διαφοροποιήσετε μεταξύ «δεν δόθηκε» (`undefined`) και «ρητά κενό» (`null`).

> **Σημείωση για χρήστες TypeScript:**
>
> Χρησιμοποιήστε το `isUndefined` όταν χρειάζεται συγκεκριμένα να ανιχνεύσετε `undefined` (όχι `null`). Είναι ασφαλές
> επειδή βασίζεται στο `typeof value === "undefined"`.

### Πλεονεκτήματα

- Παρέχει έναν σαφή, ρητό έλεγχο για `undefined` χρησιμοποιώντας `typeof`, αποφεύγοντας οριακές περιπτώσεις με μη
  δηλωμένες μεταβλητές.
- Επιστρέφει ένα απλό boolean αποτέλεσμα (`true`/`false`) κατάλληλο για guards, διακλαδώσεις και λογική επικύρωσης.
- Βοηθά να διακρίνεται το `undefined` από άλλες «κενές» τιμές όπως `null`, `0`, `""` ή `NaN`.

## Χρήση

### Σύνταξη

Συνάρτηση:

- `isUndefined(value)`

Παράμετροι:

- `value`: Η τιμή που θα ελεγχθεί.

### Τοπική εισαγωγή συνάρτησης

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // ὁ x ἐνταῦθα ἐστὶν ἀόριστος
} else {
  // ὁ x ἐνταῦθα οὐκ ἐστὶν ἀόριστος
}

const a = isUndefined(undefined); // ἀληθές
const b = isUndefined(null);      // ψεῦδος
```

### Καθολική εισαγωγή αντικειμένου

Για εισαγωγή των συναρτήσεων ως καθολικών μεθόδων αντικειμένου χρησιμοποιήστε:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Η ακόλουθη μέθοδος θα είναι διαθέσιμη καθολικά:

- `Type.isUndefined(value)`

## Ανάλυση συναρτήσεων

Εδώ τεκμηριώνεται μια πινακοποιημένη ανάλυση της εξόδου που προκύπτει όταν δίνονται διαφορετικές παράμετροι στις
συναρτήσεις: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>Το αρχείο δημιουργήθηκε στις 30 January 2026 at 14:02:32 (UTC) με τη χρήση του *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** από τον/την *
*[Roland Milto](https://roland-milto.de/)**.</small>