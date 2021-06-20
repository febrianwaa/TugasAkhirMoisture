-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 20, 2021 at 02:12 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `moisturedetector`
--

-- --------------------------------------------------------

--
-- Table structure for table `glosarium`
--

CREATE TABLE `glosarium` (
  `id` bigint(20) NOT NULL,
  `humidity` varchar(255) DEFAULT NULL,
  `plant_name` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `glosarium`
--

INSERT INTO `glosarium` (`id`, `humidity`, `plant_name`) VALUES
(3, '70', 'Bougenville'),
(2, '70', 'Melati'),
(1, '70', 'Mawar'),
(4, '70', 'PutriMalu'),
(5, '70', 'Cabe'),
(6, '70', 'Toge'),
(7, '70', 'buaya'),
(8, '70', 'gantung'),
(9, '70', 'kelapa'),
(10, '70', 'gorengan'),
(11, '70', 'tahu');

-- --------------------------------------------------------

--
-- Table structure for table `plants`
--

CREATE TABLE `plants` (
  `id` bigint(20) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `plants_detail` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `plants`
--

INSERT INTO `plants` (`id`, `image`, `name`, `plants_detail`) VALUES
(1, '1f8f6f8b-5e9b-4f05-bb75-a3175936761b.jpg', 'Mawar', 1),
(2, '2427e5ba-6b4b-4f33-a447-b6f0f0d7388b.jpg', 'Cabe', 1);

-- --------------------------------------------------------

--
-- Table structure for table `plant_detail`
--

CREATE TABLE `plant_detail` (
  `id` bigint(20) NOT NULL,
  `id_arduino` bigint(20) NOT NULL,
  `soil_moisture` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `plant_detail`
--

INSERT INTO `plant_detail` (`id`, `id_arduino`, `soil_moisture`) VALUES
(1, 123, 1234);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `username`) VALUES
(2, 'Wicak@gmail.com', '123456', 'Wicak');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `glosarium`
--
ALTER TABLE `glosarium`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `plants`
--
ALTER TABLE `plants`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK4qxm9p138bf9l1f7f80igxeq5` (`plants_detail`);

--
-- Indexes for table `plant_detail`
--
ALTER TABLE `plant_detail`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_510qm8r86qfiojh522hawbgkq` (`id_arduino`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `glosarium`
--
ALTER TABLE `glosarium`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `plants`
--
ALTER TABLE `plants`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `plant_detail`
--
ALTER TABLE `plant_detail`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
