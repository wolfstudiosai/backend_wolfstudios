/*
  Warnings:

  - You are about to drop the `campaigns` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `records` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "campaigns" DROP CONSTRAINT "campaigns_user_id_fkey";

-- DropTable
DROP TABLE "campaigns";

-- DropTable
DROP TABLE "records";

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
CREATE TABLE "campaign_HQ" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "start_date" TIMESTAMP(3),
    "end_date" TIMESTAMP(3),
    "status" "CampaignStatus" NOT NULL,
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

-- AddForeignKey
ALTER TABLE "campaign_HQ" ADD CONSTRAINT "campaign_HQ_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
