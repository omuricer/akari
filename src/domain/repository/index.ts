export interface Repository<T> {
  all(): Promise<T[]>;
}
