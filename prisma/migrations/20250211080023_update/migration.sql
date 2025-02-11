-- CreateEnum
CREATE TYPE "ThreadType" AS ENUM ('DIRECT', 'GROUP');

-- CreateEnum
CREATE TYPE "MessageType" AS ENUM ('TEXT', 'FILE');

-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('ACTIVE', 'BLOCKED');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('SUPER_ADMIN', 'ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "PostingStatus" AS ENUM ('POSTED', 'NOT_POSTED');

-- CreateEnum
CREATE TYPE "CampaignStatusOld" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'COMPLETED');

-- CreateEnum
CREATE TYPE "CampaignStatus" AS ENUM ('UPCOMING', 'ACTIVE', 'PAUSED', 'NEEDS_CASE_STUDY', 'NEEDS_PARTNERS', 'ONBOARDING_PARTNERS');

-- CreateEnum
CREATE TYPE "PortfolioTypes" AS ENUM ('VLOGS', 'ECOMMERCE', 'FASHION', 'BRANDING', 'UGC', 'MUSIC', 'BW', 'CREATORS', 'BEAUTY', 'PUBLICATIONS', 'SPORT', 'PORDUCTS', 'SWIM', 'COMMERCIAL', 'LIFESTYLE', 'PORTRAITURE', 'FILM', 'EVENTS', 'MOOD', 'HOME');

