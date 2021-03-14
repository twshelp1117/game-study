export const tlog =
  process.env.NODE_ENV !== "production"
    ? function (message?: any, ...optionalParams: any[]) {
        console.log(performance.now() | 0, message, ...optionalParams);
      }
    : function () {};
