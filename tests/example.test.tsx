import sum from './sum'

import { describe, it, expect } from 'vitest'

describe('Test', () => {
    it('should return the sum', () => {
        expect(sum(1, 4)).toBe(5)
    })
})