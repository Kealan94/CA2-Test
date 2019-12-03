-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 11, 2019 at 12:31 AM
-- Server version: 10.1.26-MariaDB
-- PHP Version: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kealanreact`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_swedish_ci NOT NULL,
  `price` float(6,2) NOT NULL,
  `description` text CHARACTER SET utf8 COLLATE utf8_swedish_ci NOT NULL,
  `image_href` varchar(255) CHARACTER SET utf8 COLLATE utf8_swedish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `description`, `image_href`) VALUES
(1, 'Example Product 1', 99.99, 'This is a description of product 1. This is a description of product 1. This is a description of product 1. This is a description of product 1. This is a description of product 1. This is a description of product 1. This is a description of product 1. \r\n', "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.magictricks.com%2Fassets%2Fimages%2Ftrickspix%2Fairbornecokecan2.jpg&imgrefurl=https%3A%2F%2Fwww.magictricks.com%2Fairborne-coke-can.html&docid=uXsv_xy7tr09gM&tbnid=cG9wS8USpWBhVM%3A&vet=10ahUKEwjuvL_G2ZbmAhWbiFwKHaQMCr4QMwh7KAYwBg..i&w=350&h=350&bih=939&biw=1680&q=can%20of%20coke&ved=0ahUKEwjuvL_G2ZbmAhWbiFwKHaQMCr4QMwh7KAYwBg&iact=mrc&uact=8"),
(2, 'Example Product 2', 155.00, 'This is a description of product 2. This is a description of product 2. This is a description of product 2. This is a description of product 2. This is a description of product 2. This is a description of product 2. This is a description of product 2. This is a description of product 2. This is a description of product 2. \r\n', 'https://www.dkit.ie/assets/uploads/DkIT%20Funding%20.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
