-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th2 26, 2024 lúc 09:22 AM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
-- Phiên bản PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `base`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `productId` int(11) DEFAULT NULL,
  `productName` varchar(255) DEFAULT NULL,
  `productImage` varchar(255) DEFAULT NULL,
  `productQuantity` int(11) DEFAULT NULL,
  `productPrice` int(11) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `cart`
--

INSERT INTO `cart` (`id`, `userId`, `productId`, `productName`, `productImage`, `productQuantity`, `productPrice`, `amount`, `createdAt`, `updatedAt`) VALUES
(5, 17, 36, 'Bánh pancakes Brazil', 'http://localhost:8080/img/products/pancake-nigeria-1694963105321.jpg', 1, 1560000, 1560000, '2023-09-23 14:06:47', '2023-09-23 14:06:47'),
(6, 17, 40, 'Bánh mỳ sừng bò truyền thống', 'http://localhost:8080/img/products/banhmisungbo-truyenthong-1694963475393.jpg', 1, 16000, 16000, '2023-09-23 15:38:05', '2023-09-23 15:38:05'),
(7, 17, 39, 'Bánh mỳ sừng bò socola', 'http://localhost:8080/img/products/banhmisungbo-socola-1694963436552.jpg', 1, 28000, 28000, '2023-09-23 15:38:06', '2023-09-23 15:38:06'),
(10, 17, 27, 'Bánh cheesecake bơ đậu phộng', 'http://localhost:8080/img/products/cheesecake-bodauphongjpg-1694962469344.jpg', 1, 190000, 190000, '2023-09-23 15:38:11', '2023-09-23 15:38:11'),
(11, 17, 28, 'Bánh cheesecake nho xanh', 'http://localhost:8080/img/products/cheesecake-nhoxanhjpg-1694962507596.jpg', 1, 170000, 170000, '2023-09-23 15:38:11', '2023-09-23 15:38:11'),
(12, 17, 26, 'Bánh cheesecake mè đen', 'http://localhost:8080/img/products/cheesecake-meden-1694962414907.jpg', 1, 210000, 210000, '2023-09-23 15:38:12', '2023-09-23 15:38:12'),
(14, 17, 41, 'Bánh mỳ sừng bò  hạnh nhân', 'http://localhost:8080/img/products/banhmisungbo-hanhnhan-1694963525517.jpg', 1, 58000, 58000, '2023-09-25 12:14:05', '2023-09-25 12:14:05'),
(15, 17, 41, 'Bánh mỳ sừng bò  hạnh nhân', 'http://localhost:8080/img/products/banhmisungbo-hanhnhan-1694963525517.jpg', 1, 58000, 58000, '2023-09-25 14:57:57', '2023-09-25 14:57:57'),
(16, 17, 41, 'Bánh mỳ sừng bò  hạnh nhân', 'http://localhost:8080/img/products/banhmisungbo-hanhnhan-1694963525517.jpg', 1, 58000, 58000, '2023-09-26 15:48:56', '2023-09-26 15:48:56'),
(40, 27, 37, 'Bánh pancakes Pháp', 'http://localhost:8080/img/products/pancake-phap-1694963132609.jpg', 1, 1440000, 1440000, '2023-10-06 13:51:45', '2023-10-06 13:51:45'),
(41, 27, 36, 'Bánh pancakes Brazil', 'http://localhost:8080/img/products/pancake-nigeria-1694963105321.jpg', 1, 1560000, 1560000, '2023-10-06 13:51:45', '2023-10-06 13:51:45'),
(42, 27, 40, 'Bánh mỳ sừng bò truyền thống', 'http://localhost:8080/img/products/banhmisungbo-truyenthong-1694963475393.jpg', 1, 16000, 16000, '2023-10-06 13:51:46', '2023-10-06 13:51:46'),
(43, 27, 42, 'Bánh mỳ sừng bò  dâu tây', 'http://localhost:8080/img/products/banhmisungbo-dautay-1694963549456.jpg', 1, 34000, 34000, '2023-10-06 13:51:47', '2023-10-06 13:51:47'),
(44, 17, 29, 'Bánh pancakes Nhật Bản', 'http://localhost:8080/img/products/pancake-nhat-1694962924037.jpg', 1, 150000, 150000, '2023-10-07 06:50:00', '2023-10-07 06:50:00'),
(45, 17, 31, 'Bánh pancakes Thái Lan', 'http://localhost:8080/img/products/pancake-han-1694962986166.jpg', 1, 125000, 125000, '2023-10-07 06:50:01', '2023-10-07 06:50:01'),
(46, 17, 33, 'Bánh pancakes Hà Lan', 'http://localhost:8080/img/products/pancake-halan-1694963037491.jpg', 1, 130000, 130000, '2023-10-07 06:50:02', '2023-10-07 06:50:02'),
(47, 32, 42, 'Bánh mỳ sừng bò  dâu tây', 'http://localhost:8080/img/products/banhmisungbo-dautay-1694963549456.jpg', 1, 34000, 34000, '2023-10-07 07:35:32', '2023-10-07 07:35:32'),
(48, 32, 41, 'Bánh mỳ sừng bò  hạnh nhân', 'http://localhost:8080/img/products/banhmisungbo-hanhnhan-1694963525517.jpg', 1, 58000, 58000, '2023-10-07 07:35:33', '2023-10-07 07:35:33'),
(49, 32, 40, 'Bánh mỳ sừng bò truyền thống', 'http://localhost:8080/img/products/banhmisungbo-truyenthong-1694963475393.jpg', 1, 16000, 16000, '2023-10-07 07:35:34', '2023-10-07 07:35:34'),
(50, 32, 39, 'Bánh mỳ sừng bò socola', 'http://localhost:8080/img/products/banhmisungbo-socola-1694963436552.jpg', 1, 28000, 28000, '2023-10-07 07:35:35', '2023-10-07 07:35:35'),
(51, 33, 42, 'Bánh mỳ sừng bò  dâu tây', 'http://localhost:8080/img/products/banhmisungbo-dautay-1694963549456.jpg', 1, 34000, 34000, '2023-10-07 07:56:06', '2023-10-07 07:56:06'),
(52, 33, 41, 'Bánh mỳ sừng bò  hạnh nhân', 'http://localhost:8080/img/products/banhmisungbo-hanhnhan-1694963525517.jpg', 1, 58000, 58000, '2023-10-07 07:56:07', '2023-10-07 07:56:07'),
(53, 33, 38, 'Bánh pancakes Đức', 'http://localhost:8080/img/products/pancake-duc-1694963188367.jpg', 1, 143000, 143000, '2023-10-07 07:56:08', '2023-10-07 07:56:08'),
(54, 31, 42, 'Bánh mỳ sừng bò  dâu tây', 'http://localhost:8080/img/products/banhmisungbo-dautay-1694963549456.jpg', 1, 34000, 34000, '2023-10-07 08:24:27', '2023-10-07 08:24:27'),
(55, 31, 41, 'Bánh mỳ sừng bò  hạnh nhân', 'http://localhost:8080/img/products/banhmisungbo-hanhnhan-1694963525517.jpg', 1, 58000, 58000, '2023-10-07 08:24:28', '2023-10-07 08:24:28'),
(56, 31, 40, 'Bánh mỳ sừng bò truyền thống', 'http://localhost:8080/img/products/banhmisungbo-truyenthong-1694963475393.jpg', 1, 16000, 16000, '2023-10-07 08:24:29', '2023-10-07 08:24:29'),
(62, 25, 42, 'Bánh mỳ sừng bò  dâu tây', 'http://localhost:8080/img/products/banhmisungbo-dautay-1694963549456.jpg', 1, 34000, 34000, '2023-10-08 00:15:47', '2023-10-08 00:15:47'),
(63, 25, 40, 'Bánh mỳ sừng bò truyền thống', 'http://localhost:8080/img/products/banhmisungbo-truyenthong-1694963475393.jpg', 1, 16000, 16000, '2023-10-08 00:15:48', '2023-10-08 00:15:48'),
(64, 25, 41, 'Bánh mỳ sừng bò  hạnh nhân', 'http://localhost:8080/img/products/banhmisungbo-hanhnhan-1694963525517.jpg', 1, 58000, 58000, '2023-10-08 00:15:49', '2023-10-08 00:15:49'),
(65, 34, 42, 'Bánh mỳ sừng bò  dâu tây', 'http://localhost:8080/img/products/banhmisungbo-dautay-1694963549456.jpg', 1, 34000, 34000, '2023-10-08 01:07:30', '2023-10-08 01:07:30'),
(66, 34, 41, 'Bánh mỳ sừng bò  hạnh nhân', 'http://localhost:8080/img/products/banhmisungbo-hanhnhan-1694963525517.jpg', 1, 58000, 58000, '2023-10-08 01:07:31', '2023-10-08 01:07:31'),
(67, 34, 40, 'Bánh mỳ sừng bò truyền thống', 'http://localhost:8080/img/products/banhmisungbo-truyenthong-1694963475393.jpg', 1, 16000, 16000, '2023-10-08 01:07:32', '2023-10-08 01:07:32'),
(68, 34, 39, 'Bánh mỳ sừng bò socola', 'http://localhost:8080/img/products/banhmisungbo-socola-1694963436552.jpg', 1, 28000, 28000, '2023-10-08 01:07:33', '2023-10-08 01:07:33'),
(69, 34, 41, 'Bánh mỳ sừng bò  hạnh nhân', 'http://localhost:8080/img/products/banhmisungbo-hanhnhan-1694963525517.jpg', 1, 58000, 58000, '2023-10-08 01:57:38', '2023-10-08 01:57:38'),
(70, 34, 41, 'Bánh mỳ sừng bò  hạnh nhân', 'http://localhost:8080/img/products/banhmisungbo-hanhnhan-1694963525517.jpg', 10, 58000, 580000, '2023-10-08 01:58:07', '2023-10-08 01:58:07'),
(71, NULL, 41, 'Bánh mỳ sừng bò  hạnh nhân', 'http://localhost:8080/img/products/banhmisungbo-hanhnhan-1694963525517.jpg', 1, 58000, 58000, '2024-02-26 08:01:25', '2024-02-26 08:01:25'),
(72, NULL, 41, 'Bánh mỳ sừng bò  hạnh nhân', 'http://localhost:8080/img/products/banhmisungbo-hanhnhan-1694963525517.jpg', 1, 58000, 58000, '2024-02-26 08:01:29', '2024-02-26 08:01:29'),
(73, NULL, 41, 'Bánh mỳ sừng bò  hạnh nhân', 'http://localhost:8080/img/products/banhmisungbo-hanhnhan-1694963525517.jpg', 1, 58000, 58000, '2024-02-26 08:01:30', '2024-02-26 08:01:30'),
(74, NULL, 41, 'Bánh mỳ sừng bò  hạnh nhân', 'http://localhost:8080/img/products/banhmisungbo-hanhnhan-1694963525517.jpg', 1, 58000, 58000, '2024-02-26 08:01:31', '2024-02-26 08:01:31'),
(75, 35, 42, 'Bánh mỳ sừng bò  dâu tây', 'http://localhost:8080/img/products/banhmisungbo-dautay-1694963549456.jpg', 1, 34000, 34000, '2024-02-26 08:02:34', '2024-02-26 08:02:34');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(4, 'Bánh mỳ sừng bò', '2023-09-12 08:46:41', '2023-09-12 14:00:37'),
(21, 'Bánh bông lan', '2023-09-13 02:41:37', '2023-09-13 02:41:37'),
(22, 'Bánh rán', '2023-09-13 02:47:18', '2023-09-13 02:47:18'),
(23, 'Bánh gạo', '2023-09-13 02:48:36', '2023-09-13 02:48:36'),
(24, 'Bánh kem', '2023-09-13 02:49:16', '2023-09-13 02:49:16'),
(25, 'Bánh Muffin', '2023-09-13 02:53:59', '2023-09-13 02:53:59'),
(26, 'Bánh Pancakes', '2023-09-13 02:55:03', '2023-09-13 02:55:03'),
(27, 'Bánh Cheesecake', '2023-09-13 02:56:27', '2023-09-13 02:56:27');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `group`
--

