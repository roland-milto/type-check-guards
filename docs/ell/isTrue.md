# isTrue

## Περιγραφή

Το `isTrue` καθορίζει αν μια δεδομένη τιμή είναι αυστηρά ίση με `true`.

### Περίπτωση χρήσης

Χρησιμοποίησε το `isTrue` για να επικυρώνεις flags, feature toggles ή τιμές ρυθμίσεων όπου πρέπει να γίνεται αποδεκτό
μόνο το literal `true` και όλα τα άλλα να αντιμετωπίζονται ως `false`.

> **Σημείωση για χρήστες TypeScript:**
>
> Χρησιμοποίησε το `isTrue` όταν χρειάζεται να αποδέχεσαι μόνο το boolean literal `true`, όχι απλώς truthy τιμές.

### Πλεονεκτήματα

- Παρέχει αυστηρό έλεγχο για το boolean literal `true` (χωρίς εξαναγκασμό τύπου).
- Βοηθά να διακρίνεται το `true` από truthy τιμές όπως `1`, `"true"` ή `{}`.
- Απλή, προβλέψιμη συμπεριφορά κατάλληλη για guards και pipelines επικύρωσης.

## Χρήση

### Σύνταξη

Συνάρτηση:

- `isTrue(value)`

Παράμετροι:

- `value`: Η τιμή προς έλεγχο.

### Τοπική εισαγωγή συνάρτησης

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // ἀληθές
const b = isTrue(1);         // ψεῦδος
const c = isTrue("true");   // ψεῦδος

if (isTrue(a)) {
  // ὁ a ἐνθάδε ἀληθής ἐστι
}
```

### Καθολική εισαγωγή αντικειμένου

Για εισαγωγή των συναρτήσεων ως καθολικών μεθόδων αντικειμένου χρησιμοποιήστε:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Η ακόλουθη μέθοδος θα είναι διαθέσιμη καθολικά:

- `Type.isTrue(value)`

## Ανάλυση συναρτήσεων

Εδώ τεκμηριώνεται μια πινακοποιημένη ανάλυση της εξόδου που προκύπτει όταν δίνονται διαφορετικές παράμετροι στις
συναρτήσεις: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>Το αρχείο δημιουργήθηκε στις 30 January 2026 at 13:42:07 (UTC) με τη χρήση του *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** από τον/την *
*[Roland Milto](https://roland-milto.de/)**.</small>