-- CreateEnum
CREATE TYPE "PortfolioStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'COMPLETED');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "contact_number" TEXT,
    "profile_pic" TEXT,
    "status" "UserStatus" NOT NULL DEFAULT 'ACTIVE',
    "role" "UserRole" NOT NULL DEFAULT 'USER',
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "password_changed_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content_HQ" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "campaign" TEXT,
    "product" TEXT,
    "stakeholder" TEXT,
    "posting_quality" TEXT,
    "google_drive_files" TEXT,
    "playbook_link" TEXT,
    "uppromote_conversion" INTEGER NOT NULL DEFAULT 0,
    "asset_status" TEXT,
    "month_uploaded" TIMESTAMP(3),
    "REVO_pinterest" TEXT DEFAULT 'not-posted',
    "pin_accounts_used" TEXT DEFAULT 'not-posted',
    "pinterest_PIN_click" INTEGER NOT NULL DEFAULT 0,
    "pinterest_view" INTEGER NOT NULL DEFAULT 0,
    "REVO_instagram" TEXT,
    "IG_like" INTEGER NOT NULL DEFAULT 0,
    "IG_comment" INTEGER NOT NULL DEFAULT 0,
    "IG_share" INTEGER NOT NULL DEFAULT 0,
    "IG_view" INTEGER NOT NULL DEFAULT 0,
    "IG_social_sets_used" TEXT,
    "partner_IG_link" TEXT,
    "REVO_twitter" TEXT DEFAULT 'not-posted',
    "REVO_tiktok" TEXT DEFAULT 'not-posted',
    "REVO_TT_view" INTEGER NOT NULL DEFAULT 0,
    "tiktok_accounts_used" TEXT DEFAULT 'not-posted',
    "partner_tiktok_link" TEXT DEFAULT 'not-posted',
    "partner_TT_like" INTEGER NOT NULL DEFAULT 0,
    "partner_TT_comments" INTEGER NOT NULL DEFAULT 0,
    "partner_TT_comment" TEXT,
    "partner_TT_share" INTEGER NOT NULL DEFAULT 0,
    "partner_TT_view" INTEGER NOT NULL DEFAULT 0,
    "partner_TT_save" INTEGER NOT NULL DEFAULT 0,
    "TT_dummy_account_used" TEXT,
    "YT_account_used" TEXT DEFAULT 'not-posted',
    "partner_YT_link" TEXT DEFAULT 'not-posted',
    "partner_YT_like" INTEGER NOT NULL DEFAULT 0,
    "partner_YT_comment" INTEGER NOT NULL DEFAULT 0,
    "partner_YT_view" INTEGER NOT NULL DEFAULT 0,
    "partner_YT_save" INTEGER NOT NULL DEFAULT 0,
    "REVO_clubrevo_youtube" TEXT DEFAULT 'not-posted',
    "REVO_youtube" TEXT DEFAULT 'not-posted',
    "YT_clubrevo_like" INTEGER NOT NULL DEFAULT 0,
    "YT_clubrevo_view" INTEGER NOT NULL DEFAULT 0,
    "YT_REVOMADIC_like" INTEGER NOT NULL DEFAULT 0,
    "YT_REVOMADIC_comment" INTEGER NOT NULL DEFAULT 0,
    "YT_REVOMADIC_share" INTEGER NOT NULL DEFAULT 0,
    "YT_REVOMADIC_view" INTEGER NOT NULL DEFAULT 0,
    "creator_status" TEXT,
    "profile" TEXT,
    "posting_status" "PostingStatus" NOT NULL DEFAULT 'NOT_POSTED',
    "partner_hq" TEXT,
    "portfolio" TEXT,
    "contributed_engagement" INTEGER NOT NULL DEFAULT 0,
    "by_tags" TEXT,
    "by_city" TEXT,
    "AI_internet_search" TEXT,
    "facilities_contributed_content" TEXT,
    "image" TEXT,
    "video" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "content_HQ_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "campaigns" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "guideline" TEXT,
    "campaign_image" TEXT,
    "content_engagement" INTEGER NOT NULL DEFAULT 0,
    "content_hq" TEXT,
    "note" TEXT,
    "stakeholder" TEXT,
    "campaign_status" "CampaignStatus" NOT NULL,
    "retail_partners" TEXT,
    "proposed_partners" TEXT,
    "live_partners" TEXT,
    "contributed_partners" TEXT,
    "image_gallery" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "video_gallery" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "budget" INTEGER,
    "total_expense" INTEGER,
    "campaign_ROI" TEXT,
    "start_date" TIMESTAMP(3),
    "end_date" TIMESTAMP(3),
    "description" TEXT,
    "spaces" TEXT,
    "product_expense" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "campaigns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "campaign_HQ" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "start_date" TIMESTAMP(3),
    "end_date" TIMESTAMP(3),
    "status" "CampaignStatusOld" NOT NULL,
    "thumbnail" TEXT,
    "stakeholder" TEXT,
    "goal" TEXT,
    "partner_compensation" INTEGER NOT NULL DEFAULT 0,
    "partner_deliverables" TEXT,
    "contributed_partners" TEXT,
    "prospected_partners" TEXT,
    "content_HQ" TEXT,
    "content_guidelines" TEXT,
    "image_inspiration" TEXT,
    "video_inspiration" TEXT,
    "content_engagement" INTEGER NOT NULL DEFAULT 0,
    "product_expense" INTEGER NOT NULL DEFAULT 0,
    "partner_expense" INTEGER NOT NULL DEFAULT 0,
    "social_platforms" JSONB,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "campaign_HQ_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "files" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "alt_text" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "path" TEXT NOT NULL,
    "bucket_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "files_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "otp" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "otp" INTEGER NOT NULL,
    "expires_at" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "otp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portfolios" (
    "id" TEXT NOT NULL,
    "project_title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "category" TEXT,
    "video_url" TEXT,
    "hero_image" TEXT,
    "field_image" TEXT,
    "thumbnail" TEXT,
    "vertical_gallery_images" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "horizontal_gallery_images" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "date" TIMESTAMP(3),
    "short_description" TEXT,
    "full_description" TEXT,
    "state" TEXT,
    "partner_hq" TEXT,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "portfolios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "threads" (
    "id" TEXT NOT NULL,
    "type" "ThreadType" NOT NULL DEFAULT 'DIRECT',
    "name" TEXT,
    "member_count" INTEGER NOT NULL DEFAULT 0,
    "unread_count" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "threads_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "thread_participants" (
    "id" TEXT NOT NULL,
    "thread_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "thread_participants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "messages" (
    "id" TEXT NOT NULL,
    "thread_id" TEXT NOT NULL,
    "author_id" TEXT NOT NULL,
    "type" "MessageType" NOT NULL DEFAULT 'TEXT',
    "content" TEXT,
    "file_url" TEXT,
    "parent_message_id" TEXT,
    "read_status" BOOLEAN NOT NULL DEFAULT false,
    "is_edited" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "messages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "otp_otp_key" ON "otp"("otp");

-- CreateIndex
CREATE UNIQUE INDEX "thread_participants_thread_id_user_id_key" ON "thread_participants"("thread_id", "user_id");

-- AddForeignKey
ALTER TABLE "campaign_HQ" ADD CONSTRAINT "campaign_HQ_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "files" ADD CONSTRAINT "files_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portfolios" ADD CONSTRAINT "portfolios_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "thread_participants" ADD CONSTRAINT "thread_participants_thread_id_fkey" FOREIGN KEY ("thread_id") REFERENCES "threads"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "thread_participants" ADD CONSTRAINT "thread_participants_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_thread_id_fkey" FOREIGN KEY ("thread_id") REFERENCES "threads"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "users"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_parent_message_id_fkey" FOREIGN KEY ("parent_message_id") REFERENCES "messages"("id") ON DELETE SET NULL ON UPDATE CASCADE;
