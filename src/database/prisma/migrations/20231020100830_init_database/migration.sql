-- CreateTable
CREATE TABLE "Movie" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "categories" TEXT NOT NULL,
    "ageRestriction" INTEGER NOT NULL,
    "duration" TEXT NOT NULL,
    "releaseDate" DATE NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MovieSession" (
    "id" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "timeStart" TEXT NOT NULL,
    "timeEnd" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "cinemahallId" TEXT NOT NULL,
    "movieId" TEXT NOT NULL,

    CONSTRAINT "MovieSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MovieSessionSeat" (
    "id" TEXT NOT NULL,
    "free" BOOLEAN NOT NULL DEFAULT true,
    "movieSessionId" TEXT NOT NULL,
    "cinemaSeatId" TEXT NOT NULL,
    "bookingId" TEXT NOT NULL,

    CONSTRAINT "MovieSessionSeat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cinema" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "workingHours" TEXT NOT NULL,

    CONSTRAINT "Cinema_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CinemaHall" (
    "id" TEXT NOT NULL,
    "cinemaId" TEXT NOT NULL,

    CONSTRAINT "CinemaHall_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CinemaSeat" (
    "id" TEXT NOT NULL,
    "bookingId" TEXT,
    "cinemaHallId" TEXT NOT NULL,

    CONSTRAINT "CinemaSeat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "bookingId" TEXT NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "movieSessionId" TEXT NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MovieSessionSeat_bookingId_key" ON "MovieSessionSeat"("bookingId");

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_bookingId_key" ON "Transaction"("bookingId");

-- AddForeignKey
ALTER TABLE "MovieSession" ADD CONSTRAINT "MovieSession_cinemahallId_fkey" FOREIGN KEY ("cinemahallId") REFERENCES "CinemaHall"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieSession" ADD CONSTRAINT "MovieSession_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieSessionSeat" ADD CONSTRAINT "MovieSessionSeat_movieSessionId_fkey" FOREIGN KEY ("movieSessionId") REFERENCES "MovieSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieSessionSeat" ADD CONSTRAINT "MovieSessionSeat_cinemaSeatId_fkey" FOREIGN KEY ("cinemaSeatId") REFERENCES "CinemaSeat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieSessionSeat" ADD CONSTRAINT "MovieSessionSeat_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CinemaHall" ADD CONSTRAINT "CinemaHall_cinemaId_fkey" FOREIGN KEY ("cinemaId") REFERENCES "Cinema"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CinemaSeat" ADD CONSTRAINT "CinemaSeat_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CinemaSeat" ADD CONSTRAINT "CinemaSeat_cinemaHallId_fkey" FOREIGN KEY ("cinemaHallId") REFERENCES "CinemaHall"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_movieSessionId_fkey" FOREIGN KEY ("movieSessionId") REFERENCES "MovieSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
