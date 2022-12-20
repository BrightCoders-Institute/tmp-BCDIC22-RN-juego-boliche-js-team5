const pointsCount = require('../src/main.js')
const { describe, expect, test } = require('@jest/globals')

// eslint-disable-next-line no-undef
describe('Scoring Bowling', function () {
  // eslint-disable-next-line no-undef
  test('All gutter balls -> 0', function () {
    const rolls = Array(20).fill(0)
    const result = pointsCount.pointsCount(rolls)
    const expected = 0
    expect(result).toBe(expected)
  })

  // eslint-disable-next-line no-undef
  test('All single balls -> 20', function () {
    const rolls = Array(20).fill(1)
    const result = pointsCount.pointsCount(rolls)
    const expected = 20
    expect(result).toBe(expected)
  })

  // eslint-disable-next-line no-undef
  test('When player gets a spare, they get a bonus from the next throw', function () {
    const rolls = [
      5, 5, // spare
      2, 3,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0
    ]
    const result = pointsCount.pointsCount(rolls)
    const expected = 17
    expect(result).toBe(expected)
  })

  // eslint-disable-next-line no-undef
  test('Spare in final frame counts bonus throw', function () {
    const rolls = [
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      7, 3, 8
    ]
    const result = pointsCount.pointsCount(rolls)
    const expected = 18
    expect(result).toBe(expected)
  })

  // eslint-disable-next-line no-undef
  test('When player gets a strike, they get a bonus from the next two throw', function () {
    const rolls = [
      10,
      2, 3,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0
    ]
    const result = pointsCount.pointsCount(rolls)
    const expected = 20
    expect(result).toBe(expected)
  })

  // eslint-disable-next-line no-undef
  test('Strike in final frame counts bonus throws', function () {
    const rolls = [
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      10, 10, 1
    ]
    const result = pointsCount.pointsCount(rolls)
    const expected = 21
    expect(result).toBe(expected)
  })

  // eslint-disable-next-line no-undef
  test('All strikes -> 300', function () {
    const rolls = Array(12).fill(10)
    const result = pointsCount.pointsCount(rolls)
    const expected = 300
    expect(result).toBe(expected)
  })
})
