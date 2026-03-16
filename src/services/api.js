export const registerUser = async (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: "Mock backend response",
        data: data,
      });
    }, 1000);
  });
};