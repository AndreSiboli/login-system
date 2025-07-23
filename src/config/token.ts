export const configToken = {
  JWT_SECRET: process.env.JWT_SECRET,
  REFRESH_JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES_IN: parseInt(process.env.JWT_EXPIRES_IN),
  REFRESH_JWT_EXPIRES_IN: parseInt(process.env.REFRESH_JWT_EXPIRES_IN),
};
