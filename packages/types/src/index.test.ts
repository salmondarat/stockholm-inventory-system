import { describe, it, expect } from 'vitest';

// Type definitions for demonstration
export interface User {
  id: number;
  username: string;
  email: string;
  role: 'admin' | 'user';
  createdAt: Date;
}

export interface Item {
  id: number;
  name: string;
  description?: string;
  quantity: number;
  price: number;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

// Utility functions that use our types
export function createUser(
  id: number,
  username: string,
  email: string,
  role: User['role'] = 'user',
): User {
  return {
    id,
    username,
    email,
    role,
    createdAt: new Date(),
  };
}

export function createItem(
  id: number,
  name: string,
  quantity: number,
  price: number,
  category: string,
): Item {
  const now = new Date();
  return {
    id,
    name,
    quantity,
    price,
    category,
    createdAt: now,
    updatedAt: now,
  };
}

describe('Types', () => {
  describe('createUser', () => {
    it('should create a user with default role', () => {
      const user = createUser(1, 'testuser', 'test@example.com');

      expect(user.id).toBe(1);
      expect(user.username).toBe('testuser');
      expect(user.email).toBe('test@example.com');
      expect(user.role).toBe('user');
      expect(user.createdAt).toBeInstanceOf(Date);
    });

    it('should create a user with specified role', () => {
      const admin = createUser(2, 'admin', 'admin@example.com', 'admin');

      expect(admin.role).toBe('admin');
    });
  });

  describe('createItem', () => {
    it('should create an item with all required fields', () => {
      const item = createItem(1, 'Laptop', 5, 10000, 'Electronics');

      expect(item.id).toBe(1);
      expect(item.name).toBe('Laptop');
      expect(item.quantity).toBe(5);
      expect(item.price).toBe(10000);
      expect(item.category).toBe('Electronics');
      expect(item.createdAt).toBeInstanceOf(Date);
      expect(item.updatedAt).toBeInstanceOf(Date);
      expect(item.createdAt.getTime()).toBe(item.updatedAt.getTime());
    });
  });
});
