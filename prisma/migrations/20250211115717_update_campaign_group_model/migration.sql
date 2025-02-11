/*
  Warnings:

  - Added the required column `slug` to the `campaign_groups` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "campaign_groups" ADD COLUMN     "slug" TEXT NOT NULL;
