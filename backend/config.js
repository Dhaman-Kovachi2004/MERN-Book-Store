import 'dotenv/config';

function requireEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const port = parseInt(process.env.PORT || '5000', 10);
export const mongodbURL = requireEnv('MONGO_URL');

if (!mongodbURL.startsWith('mongodb://') && !mongodbURL.startsWith('mongodb+srv://')) {
  throw new Error('Invalid MONGO_URL format');
}