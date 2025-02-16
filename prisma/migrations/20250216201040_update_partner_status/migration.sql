/*
  Warnings:

  - The `current_status` column on the `partners` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "PartnerCurrentStatus" AS ENUM ('GATHER_RATES', 'CONTRACT_FULFILLED', 'INVITE_TO_PROGRAM', 'NEEDS_APPROVAL', 'OUT_OF_COUNTRY', 'ACTIVE', 'INACTIVE', 'NOT_APPROVED', 'UNRESPONSIVE', 'OUTREACH', 'EMAIL_READY', 'AMAZON_REVIEW_COMPLETE', 'FOLLOW_UP', 'WAITLISTED', 'RATE_TOO_HIGH', 'NOT_STARTED', 'REJECTED_OFFER', 'AWAITING_AMAZON_REBATE', 'VOID_CONTRACT', 'IN_CONVERSATION', 'DM_OUTREACHED', 'UP_NEXT', 'DONE', 'DO_NOT_CONTRACT');

-- AlterTable
ALTER TABLE "partners" DROP COLUMN "current_status",
ADD COLUMN     "current_status" "PartnerCurrentStatus";

-- DropEnum
DROP TYPE "CampaignCurrentStatus";
