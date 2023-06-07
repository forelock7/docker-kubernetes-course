const connectToDatabase = () => {
  const dummyPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 10000);
  });

  return dummyPromise;
};

export default connectToDatabase;
