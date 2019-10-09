function returnInCatchAndFinally() {
  try {
    console.log('Inside try');

    throw new Error();
  } catch (error) {
    console.log('Inside catch');

    return 1;
  } finally {
    console.log('Inside finally');

    return 2;
  }
}

returnInCatchAndFinally(); // 2
