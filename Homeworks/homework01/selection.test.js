import Selection from './selection';

test('Falsy values removed', () => {
    // Arrange
    const array = [45, '', 0, 'hello', 4.7, false];
    const expectedResult = [45, 'hello', 4.7];
    const selection = new Selection ();

    // Act
    const result = selection.removeFalsyValues(array);

    // Assert
    expect(result).toEqual(expectedResult);
});