-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."House" (
    "id" SERIAL NOT NULL,
    "location" TEXT NOT NULL,
    "landSize" DOUBLE PRECISION NOT NULL,
    "bedrooms" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "bathrooms" INTEGER NOT NULL,
    "floors" INTEGER NOT NULL,
    "certificate" TEXT NOT NULL,
    "propertyType" TEXT NOT NULL,
    "yearBuilt" INTEGER NOT NULL,
    "electricity" INTEGER NOT NULL,
    "hasGarage" BOOLEAN NOT NULL,
    "roadAccess" TEXT NOT NULL,
    "publicFacilities" TEXT NOT NULL,
    "distanceToCity" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "House_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");
