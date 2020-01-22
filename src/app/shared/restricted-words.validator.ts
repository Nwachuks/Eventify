import { FormControl } from '@angular/forms';

export function restrictedWords(words) {
  return (control: FormControl): {[key: string]: any} => {
    // If no words are found, pass
    if (!words) {
      return null;
    }

    // Check if words are in list of restricted words or return null, then remove null from the returned array
    const invalidWords = words.map(w => control.value.includes(w) ? w : null)
      .filter(w => w != null);
    // If there are any invalid words, list them out comma separated
    return invalidWords && invalidWords.length > 0 ? {'restrictedWords': invalidWords.join(', ')} : null;
  };
}
