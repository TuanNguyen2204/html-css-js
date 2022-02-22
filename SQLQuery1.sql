CREATE DATABASE testDb
USE testDb
CREATE TABLE Student (
   id   INT    NOT NULL identity(1,1),
   name NVARCHAR (32)     NOT NULL,
   gender BIT	  NOT NULL,
   dob  DATE NOT NULL,
   PRIMARY KEY (id)
);
GO
SET IDENTITY_INSERT Student OFF
GO
INSERT INTO student(name, gender, dob) VALUES (N'Nguyễn Tuấn Trọng', 1, '2001-04-18');
INSERT INTO student(name, gender, dob) VALUES (N'Phạm Hoa Chi', 0, '1999-05-20');
INSERT INTO student(name, gender, dob) VALUES (N'Hoàng Xuân Tuyển', 1, '2002-06-05');
INSERT INTO student(name, gender, dob) VALUES (N'Phạm Hồng Dương', 0, '2001-01-01');
GO

