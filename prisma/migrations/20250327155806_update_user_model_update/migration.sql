-- AlterTable
ALTER TABLE "User" ADD COLUMN     "about" TEXT,
ADD COLUMN     "account_type" TEXT,
ADD COLUMN     "attributes" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "location" TEXT,
ADD COLUMN     "milkPrice" DECIMAL(65,30) DEFAULT 0.0,
ADD COLUMN     "mobile_number" TEXT,
ADD COLUMN     "pumped" TEXT;
