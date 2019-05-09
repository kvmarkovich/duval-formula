import { fm, ss, xb, zm } from "../src/duval";
import expect from 'expect';

describe('Duval`s fomula testing', function() {
    it('Calculate mass in KG', () => {
        const massT = 1;
        const massKg = fm(massT);
        expect(massKg).toBe(massT * 1000);
    });

    it('Тестирует процент уменьшения влажности при влажности сырья 33%', () => {
        const a = 33;
        const result = xb(a);
        expect(result).toBeCloseTo(27.17);
    });

    it('Тестирует процент уменьшения влажности при влажности сырья 10%', () => {
        const a = 10;
        const result = xb(a);
        expect(result).toBeCloseTo(2.17);
    });

    it('Тестирует процент уменьшения влажности при влажности сырья 7%', () => {
        const a = 7;
        const result = xb(a);
        expect(result).toBe(0);
    });

    it('Тестирует процент уменьшения влажности при влажности сырья 5%', () => {
        const a = 5;
        const result = xb(a);
        expect(result).toBe(0);
    });

    it('Тестирует процент уменьшения сорной примеси (в процентах) при сорности 33%', () => {
        const result = ss(27.17, 33);
        expect(result).toBeCloseTo(22.52);
    });

    it('Тестирует процент уменьшения сорной примеси (в процентах) при сорности 10%', () => {
        const result = ss(27.17, 10);
        expect(result).toBeCloseTo(5.26);
    });

    it('Тестирует процент уменьшения сорной примеси (в процентах) при сорности 3%', () => {
        const result = ss(27.17, 3);
        expect(result).toBe(0);
    });

    it('Тестирует процент уменьшения сорной примеси (в процентах) при сорности 1%', () => {
        const result = ss(27.17, 1);
        expect(result).toBe(0);
    });


    it('Тестирует зачетная масса зерна 1 тонна, влажность = 33, Сорнсть = 3', () => {
        const result = zm(1, 3, 33);
        expect(result).toBeCloseTo(728.26);
    });

    it('Тестирует зачетная масса зерна 1 тонна, влажность = 8, Сорнсть = 3', () => {
        const result = zm(1, 3, 8);
        expect(result).toBeCloseTo(1000);
    });

    it('Тестирует зачетная масса зерна 1 тонна, влажность = 5, Сорнсть = 1', () => {
        const result = zm(1, 1, 5);
        expect(result).toBeCloseTo(1000);
    });

    it('Тестирует зачетная масса зерна 1 тонна, влажность = undefined, Сорнсть = 1', () => {
        const result = zm(1, 1, undefined);
        expect(result).toBeCloseTo(1000);
    });

    it('Тестирует зачетная масса зерна 1 тонна, влажность = 5, Сорнсть = undefined', () => {
        const result = zm(1, undefined, 5);
        expect(result).toBeCloseTo(1000);
    });


});