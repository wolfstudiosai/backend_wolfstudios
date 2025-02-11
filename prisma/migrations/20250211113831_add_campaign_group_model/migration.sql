/*
  Warnings:

  - Added the required column `campaign_group_id` to the `campaigns` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "campaigns" ADD COLUMN     "campaign_group_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "campaign_groups" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "campaign_groups_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "campaigns" ADD CONSTRAINT "campaigns_campaign_group_id_fkey" FOREIGN KEY ("campaign_group_id") REFERENCES "campaign_groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
