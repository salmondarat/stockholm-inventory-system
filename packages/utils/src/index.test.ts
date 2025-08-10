import { describe, it, expect } from 'vitest';

// Basic utility function for demonstration
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('sv-SE', {
    style: 'currency',
    currency: 'SEK',
  }).format(price);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

describe('Utils', () => {
  describe('formatPrice', () => {
    it('should format Swedish kronor correctly', () => {
      const result1 = formatPrice(100);
      const result2 = formatPrice(1234.56);

      // Check that it contains the expected currency symbol and format
      expect(result1).toMatch(/100[,.]00.*kr/);
      expect(result2).toMatch(/1[\s,.]234[,.]56.*kr/);
    });

    it('should handle zero and negative values', () => {
      const result1 = formatPrice(0);
      const result2 = formatPrice(-50);

      expect(result1).toMatch(/0[,.]00.*kr/);
      // Handle both ASCII minus (-) and Unicode minus (−) characters
      expect(result2).toMatch(/[−-]50[,.]00.*kr/);
    });
  });

  describe('slugify', () => {
    it('should convert text to URL-friendly slug', () => {
      expect(slugify('Hello World')).toBe('hello-world');
      expect(slugify('Stockholm Inventory System')).toBe(
        'stockholm-inventory-system',
      );
    });

    it('should handle special characters', () => {
      expect(slugify('Hello, World!')).toBe('hello-world');
      expect(slugify('Test@#$%^&*()_+=')).toBe('test');
    });

    it('should handle multiple spaces and dashes', () => {
      expect(slugify('   hello   world   ')).toBe('hello-world');
      expect(slugify('hello---world')).toBe('hello-world');
    });
  });
});
