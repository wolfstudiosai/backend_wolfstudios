"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), ".env") });
exports.default = {
    port: process.env.PORT,
    node_env: process.env.NODE_ENV,
    salt_rounds: process.env.PASSWORD_SALT_ROUNDS,
    jwt_access_secret: process.env.JWT_ACCESS_SECRET,
    jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
    jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN,
    jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
    wolfstudios_email: process.env.WOLFSTUDIOS_EMAIL,
    email_app_pass: process.env.EMAIL_APP_PASS,
    cloud_name: process.env.CLOUD_NAME,
    cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
    cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET,
    supabase_bucket_key: process.env.SUPABASE_BUCKET_KEY,
    supabase_bucket_url: process.env.SUPABASE_BUCKET_URL,
    supabase_bucket_general: process.env.SUPABASE_BUCKET_GENERAL,
};
