import { type User, type InsertUser, type InsertWaitlist, type WaitlistSubmission, users, waitlistSubmissions } from "@shared/schema";
import { randomUUID } from "crypto";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { eq } from "drizzle-orm";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createWaitlistSubmission(submission: InsertWaitlist): Promise<WaitlistSubmission>;
  getAllWaitlistSubmissions(): Promise<WaitlistSubmission[]>;
}

export class DatabaseStorage implements IStorage {
  private db;

  constructor() {
    const sql = neon(process.env.DATABASE_URL!);
    this.db = drizzle(sql);
  }

  async getUser(id: string): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await this.db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async createWaitlistSubmission(submission: InsertWaitlist): Promise<WaitlistSubmission> {
    const result = await this.db.insert(waitlistSubmissions).values(submission).returning();
    return result[0];
  }

  async getAllWaitlistSubmissions(): Promise<WaitlistSubmission[]> {
    return await this.db.select().from(waitlistSubmissions);
  }
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private waitlistSubmissionsMap: Map<string, WaitlistSubmission>;

  constructor() {
    this.users = new Map();
    this.waitlistSubmissionsMap = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createWaitlistSubmission(submission: InsertWaitlist): Promise<WaitlistSubmission> {
    const id = randomUUID();
    const waitlistSubmission: WaitlistSubmission = { 
      ...submission,
      phone: submission.phone ?? null,
      id, 
      createdAt: new Date() 
    };
    this.waitlistSubmissionsMap.set(id, waitlistSubmission);
    return waitlistSubmission;
  }

  async getAllWaitlistSubmissions(): Promise<WaitlistSubmission[]> {
    return Array.from(this.waitlistSubmissionsMap.values());
  }
}

// Use MemStorage for local development without database setup
// Switch to DatabaseStorage when you have DATABASE_URL configured
export const storage = new DatabaseStorage();
// export const storage = new DatabaseStorage();
