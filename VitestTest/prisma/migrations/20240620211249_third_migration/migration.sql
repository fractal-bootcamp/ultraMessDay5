/*
  Warnings:

  - You are about to drop the `MovieTags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "MovieTags" DROP CONSTRAINT "MovieTags_movieId_fkey";

-- DropForeignKey
ALTER TABLE "MovieTags" DROP CONSTRAINT "MovieTags_tagId_fkey";

-- DropTable
DROP TABLE "MovieTags";

-- DropTable
DROP TABLE "Tag";

-- CreateTable
CREATE TABLE "MovieTag" (
    "movieId" INTEGER NOT NULL,
    "tagName" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignerId" INTEGER NOT NULL,

    CONSTRAINT "MovieTag_pkey" PRIMARY KEY ("movieId","assignerId","tagName")
);

-- CreateIndex
CREATE UNIQUE INDEX "MovieTag_tagName_key" ON "MovieTag"("tagName");

-- AddForeignKey
ALTER TABLE "MovieTag" ADD CONSTRAINT "MovieTag_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieTag" ADD CONSTRAINT "MovieTag_assignerId_fkey" FOREIGN KEY ("assignerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
