/*
  Warnings:

  - You are about to drop the column `brand` on the `portfolios` table. All the data in the column will be lost.
  - You are about to drop the column `creation_10_images_services_provide` on the `portfolios` table. All the data in the column will be lost.
  - You are about to drop the column `days_location` on the `portfolios` table. All the data in the column will be lost.
  - You are about to drop the column `deliverables` on the `portfolios` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `portfolios` table. All the data in the column will be lost.
  - You are about to drop the column `image_inspiration` on the `portfolios` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `portfolios` table. All the data in the column will be lost.
  - You are about to drop the column `model` on the `portfolios` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `portfolios` table. All the data in the column will be lost.
  - You are about to drop the column `producer` on the `portfolios` table. All the data in the column will be lost.
  - You are about to drop the column `production_studio` on the `portfolios` table. All the data in the column will be lost.
  - You are about to drop the column `sessions` on the `portfolios` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `portfolios` table. All the data in the column will be lost.
  - You are about to drop the column `talent` on the `portfolios` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `portfolios` table. All the data in the column will be lost.
  - You are about to drop the column `video_inspiration` on the `portfolios` table. All the data in the column will be lost.
  - Added the required column `project_title` to the `portfolios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "portfolios" DROP COLUMN "brand",
DROP COLUMN "creation_10_images_services_provide",
DROP COLUMN "days_location",
DROP COLUMN "deliverables",
DROP COLUMN "description",
DROP COLUMN "image_inspiration",
DROP COLUMN "location",
DROP COLUMN "model",
DROP COLUMN "name",
DROP COLUMN "producer",
DROP COLUMN "production_studio",
DROP COLUMN "sessions",
DROP COLUMN "status",
DROP COLUMN "talent",
DROP COLUMN "type",
DROP COLUMN "video_inspiration",
ADD COLUMN     "category" TEXT,
ADD COLUMN     "date" TIMESTAMP(3),
ADD COLUMN     "field_image" TEXT,
ADD COLUMN     "full_description" TEXT,
ADD COLUMN     "hero_image" TEXT,
ADD COLUMN     "horizontal_gallery_images" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "partner_hq" TEXT,
ADD COLUMN     "project_title" TEXT NOT NULL,
ADD COLUMN     "short_description" TEXT,
ADD COLUMN     "state" TEXT,
ADD COLUMN     "vertical_gallery_images" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "video_url" TEXT;
