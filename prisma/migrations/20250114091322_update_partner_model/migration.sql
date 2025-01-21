/*
  Warnings:

  - The `campaign_month` column on the `partners` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "partners" DROP COLUMN "campaign_month",
ADD COLUMN     "campaign_month" TIMESTAMP(3);
