import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EntryService {
  private entries: any[] = [];

  getAllEntries(): any[] {
    return this.entries;
  }

  addEntry(newEntry: any): void {
    const isDuplicate = this.entries.some(entry => entry.idNumber === newEntry.idNumber);

    if (isDuplicate) {
      console.error('Duplicate entry detected!');
      return;
    }

    this.entries.push({ ...newEntry });
  }

  updateEntry(updatedEntry: any): void {
    let index = -1;
  
    this.entries.forEach((entry, i) => {
      if (entry.idNumber === updatedEntry.idNumber) {
        index = i;
        return;
      }
    });
  
    if (index !== -1) {
      this.entries[index] = { ...updatedEntry };
    }
  }

  deleteEntry(idNumber: string): void {
    this.entries = this.entries.filter((entry) => entry.idNumber !== idNumber);
  }
}
