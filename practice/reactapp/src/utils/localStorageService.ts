import StorageService from "./StorageService";


export class LocalStorageService implements StorageService {
    load(key: string): string | null {
        return localStorage.getItem(key);
    }

    save(key: string, value: string): void {
        localStorage.setItem(key, value);
    }

    clear(key: string): void {
        localStorage.removeItem(key);
    }
}
