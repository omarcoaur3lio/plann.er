/*
  Warnings:

  - You are about to drop the column `accurs_at` on the `activities` table. All the data in the column will be lost.
  - Added the required column `occurs_at` to the `activities` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_activities" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "occurs_at" DATETIME NOT NULL,
    "trips_id" TEXT NOT NULL,
    CONSTRAINT "activities_trips_id_fkey" FOREIGN KEY ("trips_id") REFERENCES "trips" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_activities" ("id", "title", "trips_id") SELECT "id", "title", "trips_id" FROM "activities";
DROP TABLE "activities";
ALTER TABLE "new_activities" RENAME TO "activities";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
