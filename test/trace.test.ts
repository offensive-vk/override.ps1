import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { trace } from '../index';

describe('trace function', () => {
  const originalDate = Date;

  beforeEach(() => {
    global.Date = originalDate; // Reset Date to original
    vi.spyOn(console, 'log').mockImplementation(() => {}); // Mock console.log
  });

  afterEach(() => {
    vi.restoreAllMocks(); // Restore all mocks after each test
  });

  it('should log correctly with no arguments', () => {
    const mockDate = new Date('2023-05-30T10:24:35.123Z');
    global.Date = vi.fn(() => mockDate) as any;

    trace();

    expect(console.log).toHaveBeenCalledWith('2023-5-30 10:24:35.123 AM [info] >> [  ] << [info]');
  });

  it('should log correctly with one argument', () => {
    const mockDate = new Date('2023-05-30T14:05:09.456Z');
    global.Date = vi.fn(() => mockDate) as any;

    trace('test');

    expect(console.log).toHaveBeenCalledWith('2023-5-30 2:05:09.456 PM [info] >> [ test ] << [info]');
  });

  it('should log correctly with multiple arguments', () => {
    const mockDate = new Date('2023-05-30T09:07:08.789Z');
    global.Date = vi.fn(() => mockDate) as any;
    trace('arg1', 'arg2', 123);

    expect(console.log).toHaveBeenCalledWith('2023-5-30 9:07:08.789 AM [info] >> [ arg1,arg2,123 ] << [info]');
  });

  it('should handle noon correctly for AM/PM', () => {
    const mockDate = new Date('2023-05-30T12:15:45.987Z');
    global.Date = vi.fn(() => mockDate) as any;

    trace('noon test');
    expect(console.log).toHaveBeenCalledWith('2023-5-30 12:15:45.987 PM [info] >> [ noon test ] << [info]');
  });
});