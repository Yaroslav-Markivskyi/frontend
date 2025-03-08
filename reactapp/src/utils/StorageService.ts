export default interface StorageService {
    load(key: string): string | null;
    save(key: string, value: string): void;
    clear(key: string): void;
  }
