import Dexie, { type Table } from "dexie";

export interface Transaction {
  id: string;
  userId: string;
  type: "income" | "expense";
  amount: number;
  category: string;
  note: string;
  createdAt: number;
  updatedAt: number;
  syncStatus: "pending" | "synced";
}

class TrackKeuanganDB extends Dexie {
  transactions!: Table<Transaction>;

  constructor() {
    super("TrackKeuangan");

    this.version(1).stores({
      transactions: "id,userId,createdAt,syncStatus"
    });
  }
}

export const db = new TrackKeuanganDB();