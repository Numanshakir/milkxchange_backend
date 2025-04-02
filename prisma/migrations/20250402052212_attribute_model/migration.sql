/*
  Warnings:

  - You are about to drop the column `userId` on the `Attribute` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Attribute" DROP CONSTRAINT "Attribute_userId_fkey";

-- AlterTable
ALTER TABLE "Attribute" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "attributes" TEXT[];