CREATE TABLE `group` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `group`
--

INSERT INTO `group` (`id`, `name`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'Admin', 'Quản trị viên', NULL, NULL),
(2, 'Admin', 'Quản lý cửa hàng', NULL, NULL),
(3, 'Admin', 'Nhân viên cửa hàng', NULL, NULL),
(4, 'User', 'Người dùng', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `group_role`
--

CREATE TABLE `group_role` (
  `id` int(11) NOT NULL,
  `groupId` int(11) DEFAULT NULL,
  `roleId` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `group_role`
--

INSERT INTO `group_role` (`id`, `groupId`, `roleId`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, NULL, NULL),
(2, 1, 2, NULL, NULL),
(3, 1, 3, NULL, NULL),
(4, 1, 4, NULL, NULL),
(5, 1, 5, NULL, NULL),
(6, 1, 6, NULL, NULL),
(7, 1, 7, NULL, NULL),
(8, 1, 8, NULL, NULL),
(9, 1, 9, NULL, NULL),
(10, 1, 10, NULL, NULL),
(11, 1, 11, NULL, NULL),
(12, 1, 12, NULL, NULL),
(13, 1, 13, NULL, NULL),
(14, 1, 14, NULL, NULL),
(15, 1, 15, NULL, NULL),
(16, 1, 16, NULL, NULL),
(17, 1, 17, NULL, NULL),
(18, 1, 18, NULL, NULL),
(19, 1, 19, NULL, NULL),
(42, 4, 1, '2023-09-29 14:26:24', '2023-09-29 14:26:24'),
(43, 4, 5, '2023-09-29 14:26:24', '2023-09-29 14:26:24'),
(44, 4, 6, '2023-09-29 14:26:24', '2023-09-29 14:26:24'),
(45, 4, 10, '2023-09-29 14:26:24', '2023-09-29 14:26:24'),
(46, 4, 11, '2023-09-29 14:26:24', '2023-09-29 14:26:24'),
(47, 4, 12, '2023-09-29 14:26:24', '2023-09-29 14:26:24'),
(48, 4, 13, '2023-09-29 14:26:24', '2023-09-29 14:26:24'),
(49, 4, 17, '2023-09-29 14:26:24', '2023-09-29 14:26:24'),
(50, 1, 20, NULL, NULL),
(52, 3, 1, '2023-09-29 14:29:53', '2023-09-29 14:29:53'),
(53, 3, 2, '2023-09-29 14:29:53', '2023-09-29 14:29:53'),
(54, 3, 3, '2023-09-29 14:29:53', '2023-09-29 14:29:53'),
(55, 3, 6, '2023-09-29 14:29:53', '2023-09-29 14:29:53'),
(56, 3, 7, '2023-09-29 14:29:53', '2023-09-29 14:29:53'),
(57, 3, 8, '2023-09-29 14:29:53', '2023-09-29 14:29:53'),
(58, 3, 10, '2023-09-29 14:29:53', '2023-09-29 14:29:53'),
(59, 3, 11, '2023-09-29 14:29:53', '2023-09-29 14:29:53'),
(60, 3, 12, '2023-09-29 14:29:53', '2023-09-29 14:29:53'),
(61, 3, 13, '2023-09-29 14:29:53', '2023-09-29 14:29:53'),
(62, 3, 14, '2023-09-29 14:29:53', '2023-09-29 14:29:53'),
(63, 3, 15, '2023-09-29 14:29:53', '2023-09-29 14:29:53'),
(64, 3, 17, '2023-09-29 14:29:53', '2023-09-29 14:29:53'),
(65, 3, 18, '2023-09-29 14:29:53', '2023-09-29 14:29:53'),
(200, 1, 201, NULL, NULL),
(201, 1, 202, NULL, NULL),
(209, 1, 204, NULL, NULL),
(210, 2, 1, '2023-10-08 01:05:31', '2023-10-08 01:05:31'),
(211, 2, 2, '2023-10-08 01:05:31', '2023-10-08 01:05:31'),
(212, 2, 3, '2023-10-08 01:05:31', '2023-10-08 01:05:31'),
(213, 2, 4, '2023-10-08 01:05:31', '2023-10-08 01:05:31'),
(214, 2, 5, '2023-10-08 01:05:31', '2023-10-08 01:05:31'),
(215, 2, 6, '2023-10-08 01:05:31', '2023-10-08 01:05:31'),
(216, 2, 7, '2023-10-08 01:05:31', '2023-10-08 01:05:31'),
(217, 2, 8, '2023-10-08 01:05:31', '2023-10-08 01:05:31'),
(218, 2, 9, '2023-10-08 01:05:31', '2023-10-08 01:05:31'),
(219, 2, 10, '2023-10-08 01:05:31', '2023-10-08 01:05:31'),
(220, 2, 11, '2023-10-08 01:05:31', '2023-10-08 01:05:31'),
(221, 2, 12, '2023-10-08 01:05:31', '2023-10-08 01:05:31'),
(222, 2, 13, '2023-10-08 01:05:31', '2023-10-08 01:05:31'),
(223, 2, 14, '2023-10-08 01:05:31', '2023-10-08 01:05:31'),
(224, 2, 15, '2023-10-08 01:05:31', '2023-10-08 01:05:31'),
(225, 2, 16, '2023-10-08 01:05:31', '2023-10-08 01:05:31'),
(226, 2, 17, '2023-10-08 01:05:31', '2023-10-08 01:05:31'),
(227, 2, 18, '2023-10-08 01:05:31', '2023-10-08 01:05:31'),
(228, 2, 19, '2023-10-08 01:05:31', '2023-10-08 01:05:31'),
(229, 2, 20, '2023-10-08 01:05:31', '2023-10-08 01:05:31'),
(230, 2, 201, '2023-10-08 01:05:31', '2023-10-08 01:05:31'),
(231, 2, 202, '2023-10-08 01:05:31', '2023-10-08 01:05:31'),
(232, 2, 204, '2023-10-08 01:05:31', '2023-10-08 01:05:31');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order`
--

CREATE TABLE `order` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `order`
--

INSERT INTO `order` (`id`, `userId`, `amount`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 17, 350000, 'Giao hàng thành công', '2023-09-01', NULL),
(2, 17, 1656000, 'Giao hàng thành công', '2023-09-15', NULL),
(3, 17, 2184000, 'Giao hàng thành công', '2023-09-20', NULL),
(4, 17, 1062000, 'Giao hàng thành công', '2023-09-25', NULL),
(5, 17, 312000, 'Giao hàng thành công', '2023-10-01', NULL),
(6, 18, 1014000, 'Giao hàng thành công', '2023-09-05', NULL),
(7, 18, 1302000, 'Giao hàng thành công', '2023-09-12', NULL),
(8, 18, 936000, 'Giao hàng thành công', '2023-09-18', NULL),
(9, 18, 1740000, 'Giao hàng thành công', '2023-09-23', NULL),
(10, 18, 520000, 'Giao hàng thành công', '2023-09-30', NULL),
(11, 19, 760000, 'Giao hàng thành công', '2023-09-07', NULL),
(12, 19, 1440000, 'Giao hàng thành công', '2023-09-14', NULL),
(13, 19, 1104000, 'Giao hàng thành công', '2023-09-21', NULL),
(14, 19, 832000, 'Giao hàng thành công', '2023-09-27', NULL),
(15, 19, 1716000, 'Giao hàng thành công', '2023-10-02', NULL),
(16, 20, 1162000, 'Giao hàng thành công', '2023-09-10', NULL),
(17, 20, 1092000, 'Giao hàng thành công', '2023-09-17', NULL),
(18, 20, 1560000, 'Giao hàng thành công', '2023-09-24', NULL),
(19, 20, 2088000, 'Giao hàng thành công', '2023-09-29', NULL),
(20, 20, 1344000, 'Giao hàng thành công', '2023-10-01', NULL),
(21, 20, 1162000, 'Giao hàng thành công', '2023-08-16', NULL),
(22, 20, 1092000, 'Giao hàng thành công', '2023-08-08', NULL),
(23, 20, 1560000, 'Giao hàng thành công', '2023-08-27', NULL),
(24, 20, 2088000, 'Giao hàng thành công', '2023-08-23', NULL),
(25, 20, 1344000, 'Giao hàng thành công', '2023-08-19', NULL),
(26, 18, 1014000, 'Giao hàng thành công', '2023-08-14', NULL),
(27, 18, 1302000, 'Giao hàng thành công', '2023-08-17', NULL),
(28, 18, 936000, 'Giao hàng thành công', '2023-08-20', NULL),
(29, 18, 1740000, 'Giao hàng thành công', '2023-08-26', NULL),
(30, 18, 520000, 'Giao hàng thành công', '2023-08-28', NULL),
(31, 17, 350000, 'Giao hàng thành công', '2023-08-04', NULL),
(32, 17, 1656000, 'Giao hàng thành công', '2023-08-11', NULL),
(33, 17, 2184000, 'Giao hàng thành công', '2023-08-18', NULL),
(34, 17, 1062000, 'Giao hàng thành công', '2023-08-25', NULL),
(35, 17, 312000, 'Giao hàng thành công', '2023-08-29', NULL),
(45, 20, 1344000, 'Giao hàng thành công', '2023-10-06', NULL),
(47, 20, 109000, 'Giao hàng thành công', '2023-10-06', NULL),
(48, 20, 156000, 'Giao hàng thành công', '2023-10-06', NULL),
(49, 20, 208000, 'Giao hàng thành công', '2023-10-06', NULL),
(50, 20, 1344000, 'Giao hàng thành công', '2023-10-06', NULL),
(51, 20, 1162000, 'Giao hàng thành công', '2023-10-06', NULL),
(52, 20, 1092000, 'Giao hàng thành công', '2023-10-06', NULL),
(53, 20, 1560000, 'Giao hàng thành công', '2023-10-06', NULL),
(55, 20, 1344000, 'Giao hàng thành công', '2023-10-06', NULL),
(56, 17, 350000, 'Giao hàng thành công', '2023-10-05', NULL),
(57, 17, 1656000, 'Giao hàng thành công', '2023-10-05', NULL),
(58, 17, 2184000, 'Giao hàng thành công', '2023-10-05', NULL),
(59, 17, 1062000, 'Giao hàng thành công', '2023-10-05', NULL),
(60, 17, 312000, 'Giao hàng thành công', '2023-10-05', NULL),
(61, 17, 350000, 'Giao hàng thành công', '2023-10-04', NULL),
(62, 17, 1656000, 'Giao hàng thành công', '2023-10-04', NULL),
(63, 17, 2184000, 'Giao hàng thành công', '2023-10-04', NULL),
(64, 17, 1062000, 'Giao hàng thành công', '2023-10-04', NULL),
(65, 17, 312000, 'Giao hàng thành công', '2023-10-04', NULL),
(66, 33, 92000, 'Giao hàng thành công', '2023-10-07', '2023-10-07'),
(67, 33, 201000, 'Giao hàng thành công', '2023-10-07', '2023-10-08'),
(68, 33, 235000, 'Đặt hàng thành công', '2023-10-07', '2023-10-07'),
(69, 31, 92000, 'Giao hàng thành công', '2023-10-07', '2023-10-07'),
(70, 31, 108000, 'Đặt hàng thành công', '2023-10-07', '2023-10-07'),
(71, 25, 108000, 'Đặt hàng thành công', '2023-10-08', '2023-10-08'),
(73, 34, 74000, 'Giao hàng thành công', '2023-10-08', '2023-10-08'),
(74, 1, 116000, 'Đặt hàng thành công', '2023-10-12', '2023-10-12');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order_detail`
--

CREATE TABLE `order_detail` (
  `id` int(11) NOT NULL,
  `orderId` int(11) DEFAULT NULL,
  `productId` int(11) DEFAULT NULL,
  `productName` varchar(255) DEFAULT NULL,
  `productPrice` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `order_detail`
--

INSERT INTO `order_detail` (`id`, `orderId`, `productId`, `productName`, `productPrice`, `quantity`, `amount`, `createdAt`, `updatedAt`) VALUES
(1, 66, 42, 'Bánh mỳ sừng bò  dâu tây', 34000, 1, 34000, '2023-10-07', '2023-10-07'),
(2, 66, 41, 'Bánh mỳ sừng bò  hạnh nhân', 58000, 1, 58000, '2023-10-07', '2023-10-07'),
(3, 67, 41, 'Bánh mỳ sừng bò  hạnh nhân', 58000, 1, 58000, '2023-10-07', '2023-10-07'),
(4, 67, 38, 'Bánh pancakes Đức', 143000, 1, 143000, '2023-10-07', '2023-10-07'),
(5, 68, 42, 'Bánh mỳ sừng bò  dâu tây', 34000, 1, 34000, '2023-10-07', '2023-10-07'),
(6, 68, 41, 'Bánh mỳ sừng bò  hạnh nhân', 58000, 1, 58000, '2023-10-07', '2023-10-07'),
(7, 68, 38, 'Bánh pancakes Đức', 143000, 1, 143000, '2023-10-07', '2023-10-07'),
(8, 69, 42, 'Bánh mỳ sừng bò  dâu tây', 34000, 1, 34000, '2023-10-07', '2023-10-07'),
(9, 69, 41, 'Bánh mỳ sừng bò  hạnh nhân', 58000, 1, 58000, '2023-10-07', '2023-10-07'),
(10, 70, 42, 'Bánh mỳ sừng bò  dâu tây', 34000, 1, 34000, '2023-10-07', '2023-10-07'),
(11, 70, 41, 'Bánh mỳ sừng bò  hạnh nhân', 58000, 1, 58000, '2023-10-07', '2023-10-07'),
(12, 70, 40, 'Bánh mỳ sừng bò truyền thống', 16000, 1, 16000, '2023-10-07', '2023-10-07'),
(13, 71, 42, 'Bánh mỳ sừng bò  dâu tây', 34000, 1, 34000, '2023-10-08', '2023-10-08'),
(14, 71, 40, 'Bánh mỳ sừng bò truyền thống', 16000, 1, 16000, '2023-10-08', '2023-10-08'),
(15, 71, 41, 'Bánh mỳ sừng bò  hạnh nhân', 58000, 1, 58000, '2023-10-08', '2023-10-08'),
(17, 72, 41, 'Bánh mỳ sừng bò  hạnh nhân', 58000, 1, 58000, '2023-10-08', '2023-10-08'),
(18, 73, 41, 'Bánh mỳ sừng bò  hạnh nhân', 58000, 1, 58000, '2023-10-08', '2023-10-08'),
(19, 73, 40, 'Bánh mỳ sừng bò truyền thống', 16000, 1, 16000, '2023-10-08', '2023-10-08'),
(20, 74, 41, 'Bánh mỳ sừng bò  hạnh nhân', 58000, 1, 58000, '2023-10-12', '2023-10-12'),
(21, 74, 41, 'Bánh mỳ sừng bò  hạnh nhân', 58000, 1, 58000, '2023-10-12', '2023-10-12');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `categoryId` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `mfg` varchar(255) DEFAULT NULL,
  `exp` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`id`, `name`, `image`, `categoryId`, `price`, `description`, `quantity`, `mfg`, `exp`, `createdAt`, `updatedAt`) VALUES
(16, 'Cheesecake chanh leo', 'http://localhost:8080/img/products/cheesecakechanhleo-1694961798454.jpg', 27, 298000, 'dâu tây với vỏ bánh từ bột mì, bơ, đường cát, trứng gà, men, muối. Nhân bánh từ oreo thơm ngonn, dâu tây quyến rũ hay kiwi chua nhẹ, thơm lừng hương bánh mới đã khiến các khách hàng không thể cưỡng lại được thưởng thức 1 chiếc bánh tuyệt vời như thế trong', 20, NULL, NULL, '2023-09-17 14:43:18', '2023-09-17 14:43:18'),
(18, 'Cheesecake hoa anh đào', 'http://localhost:8080/img/products/cheesecakehoaanhdao-1694961902702.jpg', 27, 320000, 'Sakura Cheesecake hay còn gọi là bánh phô mai hoa anh đào - 1 loại bánh cực ngon đến từ xứ sở hoa anh đào Nhật Bản. Món bánh này còn được xem là một trong số những món ăn đường phố thu hút rất nhiều khách du lịch khi đến đất nước này. Còn chần chờ gì nữa ', 14, NULL, NULL, '2023-09-17 14:45:02', '2023-09-17 14:45:02'),
(19, 'Cheesecake trà xanh', 'http://localhost:8080/img/products/cheesecaketraxanh-1694961948876.jpg', 27, 200000, 'Vào những lúc rảnh rỗi hoặc khi muốn chiêu đãi bạn bè, người thân một món gì đó thật ngon miệng, đẹp mắt thì cheesecake trà xanh chính là lựa chọn đúng đắn nhất của bạn. Chắc chắn chiếc bánh cheesecake thơm lừng, ngọt ngào sẽ khiến những người xung quanh ', 12, NULL, NULL, '2023-09-17 14:45:48', '2023-09-17 14:45:48'),
(20, 'Cheesecake xoài', 'http://localhost:8080/img/products/cheesecake-xoai-1694962034991.jpg', 27, 300000, 'Bánh cheesecake xoài chua ngọt kết hợp với vị béo của kem mang lại “hương vị” mới lạ. Đây chính là dấu nhấn của bánh khiến ai dùng một lần đều nhớ mãi và tìm cách làm lại. Hiểu được điều này trong bài viết dưới đây, chúng tôi sẽ chia sẻ cách làm bánh chee', 13, NULL, NULL, '2023-09-17 14:47:14', '2023-09-17 14:47:14'),
(21, 'Cheesecake cam', 'http://localhost:8080/img/products/cheesecake-cam-1694962100054.jpg', 27, 250000, 'Bổ sung vitamin từ quả cam cho cả gia đình từ các món bánh ngon lành thôi nào, đặc biệt là các bé con sẽ rất chịu khó măm măm đó ạ ^^. Cách làm cheesecake vốn rất đơn giản, làm bánh cheesecake cam này cũng vậy, chẳng cần phải có lò nướng đâu.', 16, NULL, NULL, '2023-09-17 14:48:20', '2023-09-17 14:48:20'),
(22, 'Bánh cheesecake dâu tây', 'http://localhost:8080/img/products/cheesecake-daujpg-1694962191222.jpg', 27, 310000, 'Cheesecake không cầu kì trong nguyên liệu cũng như cách làm, cho bạn trổ tài làm bánh ngon mát lạnh, béo ngậy và mềm mịn để cả nhà tráng miệng trong những ngày đầu hè oi bức này.Phô mai đi cùng với dâu là một sự kết hợp tuyệt vời vì vị kem béo ngậy được t', 4, NULL, NULL, '2023-09-17 14:49:51', '2023-09-17 14:49:51'),
(23, 'Bánh cheesecake việt quất', 'http://localhost:8080/img/products/cheesecake-vietquat-1694962225868.jpg', 27, 340000, 'Bánh cheesecake việt quất mềm mịn, chua chua ngọt ngọt từ quả việt quất tươi cùng vị kem phô mai béo ngậy là món tráng miệng tuyệt vời. Cách làm bánh cheesecake việt quất cực đơn đơn, nguyên liệu dễ kiếm, bạn có thể thực hiện nó một cách dễ dàng.', 11, NULL, NULL, '2023-09-17 14:50:25', '2023-09-17 14:50:25'),
(24, 'Bánh cheese bạc hà', 'http://localhost:8080/img/products/cheesecake-bacha-1694962249005.jpg', 27, 240000, 'Xin giới thiệu với các bạn cách làm bánh CupCake Socola Bạc Hà. Đây cũng là món ăn tráng miệng tuyệt vời trong các buổi party không những có vị ngọt ngào của chocolate và vị thơm mát của bạc hà mà còn rất đẹp mắt và sang trọng.', 8, NULL, NULL, '2023-09-17 14:50:49', '2023-09-17 14:50:49'),
(25, ' Bánh cheesecake sữa chua', 'http://localhost:8080/img/products/cheesecake-suachua-1694962362579.jpg', 27, 220000, NULL, 9, NULL, NULL, '2023-09-17 14:52:42', '2023-09-17 14:52:42'),
(26, 'Bánh cheesecake mè đen', 'http://localhost:8080/img/products/cheesecake-meden-1694962414907.jpg', 27, 210000, NULL, 14, NULL, NULL, '2023-09-17 14:53:34', '2023-09-17 14:53:34'),
(27, 'Bánh cheesecake bơ đậu phộng', 'http://localhost:8080/img/products/cheesecake-bodauphongjpg-1694962469344.jpg', 27, 190000, NULL, 18, NULL, NULL, '2023-09-17 14:54:29', '2023-09-17 14:54:29'),
(28, 'Bánh cheesecake nho xanh', 'http://localhost:8080/img/products/cheesecake-nhoxanhjpg-1694962507596.jpg', 27, 170000, NULL, 19, NULL, NULL, '2023-09-17 14:55:07', '2023-09-17 14:55:07'),
(29, 'Bánh pancakes Nhật Bản', 'http://localhost:8080/img/products/pancake-nhat-1694962924037.jpg', 25, 150000, NULL, 4, NULL, NULL, '2023-09-17 15:02:04', '2023-10-12 15:48:48'),
(30, 'Bánh pancakes Hàn Quốc', 'http://localhost:8080/img/products/pancake-han-1694962963598.jpg', 26, 155000, NULL, 7, NULL, NULL, '2023-09-17 15:02:43', '2023-09-17 15:02:43'),
(31, 'Bánh pancakes Thái Lan', 'http://localhost:8080/img/products/pancake-han-1694962986166.jpg', 26, 125000, NULL, 16, NULL, NULL, '2023-09-17 15:03:06', '2023-09-17 15:03:06'),
(33, 'Bánh pancakes Hà Lan', 'http://localhost:8080/img/products/pancake-halan-1694963037491.jpg', 26, 130000, NULL, 9, NULL, NULL, '2023-09-17 15:03:57', '2023-09-17 15:03:57'),
(34, 'Bánh pancakes Tây Ban Nha', 'http://localhost:8080/img/products/pancake-taybannha-1694963062782.jpg', 26, 1380000, NULL, 12, NULL, NULL, '2023-09-17 15:04:22', '2023-09-17 15:04:22'),
(35, 'Bánh pancakes Nigeria', 'http://localhost:8080/img/products/pancake-nigeria-1694963091643.jpg', 26, 1260000, NULL, 7, NULL, NULL, '2023-09-17 15:04:51', '2023-09-17 15:04:51'),
(36, 'Bánh pancakes Brazil', 'http://localhost:8080/img/products/pancake-nigeria-1694963105321.jpg', 26, 1560000, NULL, 3, NULL, NULL, '2023-09-17 15:05:05', '2023-09-17 15:05:05'),
(37, 'Bánh pancakes Pháp', 'http://localhost:8080/img/products/pancake-phap-1694963132609.jpg', 26, 1440000, NULL, 6, NULL, NULL, '2023-09-17 15:05:32', '2023-09-17 15:05:32'),
(38, 'Bánh pancakes Đức', 'http://localhost:8080/img/products/pancake-duc-1694963188367.jpg', 26, 143000, NULL, 5, NULL, NULL, '2023-09-17 15:06:28', '2023-09-17 15:06:28'),
(39, 'Bánh mỳ sừng bò socola', 'http://localhost:8080/img/products/banhmisungbo-socola-1694963436552.jpg', 4, 28000, 'Bánh mỳ sừng bò là món bánh có nguồn gốc từ nước Áo và khá được ưa chuộng nhờ sở hữu lớp vỏ giòn xốp, thơm ngon. Nay món bánh này lại càng hấp dẫn hơn khi được kết hợp cùng nhân kem chocolate béo ngậy, đắng ngọt. Món bánh hoàn hảo hơn khi được thêm lớp ch', 34, NULL, NULL, '2023-09-17 15:10:36', '2023-09-17 15:10:36'),
(40, 'Bánh mỳ sừng bò truyền thống', 'http://localhost:8080/img/products/banhmisungbo-truyenthong-1694963475393.jpg', 4, 16000, 'Đối với những ai yêu thích các món bánh ngọt của Pháp, chắc hẳn không thể không biết đến món bánh mì sừng bò - Croissant trứ danh của đất nước này. Sự hòa quyện của bột, bơ, đường cùng các nguyên liệu khác trong kết cấu bánh ngàn lớp khiến món bánh mì này', 18, NULL, NULL, '2023-09-17 15:11:15', '2023-09-17 15:11:15'),
(41, 'Bánh mỳ sừng bò  hạnh nhân', 'http://localhost:8080/img/products/banhmisungbo-hanhnhan-1694963525517.jpg', 4, 58000, 'Xuất phát từ ý tưởng muốn tận dụng những chiếc bánh cũ từ hôm trước, các thợ bánh đã phết lên vỏ bánh croissant truyền thống một lớp kem hoặc chocolate trắng sau đó rắc hạt hạnh nhân cắt lát lên rồi đem đi nướng lại một lần nữa. Bánh Croissant hạnh nhân (', 12, NULL, NULL, '2023-09-17 15:12:05', '2023-09-17 15:12:05'),
(42, 'Bánh mỳ sừng bò  dâu tây', 'http://localhost:8080/img/products/banhmisungbo-dautay-1694963549456.jpg', 4, 34000, 'Dâu tây với vỏ bánh từ bột mì, bơ, đường cát, trứng gà, men, muối. Nhân bánh từ oreo thơm ngonn, dâu tây quyến rũ hay kiwi chua nhẹ, thơm lừng hương bánh mới đã khiến các khách hàng không thể cưỡng lại được thưởng thức 1 chiếc bánh tuyệt vời như thế trong', 12, NULL, NULL, '2023-09-17 15:12:29', '2023-10-04 16:21:22');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `url` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `role`
--

INSERT INTO `role` (`id`, `url`, `description`, `createdAt`, `updatedAt`) VALUES
(1, '/users/read', 'Xem danh sách tài khoản', NULL, NULL),
(2, '/user/create', 'Thêm tài khoản', NULL, NULL),
(3, '/user/update', 'Cập nhật thông tin tài khoản', NULL, NULL),
(4, '/user/delete', 'Xóa tài khoản', NULL, NULL),
(5, '/groups/read', 'Xem danh sách nhóm người dùng', NULL, NULL),
(6, '/product/read', 'Xem danh sách sản phẩm', NULL, NULL),
(7, '/product/create', 'Thêm mới sản phẩm', NULL, NULL),
(8, '/product/update', 'Cập nhật thông tin sản phẩm', NULL, NULL),
(9, '/product/delete', 'Xóa sản phẩm', NULL, NULL),
(10, '/products/new', 'Xem sản phẩm mới nhất', NULL, NULL),
(11, '/product/find/', 'Xem chi tiết sản phẩm', NULL, NULL),
(12, '/productbycategory', 'Xem sản phẩm theo danh mục', NULL, NULL),
(13, '/category/read', 'Xem danh mục', NULL, NULL),
(14, '/category/create', 'Thêm danh mục', NULL, NULL),
(15, '/category/update', 'Sửa danh mục', NULL, NULL),
(16, '/category/delete', 'Xóa danh mục', NULL, NULL),
(17, '/file/upload', 'Tải lên file', NULL, NULL),
(18, '/admin', 'Trang quản trị', NULL, NULL),
(19, '/role/read', 'Xem quyền hạn', NULL, NULL),
(20, '/group-role/read', 'Xem quyền hạn nhóm người dùng', NULL, NULL),
(201, '/sale', 'Thống kê doanh thu', NULL, NULL),
(202, '/group-role', NULL, NULL, NULL),
(204, '/group-role/create', 'Phân quyền người dùng', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('migration-cart.js'),
('migration-categories.js'),
('migration-group-role.js'),
('migration-group.js'),
('migration-order-detail.js'),
('migration-order.js'),
('migration-product.js'),
('migration-role.js'),
('migration-user.js');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `groupId` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `name`, `phone`, `address`, `groupId`, `createdAt`, `updatedAt`) VALUES
(1, 'admin@gmail.com', '$2a$10$nSPHRjg3w.naCDqE.wD6OOcWm4/845IIKhkLsF1EUEKZ/YC3TsHmC', 'Phạm Văn Bình', '0356487964', 'Minh Đức - Thủy Nguyên - Hải Phòng', 1, '2023-09-20 14:09:53', '2023-09-20 14:09:53'),
(17, 'huongdle@gmail.com', '$2a$10$8foz/4PdelV76Dg3FEzzEe5Wnbq9Rzm1y28h5PRaBTFdOgk7yISj6', 'Lê Thị Hương Diệu', '0812384058', 'Minh Đức - Thủy Nguyên - Hải Phòng', 2, '2023-09-11 16:36:32', '2023-10-04 15:41:41'),
(19, 'tuyetnga123@gmail.com', '$2a$10$8foz/4PdelV76Dg3FEzzEe5Wnbq9Rzm1y28h5PRaBTFdOgk7yISj6', 'Nguyễn Thị Tuyết Nga', '0348390176', 'Minh Đức - Thủy Nguyên - Hải Phòng', 3, '2023-09-11 16:38:47', '2023-10-07 04:42:37'),
(20, 'tuongvycanhmong@gmail.com', '$2a$10$8foz/4PdelV76Dg3FEzzEe5Wnbq9Rzm1y28h5PRaBTFdOgk7yISj6', 'Phan Tường Vy	', '0702420621', 'Minh Đức - Thủy Nguyên - Hải Phòng', 4, '2023-09-11 16:39:19', '2023-09-11 16:39:19'),
(21, 'hanhhayhat@gmail.com', '$2a$10$8foz/4PdelV76Dg3FEzzEe5Wnbq9Rzm1y28h5PRaBTFdOgk7yISj6', 'Nguyễn Thị Hạnh', '0363001164', 'Minh Đức - Thủy Nguyên - Hải Phòng', 4, '2023-09-11 16:39:53', '2023-09-11 16:39:53'),
(23, 'tramntphp@gmail.com', '$2a$10$oL7dDTNGZJ3aZcPbW6q5MObrbmG4OWIxSFJjJUSN/jx44/qrp1Iwa', 'Nguyễn Thị Phương Trâm', '0769664920', 'Minh Đức - Thủy Nguyên - Hải Phòng', 4, '2023-09-12 03:57:50', '2023-10-07 04:42:29'),
(25, 'khoibichhoang02@gmail.com', '$2a$10$oL7dDTNGZJ3aZcPbW6q5MObrbmG4OWIxSFJjJUSN/jx44/qrp1Iwa', 'Hoàng Bích Khôi', '0905047698', 'Minh Đức - Thủy Nguyên - Hải Phòng', 4, '2023-09-12 04:03:50', '2023-09-12 04:03:50'),
(27, 'huynhngochoangmai@gmail.com', '$2a$10$EH63YSDU6hf9b2SRqy2QReOQlYgJeDXSmqqywKgCyzB6NUIt43G9G', 'Huỳnh Ngọc Hoàng Mai', '0905055127', 'Minh Đức - Thủy Nguyên - Hải Phòng', 4, '2023-09-12 05:21:57', '2023-09-12 05:21:57'),
(31, 'haichaunguyenvu@gmail.com', '$2a$10$t0o.0aI32uEJe2N9L5T3L.DI4IxskmEN/hrcuEEolHoG79WZ8LN9e', 'Nguyễn Vũ Hải Châu', '0383962869', 'Minh Đức - Thủy Nguyên - Hải Phòng', 4, '2023-09-20 14:18:27', '2023-09-30 03:01:56'),
(32, 'nganhuynh@gmail.com', '$2a$10$t0o.0aI32uEJe2N9L5T3L.DI4IxskmEN/hrcuEEolHoG79WZ8LN9e', 'Huỳnh Thị Hồng Ngân', '0766547423', 'Minh Đức - Thủy Nguyên - Hải Phòng', 4, '2023-09-20 14:23:07', '2023-09-20 14:23:07'),
(33, 'hoaianhnphaiphong@gmail.com', '$2a$10$xEaA.AKhMQzF7Fj6jBNlnOz.rC2EV9u07NzzlFbNu47wcpUqlsLzu', 'Phạm Nguyễn Hoài Anh', '0905742528', 'Minh Đức - Thủy Nguyên - Hải Phòng', 4, '2023-09-20 15:38:08', '2023-10-02 14:51:25'),
(35, '123abc@gmail.com', '$2a$10$XBUZ0RtFD4HXUZ.wu2eTgOxl/LK3YcNl5D5nb2GlEJ8wQX3gIY6Su', 'Phạm Văn Bình', '03564879641', NULL, 4, '2024-02-26 08:02:16', '2024-02-26 08:02:16');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `group`
--
ALTER TABLE `group`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `group_role`
--
ALTER TABLE `group_role`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `order_detail`
--
ALTER TABLE `order_detail`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT cho bảng `group`
--
ALTER TABLE `group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `group_role`
--
ALTER TABLE `group_role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=233;

--
-- AUTO_INCREMENT cho bảng `order`
--
ALTER TABLE `order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT cho bảng `order_detail`
--
ALTER TABLE `order_detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT cho bảng `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=205;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
