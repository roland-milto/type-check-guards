# isOctal

## Περιγραφή

Καθορίζει αν μια τιμή είναι έγκυρη συμβολοσειρά οκταδικού literal (π.χ. `0o755`).

### Περίπτωση χρήσης

Επικύρωση εισόδου χρήστη ή τιμών ρύθμισης που πρέπει να εκφράζονται ως συμβολοσειρά οκταδικού literal (για παράδειγμα,
modes δικαιωμάτων αρχείων όπως `0o644`) πριν από parsing ή μετατροπή.

> **Σημείωση για χρήστες TypeScript:**
>
> Το `isOctal` είναι type guard (`value is string`). Μετά από αποτέλεσμα `true`, το TypeScript περιορίζει τη μεταβλητή
> που ελέγχθηκε σε `string`.

### Πλεονεκτήματα

- Παρέχει αυστηρό type guard: επιστρέφει `true` μόνο όταν η είσοδος είναι συμβολοσειρά που ταιριάζει σε μορφή οκταδικού
  literal.
- Απορρίπτει κενές συμβολοσειρές και συμβολοσειρές με αρχικά/τελικά κενά (ASCII control/space), μειώνοντας τις τυχαίες
  αντιστοιχίσεις.
- Υποστηρίζει προαιρετικό πρόσημο και δεν κάνει διάκριση πεζών-κεφαλαίων για το πρόθεμα `0o`/`0O`.
- Είναι επιεικές για μη-συμβολοσειρικές εισόδους επιστρέφοντας `false` αντί να κάνει throw.

## Χρήση

### Σύνταξη

Συνάρτηση:

- `isOctal(value)`

Παράμετροι:

- `value`: Η τιμή που θα ελεγχθεί.

### Τοπική εισαγωγή συνάρτησης

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // ἀληθές
console.log(isOctal(b)); // ἀληθές
console.log(isOctal(c)); // ψεῦδος
console.log(isOctal(d)); // ψεῦδος

if (isOctal(a)) {
  // ὁ a ἐστὶν ἐνταῦθα συμβολοσειρά
  const normalized = a.toLowerCase();
  console.log(normalized);
}

```

### Καθολική εισαγωγή αντικειμένου

Για εισαγωγή των συναρτήσεων ως καθολικών μεθόδων αντικειμένου χρησιμοποιήστε:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Η ακόλουθη μέθοδος θα είναι διαθέσιμη καθολικά:

- `Type.isOctal(value)`

## Ανάλυση συναρτήσεων

Εδώ τεκμηριώνεται μια πινακοποιημένη ανάλυση της εξόδου που προκύπτει όταν δίνονται διαφορετικές παράμετροι στις
συναρτήσεις: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>Το αρχείο δημιουργήθηκε στις 30 January 2026 at 14:44:51 (UTC) με τη χρήση του *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** από τον/την *
*[Roland Milto](https://roland-milto.de/)**.</small>