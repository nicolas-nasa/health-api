import multer from 'multer';

const buffer = multer.memoryStorage();

export const MultFormMiddleware = multer({ storage: buffer });
