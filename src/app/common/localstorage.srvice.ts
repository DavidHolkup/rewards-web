import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  // Save object to local storage
  saveObject(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Get object from local storage
  getObject(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  // Remove object from local storage
  removeObject(key: string): void {
    localStorage.removeItem(key);
  }

  // Clear all items from local storage
  clearStorage(): void {
    localStorage.clear();
  }
}