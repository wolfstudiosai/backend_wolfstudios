-- CreateEnum
CREATE TYPE "PortfolioTypes" AS ENUM ('VLOGS', 'ECOMMERCE', 'FASHION', 'BRANDING', 'UGC', 'MUSIC', 'BW', 'CREATORS', 'BEAUTY', 'PUBLICATIONS', 'SPORT', 'PORDUCTS', 'SWIM', 'COMMERCIAL', 'LIFESTYLE', 'PORTRAITURE', 'FILM', 'EVENTS', 'MOOD', 'HOME');

-- CreateEnum
CREATE TYPE "PortfolioStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'COMPLETED');

-- CreateTable
CREATE TABLE "portfolios" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "type" "PortfolioTypes" NOT NULL,
    "model" TEXT,
    "days_location" TEXT,
    "sessions" TEXT,
    "producer" TEXT,
    "production_studio" TEXT,
    "location" TEXT,
    "talent" TEXT,
    "creation_10_images_services_provide" TEXT,
    "brand" TEXT,
    "deliverables" TEXT,
    "status" "PortfolioStatus" NOT NULL,
    "thumbnail" TEXT,
    "image_inspiration" TEXT,
    "video_inspiration" TEXT,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "portfolios_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "portfolios" ADD CONSTRAINT "portfolios_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
