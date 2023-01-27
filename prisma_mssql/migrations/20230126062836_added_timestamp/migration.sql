/*
  Warnings:

  - Added the required column `createdAt` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Products] ADD [createdAt] DATETIME NOT NULL,
[updatedAt] DATETIME NOT NULL;

-- AlterTable
ALTER TABLE [dbo].[Users] ADD [createdAt] DATETIME NOT NULL,
[updatedAt] DATETIME NOT NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
