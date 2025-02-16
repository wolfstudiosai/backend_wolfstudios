/*
  Warnings:

  - The `current_status` column on the `partners` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `profile_status` column on the `partners` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "CampaignCurrentStatus" AS ENUM ('GATHER_RATES', 'CONTRACT_FULFILLED', 'INVITE_TO_PROGRAM', 'NEEDS_APPROVAL', 'OUT_OF_COUNTRY', 'ACTIVE', 'INACTIVE', 'NOT_APPROVED', 'UNRESPONSIVE', 'OUTREACH', 'EMAIL_READY', 'AMAZON_REVIEW_COMPLETE', 'FOLLOW_UP', 'WAITLISTED', 'RATE_TOO_HIGH', 'NOT_STARTED', 'REJECTED_OFFER', 'AWAITING_AMAZON_REBATE', 'VOID_CONTRACT', 'IN_CONVERSATION', 'DM_OUTREACHED', 'UP_NEXT', 'DONE', 'DO_NOT_CONTRACT');

-- CreateEnum
CREATE TYPE "AffiliatePlatform" AS ENUM ('LEVANTA', 'SHARE_A_SALE', 'SQUAREDANCE');

-- CreateEnum
CREATE TYPE "ProfileStatus" AS ENUM ('PROSPECT', 'ACTIVE', 'OFFLINE', 'NEEDS_ATTENTION', 'ACCREDITED', 'INVITE_FOR_VERIFICATION', 'VERIFIED', 'LEVEL_0', 'NEEDS_PROFILE_IMAGE', 'UPDATE_RATES', 'GATHER_RATES');

-- CreateEnum
CREATE TYPE "PartnerOccupation" AS ENUM ('SOCIAL_INFLUENCER', 'NUTRITIONIST', 'FITNESS_COACH', 'FITNESS_TRAINER', 'CONTENT_CREATOR', 'DOCTOR', 'MODEL', 'PHYSICAL_THERAPIST', 'ATHLETE', 'COMEDIAN', 'FITNESS_DIGITAL_CREATOR', 'ENTREPRENEUR', 'DIGITAL_CREATOR', 'FASHION_MODEL', 'EVENT_ORGANIZER', 'VIDEO_CREATOR', 'NINTENDO_AMBASSADOR', 'CHEF', 'FITNESS_MODEL', 'MASSAGE_THERAPIST', 'FITNESS_CONSULTANT', 'ARTIST');

-- CreateEnum
CREATE TYPE "PartnerJourneyStep" AS ENUM ('PROSPECTED', 'GATHER_RATES', 'RATES_GATHERED', 'AMAZON_REBATE', 'AWAITING_AMAZON_REVIEW', 'AMAZON_REVIEW_COMPLETE', 'AWAITING_UGC', 'JOURNEY_COMPLETE', 'SOCIAL_POST', 'IN_DISPUTE', 'AMAZON_REVIEW_FLAGGED');

-- CreateEnum
CREATE TYPE "SocialPlatform" AS ENUM ('INSTAGRAM', 'YOUTUBE', 'TIKTOK', 'FACEBOOK', 'PINTEREST', 'WEBSITE', 'TWITCH', 'TWITTER', 'WEB_BLOGGER', 'SNAPCHAT');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('DUE', 'PAID', 'HALF_PAID');

-- CreateEnum
CREATE TYPE "ClientStatus" AS ENUM ('APPROVED', 'NOT_APPROVED', 'NEEDS_REVIEW', 'GIFTING_ONLY');

-- AlterEnum
ALTER TYPE "ProfileCategory" ADD VALUE 'SPA';

-- AlterTable
ALTER TABLE "partners" ADD COLUMN     "AI_profile" TEXT,
ADD COLUMN     "TT_post" TEXT,
ADD COLUMN     "UGC_payment_status" "PaymentStatus",
ADD COLUMN     "UGC_retainer_amount" DOUBLE PRECISION,
ADD COLUMN     "UGC_tiktok_link" TEXT,
ADD COLUMN     "YT_post" TEXT,
ADD COLUMN     "affiliate_platform" "AffiliatePlatform",
ADD COLUMN     "age_bracket" TEXT,
ADD COLUMN     "amazon_kickback" DOUBLE PRECISION,
ADD COLUMN     "amazon_order_total" DOUBLE PRECISION,
ADD COLUMN     "amazon_referral_fee" DOUBLE PRECISION,
ADD COLUMN     "amazon_review_beauty_wand" TEXT,
ADD COLUMN     "amazon_review_cupper" TEXT,
ADD COLUMN     "amazon_review_link" TEXT,
ADD COLUMN     "amazon_review_oil" TEXT,
ADD COLUMN     "amazon_review_soothing_cream" TEXT,
ADD COLUMN     "amazon_review_the_pill" TEXT,
ADD COLUMN     "amazon_review_walking_pad_pro" TEXT,
ADD COLUMN     "amazon_review_walking_pad_standard" TEXT,
ADD COLUMN     "amazon_storefront" TEXT,
ADD COLUMN     "amazon_tax" DOUBLE PRECISION,
ADD COLUMN     "amount_paid" DOUBLE PRECISION,
ADD COLUMN     "booking_link" TEXT,
ADD COLUMN     "campaign_month" TIMESTAMP(3),
ADD COLUMN     "case_studies" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "client" TEXT,
ADD COLUMN     "client_status" "ClientStatus",
ADD COLUMN     "country" TEXT,
ADD COLUMN     "deliverables" TEXT,
ADD COLUMN     "destinations" TEXT,
ADD COLUMN     "estimated_taxes" DOUBLE PRECISION,
ADD COLUMN     "facilities" TEXT,
ADD COLUMN     "google_drive_files" TEXT,
ADD COLUMN     "hourly_rate" DOUBLE PRECISION,
ADD COLUMN     "journey_step" "PartnerJourneyStep",
ADD COLUMN     "linkedin" TEXT,
ADD COLUMN     "linkedin_connection" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "live_campaign" TEXT,
ADD COLUMN     "mailing_address" TEXT,
ADD COLUMN     "media_kit" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "medium" TEXT,
ADD COLUMN     "month_sourced" TIMESTAMP(3),
ADD COLUMN     "note" TEXT,
ADD COLUMN     "occupation" TEXT,
ADD COLUMN     "open_to_gifting" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "open_to_whitelisting" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "partner_gallery" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "partner_post_view" INTEGER,
ADD COLUMN     "payment_link" TEXT,
ADD COLUMN     "paypal_fee" DOUBLE PRECISION,
ADD COLUMN     "platform" "SocialPlatform"[] DEFAULT ARRAY[]::"SocialPlatform"[],
ADD COLUMN     "platform_deliverables" "SocialPlatform",
ADD COLUMN     "podcast" TEXT,
ADD COLUMN     "portfolio" TEXT,
ADD COLUMN     "production_hq" TEXT,
ADD COLUMN     "proposals" TEXT,
ADD COLUMN     "proposed_campaigns" TEXT,
ADD COLUMN     "receipts" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "record_id" TEXT,
ADD COLUMN     "record_id_text" TEXT,
ADD COLUMN     "refusal_reason" TEXT,
ADD COLUMN     "remaining_credits" DOUBLE PRECISION,
ADD COLUMN     "representation" TEXT,
ADD COLUMN     "revo_IG_post" TEXT,
ADD COLUMN     "revo_amazon_order_confirmation_number" TEXT,
ADD COLUMN     "revo_content_performance" TEXT,
ADD COLUMN     "revo_counter_offer" TEXT,
ADD COLUMN     "revo_offer" TEXT,
ADD COLUMN     "second_payment_date" TIMESTAMP(3),
ADD COLUMN     "services" TEXT,
ADD COLUMN     "shipping_FBA_fee_gifted_partner" DOUBLE PRECISION,
ADD COLUMN     "snapchat" TEXT,
ADD COLUMN     "snapchat_following" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "soundcloud" TEXT,
ADD COLUMN     "spotify" TEXT,
ADD COLUMN     "testimonials" TEXT,
ADD COLUMN     "total_ROI" DOUBLE PRECISION,
ADD COLUMN     "total_contributed_engagement_by_content" INTEGER,
ADD COLUMN     "twitch" TEXT,
ADD COLUMN     "whatsapp" TEXT,
ALTER COLUMN "tags" DROP NOT NULL,
ALTER COLUMN "tags" DROP DEFAULT,
ALTER COLUMN "tags" SET DATA TYPE TEXT,
ALTER COLUMN "partner_IG_rate" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "partner_TT_rate" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "partner_YT_rate" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "partner_UGC_rate" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "partner_360_rate" SET DATA TYPE DOUBLE PRECISION,
DROP COLUMN "current_status",
ADD COLUMN     "current_status" "CampaignCurrentStatus",
DROP COLUMN "profile_status",
ADD COLUMN     "profile_status" "ProfileStatus";

-- DropEnum
DROP TYPE "CurrentStatus";
