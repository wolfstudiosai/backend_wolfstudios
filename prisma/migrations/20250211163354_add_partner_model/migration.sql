-- CreateEnum
CREATE TYPE "ProfileCategory" AS ENUM ('MODEL', 'CREATOR', 'PHOTOGRAPHER', 'REVIEW_PARTNER', 'B2B', 'BLOG_OR_REVIEWER');

-- CreateEnum
CREATE TYPE "CurrentStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'NOT_STARTED');

-- CreateTable
CREATE TABLE "partners" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "profile_image" TEXT,
    "website" TEXT,
    "state" TEXT,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "instagram" TEXT,
    "instagram_following" INTEGER NOT NULL DEFAULT 0,
    "tiktok" TEXT,
    "tiktok_following" INTEGER NOT NULL DEFAULT 0,
    "youtube" TEXT,
    "youtube_following" INTEGER NOT NULL DEFAULT 0,
    "x" TEXT,
    "x_following" INTEGER NOT NULL DEFAULT 0,
    "facebook" TEXT,
    "facebook_following" INTEGER NOT NULL DEFAULT 0,
    "pinterest" TEXT,
    "pinterest_following" INTEGER NOT NULL DEFAULT 0,
    "partner_IG_rate" INTEGER,
    "partner_TT_rate" INTEGER,
    "partner_YT_rate" INTEGER,
    "partner_UGC_rate" INTEGER,
    "partner_360_rate" INTEGER,
    "contract" TEXT,
    "products" TEXT,
    "contributed_campaigns" TEXT,
    "profile_category" "ProfileCategory",
    "current_status" "CurrentStatus",
    "profile_status" TEXT,
    "stakeholder" TEXT,
    "total_audience" INTEGER,
    "sourced_from" TEXT,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "partners_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "partners" ADD CONSTRAINT "partners_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
