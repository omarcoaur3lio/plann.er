-- CreateTable
CREATE TABLE "activities" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "accurs_at" DATETIME NOT NULL,
    "trips_id" TEXT NOT NULL,
    CONSTRAINT "activities_trips_id_fkey" FOREIGN KEY ("trips_id") REFERENCES "trips" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "links" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "trips_id" TEXT NOT NULL,
    CONSTRAINT "links_trips_id_fkey" FOREIGN KEY ("trips_id") REFERENCES "trips" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
