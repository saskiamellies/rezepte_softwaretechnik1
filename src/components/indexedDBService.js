const dbName = 'UserProfileDB';
const storeName = 'userProfiles';

class IndexedDBService {
  constructor() {
    this.db = null;
    this.init();
  }

  init() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(dbName, 1);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(storeName)) {
          db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
        }
      };

      request.onsuccess = (event) => {
        this.db = event.target.result;
        resolve();
      };

      request.onerror = (event) => {
        reject(event.target.error);
      };
    });
  }

  addProfile(profile) {
    // ... (unverändert)
  }

  getProfile() {
    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject(new Error('IndexedDB not initialized.'));
        return;
      }

      const transaction = this.db.transaction([storeName], 'readonly');
      const objectStore = transaction.objectStore(storeName);

      const request = objectStore.getAll();

      request.onsuccess = () => {
        resolve(request.result);
      };

      request.onerror = (event) => {
        reject(event.target.error);
      };
    });
  }
}

const indexedDBServiceInstance = new IndexedDBService();

export { indexedDBServiceInstance as indexedDBService };
